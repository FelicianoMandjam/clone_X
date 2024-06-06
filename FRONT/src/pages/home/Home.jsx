import React from 'react';
import '../../style/home.css';
import logo from '../../assets/logo.jpg'; // Assurez-vous que le chemin est correct

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <img src={logo} alt="Logo" className="home-logo" />
        <h1>Bienvenue sur Project X</h1>
        <p>Connectez-vous avec vos amis et le monde qui vous entoure sur Project X.</p>
      </div>
      <div className="home-content">
        <div className="home-tweets">
          <div className="tweet">
            <p>C'est comment les gars ?</p>
            <p>@Feliciano</p>
          </div>
          <div className="tweet">
            <p>Yahn envoie ton casque</p>
            <p>@Julien</p>
          </div>
          <div className="tweet">
            <p>Francis il est dans le métro</p>
            <p>@Ghani</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
