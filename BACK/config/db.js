import {Sequelize } from "sequelize"
import { ENV } from "./env.js";
import userModel from "../models/user.model.js";

const connection = new Sequelize(
  ENV.DB_NAME, // Nom de la base de donnÃ©e
  "root", // identifiant Mysql
  "root", // Mot de passe Mysql
  {
    host: ENV.DB_HOST, // URL de mySQL
    dialect: ENV.DIALECT,
    //  pour MAC --------------------
    dialectOptions: {
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    },
  }
);

export default connection;