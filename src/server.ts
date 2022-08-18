import app from "./app";
import { AppDataSource } from "./data-source";

const init = async () => {
  AppDataSource.initialize().then(() => console.log("DataSource initialize"));
  app.listen(3000, () => {
    console.log(`Server running on 3000`);
  });
};

init();
