import React, { createContext, useState, useEffect } from "react";
import { URL } from "../src/URL/URL.js";
import axios from "axios";
import { redirectDocument } from 'react-router-dom'

// Créez un contexte d'authentification
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // L'Etat pour suivre si l'authentifiacation est en cours
  const [isLoading, setIsLoading] = useState(false);

  // Etat pour stocker les informations de l'utilisateur connecté
  const [user, setUser] = useState(null);

  // Fonction pour gérer l'authentification de l'utilisateur
  const login = async (dataForm) => {
    console.log("Entree dans login");
    console.log(dataForm);

    // API
    setIsLoading(true);
    try {
      console.log("Entree dans le try de AuthContext");
      const { data, status } = await axios.post(URL.USER_SIGN, dataForm, {
        withCredentials: true,
      });
      console.log(data);
      if (status === 200) {
        // Mettre à jours l'etat du state (user) avec les données de l'utilisateur
        setUser(data);
        console.log(user);
        // Stockez les données de l'utilisatuer dans le local Storage
        localStorage.setItem("user", JSON.stringify(user));
        // console.log(localStorage.getItem("user"))
        const recupUser = localStorage.getItem("user");
        JSON.parse(recupUser);
        // Met isLoading à false apres une authentification
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const logout = () => {
    console.log("Entrée dans logout()");
    localStorage.removeItem("user");
    redirectDocument("/");
  };

  return (
    <AuthContext.Provider value={{ logout, login, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
