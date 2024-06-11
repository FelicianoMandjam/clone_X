import {User} from '../models/index.js'
import { ENV } from "../config/env.js";
import bcrypt from "bcrypt";  
import  jwt  from 'jsonwebtoken'; 

const dummyUsers = [
  {
          id : 0,
          username: 'john_doe123',
          lastName: 'Doe',
          firstName: 'John',
          email: 'john.doe@example.com',
          password: 'securePassword1!',
          profilePicture: 'john_profile.jpg',
          bannerPicture: 'john_banner.jpg',
          bio: 'Loves hiking and outdoor adventures.',
          allowMessages: true,
          verifiedAt: new Date('2023-01-15T10:00:00Z'),
          // createdAt: new Date('2023-01-01T10:00:00Z'),
          // updatedAt: new Date('2023-01-01T10:00:00Z')
      },
      {
          id : 1,
          username: 'jane_smith456',
          lastName: 'Smith',
          firstName: 'Jane',
          email: 'jane.smith@example.com',
          password: 'securePassword2!',
          profilePicture: 'jane_profile.jpg',
          bannerPicture: 'jane_banner.jpg',
          bio: 'Aspiring artist and coffee lover.',
          allowMessages: false,
          verifiedAt: new Date('2023-05-20T14:30:00Z'),
          // createdAt: new Date('2023-01-01T10:00:00Z'),
          // updatedAt: new Date('2023-01-01T10:00:00Z')
      },
      {
          id : 2,
          username: 'samuel_lee789',
          lastName: 'Lee',
          firstName: 'Samuel',
          email: 'samuel.lee@example.com',
          password: 'securePassword3!',
          profilePicture: 'samuel_profile.jpg',
          bannerPicture: 'samuel_banner.jpg',
          bio: 'Tech enthusiast and blogger.',
          allowMessages: true,
          verifiedAt: null,
          // createdAt: new Date('2023-01-01T10:00:00Z'),
          // updatedAt: new Date('2023-01-01T10:00:00Z')
      }
  ];


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
        next(e.message);
      }
    }

    export const getAll = async (req, res ) => {
      try{
          const users = await User.findAll();
          res.status(200).json({users})
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
    
    export const delet = async (req, res) => {
      try{
      }catch(e){
        console.log(e.message);
      }
    }