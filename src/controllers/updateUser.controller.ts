import { Request, Response } from "express";
import updateUserService from "../services/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, age } = req.body;

    await updateUserService(id, name, email, password, age);

    return res.status(200).json({ message: "Usuario atualizado" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default updateUserController;
