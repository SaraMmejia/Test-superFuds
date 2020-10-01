import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import "../styles/NavBar.css";

function NavBar() {
  const { state } = useContext(CartContext);
  const { countTotal } = state;

  return (
    <div className="NavBar">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/">
            <h1 className="NavBar-Title">Superfüds</h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="mr-sm-2">
            <FormControl
              type="text"
              placeholder="Buscar marcas y productos... "
              className="input-search"
            />
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi-bi-search"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </Form>
          <Nav className="mr-auto">
            <Link to="/Cart">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                className="bi-bi-cart-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </Link>
            <h1 className="total-count">{countTotal}</h1>
            <div className="Group">
              <Nav.Link href="#home">
                <h2 className="NavBar-link">Saiby Alimentos</h2>
              </Nav.Link>
              <NavDropdown title="Mi perfil" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
          <img
            src={"images/Photo.jpg"}
            className="Photo-perfil"
            alt={"addFodioLogo"}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
