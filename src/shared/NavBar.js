import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { InputSearch } from "./InputSearch";
import { Rating } from "./Rating";

export const NavBar = () => {
  return (
    <Navbar bg="dark bg-gradient" variant="dark" expand="lg" className="p-4">
      <Container>
        <Navbar.Brand href="/">Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Rating />
          <InputSearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
