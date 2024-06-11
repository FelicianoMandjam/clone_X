import React from 'react';
import Login from '../Auth/Login';
import '../../style/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">

        <h1>BIenvenue sur Project X</h1>
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
