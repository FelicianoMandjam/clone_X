import { User } from "../models/index.js";
import { ENV } from "../config/env.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

    console.log("Connexion reussie");
  } catch (e) {
    res.status(400).json(e.message);
  }
};

// _____________________________________Register __________________________________________________________________________________

export const register = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await User.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(201).json("User has been created!");
  } catch (e) {
    console.log(e);
    next(e);
  }
};

export const post = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      ...req.body,
      password: hashedPassword,
    });
    // res.status(201).json(response)
    res.status(201).json("User created");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    // recherche l'user dnas la base de données par son email
    const users = await User.findAll();
    res.status(200).json(users);
    console.table(users)
  } catch (error) {
    console.log(error);
    res.status(400).json("Not User Found.");
  }
};

export const updateById = async (req, res) => {
  try {
    // Je récupère l'utilisateur avec son id (findByPk)
    const user = await User.findByPk(req.params.id);

    // Puis je met à jour cet utilisateur avec update
    await user.update(req.body);
    if (!user) return res.status(404).json("User not found !");
    res.status(200).json({
      message: "user updated",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};


export const deleteById = async (req, res) => {
  try {
    const userDeleted = await User.destroy({ where: { id: req.params.id } });
    if (!userDeleted) return res.status(404).json("User not found !");
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.log(error);
  }
};
