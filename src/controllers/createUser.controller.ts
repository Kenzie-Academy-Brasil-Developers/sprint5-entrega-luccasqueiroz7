import { Request, Response } from "express";
import createUserService from "../services/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    // Depois do middleware adicionar como req.newUser
    const { name, email, password, age } = req.body;
    const created_at = new Date();
    const updated_at = new Date();

    const newUser = await createUserService({
      name,
      email,
      password,
      age,
      created_at,
      updated_at,
    });

    delete newUser.password;

    return res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default createUserController;
