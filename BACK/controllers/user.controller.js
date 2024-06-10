import {User} from '../models/index.js'
import { ENV } from "../config/env.js";
import bcrypt from "bcrypt";  
import  jwt  from 'jsonwebtoken'; 

    // ______________________________________________________ Login _________________________________________________________________________

    export const login = async (req, res) => {
      try {
        const user = await User.findOne({
          where: { email: req.body.email },
        });

        if (!user) return res.status(404).json("User not found");

        const comparePassword = await bcrypt.compare(
          req.body.password,
          user.password
        );

        if (!comparePassword) return res.status(400).json("Wrong Credentials !! ");
    
        const token = jwt.sign(
          { id: user.id },
    
          ENV.TOKEN,
       
          { expiresIn: "24h" }
        );
        res
          .cookie("access_token", token, { httpOnly: true })
          .status(200)
          .json(user);
    
          console.log("Connexion reussie")
      } catch (e) {
        res.status(400).json(e.message)
      }
    };

    // _____________________________________Register __________________________________________________________________________________

    export const register = async (req , res , next) => {
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
       
        await User.create({
          ...req.body,
          password: hashedPassword,
        });

        res.status(201).json("User has been created!");
        
      } catch (e) {
        console.log(e);
        next(error);
      }
    }


    // export const get =  (req, res ) => {
    //     try{
    //       // const response = await users.post();
    //         const response = users;
    //         res.status(200).json(response)
    //     }catch(e){
    //       console.log(e.message);
    //     }
    //   }
    
    export const post = async (req, res) => {
      try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({
          ...req.body,
          password: hashedPassword})
        res.status(201).json(response)
      }catch(e){
        console.log(e.message);
      }
    }
      
      export const put = async (req, res) => {
        try{
        }catch(e){
          console.log(e.message);
        }
      }
      
      export const _delete = async (req, res) => {
        try{
        }catch(e){
          console.log(e.message);
        }
      }