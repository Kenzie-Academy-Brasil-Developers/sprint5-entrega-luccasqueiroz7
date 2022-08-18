import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const updateUserService = async (
  id: string,
  name: string,
  email: string,
  password: string,
  age: number
) => {
  const userRepository = AppDataSource.getRepository(User);

  const updated_at: Date = new Date();

  await userRepository.update(id, {
    name: name,
    email: email,
    password: password,
    age: age,
    updated_at: updated_at,
  });

  return true;
};

export default updateUserService;
