import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";

const sequelize = new Sequelize(envConfig.connectionString as string, {
  models: [__dirname + "/models"],
});

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

sequelize.sync({ force: false, alter: false }).then(() => {
  console.log("synced !!");
});

export default sequelize;
