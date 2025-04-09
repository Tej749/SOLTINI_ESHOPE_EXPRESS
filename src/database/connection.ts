import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";

const sequelize = new Sequelize(envConfig.connectionString as string);

try {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database ko authentication milyo hai..");
    })
    .catch((err) => {
      console.log("error ayyo", err);
    });
} catch (error) {}

export default sequelize;
