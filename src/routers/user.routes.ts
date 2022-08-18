import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listOneUserController from "../controllers/listOneUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";

import emailExistsMiddleware from "../middlewares/emailExists.middleware";
import validationUserExistsMiddleware from "../middlewares/validationUserExists.middleware";

const userRoutes = Router();

userRoutes.post("", emailExistsMiddleware, createUserController);
userRoutes.get("", listUsersController);
userRoutes.get("/:id", validationUserExistsMiddleware, listOneUserController);
userRoutes.delete("/:id", validationUserExistsMiddleware, deleteUserController);
userRoutes.patch("/:id", validationUserExistsMiddleware, updateUserController);
export default userRoutes;
