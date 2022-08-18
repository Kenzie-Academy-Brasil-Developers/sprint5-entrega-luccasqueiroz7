import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteUserService(id);
    return res.status(200).json({ message: "Usuario deletado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default deleteUserController;
