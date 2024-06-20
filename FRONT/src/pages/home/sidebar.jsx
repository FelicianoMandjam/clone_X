import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.jpg";
import Button from "react-bootstrap/Button";

const SideBar = () => {
  return (
    <div className="sideBar position-fixed h-100 w-25">
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link href="/">
        {" "}
        <img src={logo} alt="" width={50} height={50} />{" "}
      </Nav.Link>

      <Nav.Link href="#" eventKey="disabled" className="text-white">
        <Button id="btn_params"  className="bg-dark text-white" variant="dark" size="lg">
          Paramètres
        </Button>
      </Nav.Link>
    </Nav>
      
    </div>
  );
};

export default SideBar;
