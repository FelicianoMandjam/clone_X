import React from "react";
import "../../style/home.css";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { URL } from "../../URL/URL.js";
import axios from "axios";
import SideBar from "./sidebar.jsx";

import { AuthContext } from "../../../context/AuthContext";

const Home = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [tweets, setTweets] = useState([]);
  const { login, logout } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("FOO +=>")
    login(user);
    console.log("login");
  };

  // const onClickDeco = (e)

  // const recupTweet = async (dataForm) => {
  //   console.log("Entree dans recup tweet");
  //   console.log(dataForm);

  //   try {
  //     console.log("Entree dans try recup tweet");

  //     const { data, status } = await axios.get(URL.USER_TWEET, dataForm, {
  //       withCredentials: true,
  //     });
  //     console.log(data);

  //     setTweets(data);

  //     if (status === 200) {
  //       console.log("Le tweet est la data ");
  //     }
  //     event.preventDefault();
  //   } catch (e) {
  //     console.log(e);
  //     console.log("error");
  //   }
  // };

  return (
    <div className=" text-white">
      <SideBar />

      {localStorage.length > 0 && (
        <div className="content">
          <h1>Bonjour user</h1>
          <div className="tweets_back">
            <h1>Les tweets ici</h1>
          </div>
          <div className="deconexion">
            <Button onClick={logout}> Déconnexion</Button>
         </div>
        </div>
      )}
      <div className="content">
        <h1>Bienvenue sur notre site!</h1>
        <p>Connectez-vous pour découvrir plus.</p>
      </div>

      {localStorage.length < 1 && (
        <div className="footer position-fixed w-100 d-flex justify-content-around bg-primary">
          <div className="text mt-2">
            <h2>Ne manquez pas ce qui se passe.</h2>
            <p>Les utilisateurs de X sont les premiers à savoir.</p>
          </div>

          <div className="btn mt-2">
            <Button href="/register" className="border-white rounded-pill mx-2">
              {" "}
              S'incrire{" "}
            </Button>
            <Button className="border-white rounded-pill" onClick={handleShow}>
              Se connecter
            </Button>

            {/* Modal    */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header className="bg-dark" closeButton>
                <Modal.Title className="bg-dark">Se connecter</Modal.Title>
              </Modal.Header>

              <Modal.Body className="bg-dark">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <Button
                      className="w-75 mt-3"
                      type="submit"
                      onClick={handleClose}
                    >
                      Continuer
                    </Button>
                  </Form.Group>
                </Form>
              </Modal.Body>

              <Modal.Footer className="bg-dark d-flex justify-content-center">
                <h3>Merci</h3>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
