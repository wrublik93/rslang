import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import classNames from "classnames";

import { useGlobalState } from "store/store";

import Logo from "components/Logo";

import "components/Header/style.scss";

const Header = () => {
  const [user, setUser] = useGlobalState("user");

  // eslint-disable-next-line no-unused-vars
  const [userCookie, setUserCookie, removeUserCookie] = useCookies("user");

  const handleLogout = () => {
    removeUserCookie("user");
    setUser({});
  };

  return (
    <header className="header">
      <Navbar className="header__nav" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
          <Nav.Link as={Link} to="/home" className="nav-link">
            <h1 className="header__title">
              <Logo className="logo-size_small" />
              <span className="ml-2">RS Lang</span>
            </h1>
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="nav-item">
              <Nav.Link
                as={Link}
                to="/games"
                className="nav-link bg-primary text-white"
              >
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
        <Navbar.Text>
          {user.email && (
            <>
              <div>Signed in as:</div>
              <div className="text-success">{user.email}</div>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Navbar.Text>
      </Navbar>
    </header>
  );
};

export default Header;
