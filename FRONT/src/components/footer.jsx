import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "../pages/Auth/Login.jsx";

function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  
      <>
      
     <div className="footer d-flex justify-content-around bg-primary">
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
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlPassword"
              type="password"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="password" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button href="/login" variant="secondary" onClick={handleClose}>
            Continuer
          </Button>
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
