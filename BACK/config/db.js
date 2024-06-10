import {Sequelize } from "sequelize"
import { ENV } from "./env.js";

const connection = new Sequelize(
  ENV.DB_NAME, // Nom de la base de donnÃ©e
  ENV.DB_HOST, // identifiant Mysql
  ENV.DB_PASSWORD, // Mot de passe Mysql
  {
    host: ENV.DB_USER, // URL de mySQL
    dialect: ENV.DIALECT,
    //  pour MAC --------------------
    // dialectOptions: {
    //   socketPath: "/Applications/WAMP/tmp/mysql/mysql.sock",
    // },
  }
);

export default connection;