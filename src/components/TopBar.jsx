import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const TopBar = function (props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">{props.brandName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopBar;
