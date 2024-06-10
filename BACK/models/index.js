import connection from "../config/db.js";
import {Sequelize} from "sequelize";
import  userModel  from "./user.model.js"
import tweetModel from "./tweet.model.js";
// import mediasModel from "./medias.model.js";

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  userModel(connection, Sequelize);
  tweetModel(connection , Sequelize);
  // mediasModel(connection , Sequelize);
  
  const { User , Tweet  } = connection.models;

  // User / Tweet 
  User.hasMany(Tweet, {as: "tweet"})
  Tweet.belongsTo(User)

  //  Tweet / Medias

  // Tweet.hasMany(Medias,{ as: "medias"})
  // Medias.belongsTo(Tweet)

  // A continuer_________________________________________
  
  await connection.sync({ alter: false, force: true }); 
  console.log("Synchro Ok ");
  
  export { User , Tweet  };