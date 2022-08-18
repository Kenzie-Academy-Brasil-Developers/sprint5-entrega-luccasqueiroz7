import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const emailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const userRepository = AppDataSource.getRepository(User);

  const account = await userRepository.findOneBy({ email });

  if (account) {
    return res.status(400).json({
      error: "Error",
      message: "Email já é utilizado",
    });
  }

  next();
};

export default emailExistsMiddleware;
