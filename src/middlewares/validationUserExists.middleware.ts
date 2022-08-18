import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const validationUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const userRepository = AppDataSource.getRepository(User);

  const account = await userRepository.findOneBy({ id });

  if (!account) {
    return res.status(404).json({
      error: "Error",
      message: "Usuário não existe",
    });
  }

  next();
};

export default validationUserExistsMiddleware;
