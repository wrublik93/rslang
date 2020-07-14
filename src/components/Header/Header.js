import React from "react";
import { Link } from "react-router-dom";

import "components/Header/style.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import classNames from "classnames";

import Logo from "components/Logo";

const Header = ({ user }) => {
  return (
    <header className="header">
      <Navbar className="header__nav" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
          <Nav.Link as={Link} to="/home" className="nav-link">
            <h1 className="header__title">
              <Logo className="logo-size_small" />
              RS Lang
            </h1>
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="nav-item">
              <Nav.Link as={Link} to="/games" className="nav-link">
                Games
              </Nav.Link>

              <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/speakIt"
                  className={classNames("link", "dropdown-item")}
                >
                  Speak it
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/englishPuzzle"
                  className={classNames("link", "dropdown-item")}
                >
                  English puzzle
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/savanna"
                  className={classNames("link", "dropdown-item")}
                >
                  Savanna
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/audioChallenge"
                  className={classNames("link", "dropdown-item")}
                >
                  Audio challenge
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/sprint"
                  className={classNames("link", "dropdown-item")}
                >
                  Sprint
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/ourCustomGame"
                  className={classNames("link", "dropdown-item")}
                >
                  Our custom game
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <Nav.Link as={Link} to="/vocabulary" className="nav-link">
              Vocabulary
            </Nav.Link>

            <Nav.Link as={Link} to="/guess" className="nav-link">
              Learn Words
            </Nav.Link>

            <Nav.Link as={Link} to="/statistic" className="nav-link">
              Statistics
            </Nav.Link>

            <Nav.Link as={Link} to="/englishTest" className="nav-link">
              Test
            </Nav.Link>

            <Nav.Link as={Link} to="/aboutUs" className="nav-link">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className="header__login">
          Signed in as:{" "}
          <a href="#login" className="text-success">
            {user}
          </a>
        </Navbar.Text>
      </Navbar>
    </header>
  );
};

Header.defaultProps = {
  user: "RS Student",
};

export default Header;
