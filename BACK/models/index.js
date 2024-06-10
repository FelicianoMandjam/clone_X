import {Sequelize} from "sequelize";
import connection from "../config/db.js";
import userModel from "./user.model.js"

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  userModel(connection, Sequelize);
  
  const { User } = connection.models;
  
  await connection.sync({ alter: false, force: false }); 
  console.log("Synchro Ok ");
  
  export { User };
  