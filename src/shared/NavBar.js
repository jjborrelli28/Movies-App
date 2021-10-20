import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { InputSearch } from "./InputSearch";
import { StarIcon } from "./StarIcon";

export const NavBar = () => {
  const rating = [5, 4, 3, 2, 1];

  return (
    <Navbar bg="dark bg-gradient" variant="dark" expand="lg" className="p-4">
      <Container>
        <Navbar.Brand href="/">Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Filter by rating" id="navbarScrollingDropdown">
              {rating.map((stars) => (
                <NavDropdown.Item href="#action3">
                  {Array(stars)
                    .fill(stars)
                    .map((star) => (
                      <StarIcon />
                    ))}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <InputSearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
