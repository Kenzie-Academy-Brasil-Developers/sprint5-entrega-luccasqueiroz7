import { Request, Response } from "express";
import listOneUserService from "../services/listOneUser.service";

const listOneUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await listOneUserService(id);

    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default listOneUserController;
