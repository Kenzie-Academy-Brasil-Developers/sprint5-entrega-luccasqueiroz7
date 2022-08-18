import { Request, Response } from "express";
import listUsersService from "../services/listUsers.service";

const listUsersController = async (req: Request, res: Response) => {
  try {
    const users = await listUsersService();

    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default listUsersController;
