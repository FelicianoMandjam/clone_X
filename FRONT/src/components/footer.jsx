import { useState , useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "../pages/Auth/Login.jsx";


import { AuthContext } from "../../context/AuthContext.jsx";

function Footer() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({})
  const { login } = useContext(AuthContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser((user) => ({ ...user, [name]: value }))    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("FOO +=>")
    login(user)
  }


  
  return (
    <>
      <div className="footer position-fixed w-100 d-flex justify-content-around bg-primary" >
        <div className="text mt-2">
          <h2>Ne manquez pas ce qui se passe.</h2>
          <p>Les utilisateurs de X sont les premiers à savoir.</p>
        </div>
        <div className="btn mt-2">
          {/* Se connecter */}
          <Button className="border-white rounded-pill" onClick={handleShow}>
            Se connecter
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="bg-dark" closeButton>
              <Modal.Title className="bg-dark">Se connecter</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
                  <Button className="w-75" type="submit">
                Continuer
              </Button>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="bg-dark d-flex justify-content-center">
         
            </Modal.Footer>
          </Modal>

          <Button className="bg-white text-dark rounded-pill" href="/register">
            S'inscrire
          </Button>
          
        </div>
      </div>
    </>
  );
}

export default Footer;


