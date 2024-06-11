import dotenv from "dotenv"

dotenv.config(); 

export const ENV = {
  PORT: process.env.PORT,
  TOKEN: process.env.TOKEN,
  DB_HOST: process.env.HOST,
  DB_NAME: process.env.DBNAME,
  DB_USER: process.env.USER,
  DB_PASSWORD: process.env.PASSWORD,
  DIALECT: process.env.DIALECT
}