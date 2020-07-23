import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import classNames from "classnames";

import { useGlobalState } from "store/store";

import Modal from "components/Modal";
import Logo from "components/Logo";

import "components/Header/style.scss";

const Header = () => {
  const [user, setUser] = useGlobalState("user");
  const [showModal, setShowModal] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [userCookie, setUserCookie, removeUserCookie] = useCookies("user");

  const handleLogout = () => {
    removeUserCookie("user");
    setUser({});
  };

  return (
    <>
      {user.email && (
        <>
          <Navbar bg="dark" variant="dark" expand="xl">
            <Navbar.Brand as={Link} to="/home" className="brand">
              <Logo className="logo-size_small mr-2" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <>
                <Nav className="mr-auto">
                  <div className="flex">
                    <Nav.Link
                      as={Link}
                      to="/games"
                      className={classNames(
                        "link-games",
                        "bg-warning",
                        "text-body",
                        "d-flex",
                        "justify-content-center",
                        "align-items-center"
                      )}
                    >
                      Games
                    </Nav.Link>
                    <NavDropdown
                      title=""
                      className={classNames(
                        "dropdown-games",
                        "bg-warning",
                        "justify-content-center",
                        "align-items-center"
                      )}
                    >
                      <NavDropdown.Item as={Link} to="/speakIt">
                        Speak It
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/englishPuzzle">
                        English Puzzle
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/savanna">
                        Savannah
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/audioChallenge">
                        Audio Challenge
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/sprint">
                        Sprint
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/ourCustomGame">
                        Memory Game
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>

                  <Nav.Link as={Link} to="/vocabulary">
                    Vocabulary
                  </Nav.Link>
                  <Nav.Link as={Link} to="/guess">
                    Learn Words
                  </Nav.Link>
                  <Nav.Link as={Link} to="/statistic">
                    Statistics
                  </Nav.Link>
                  <Nav.Link as={Link} to="/aboutUs">
                    About Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/englishTest">
                    Test
                  </Nav.Link>
                  <Nav.Link onClick={() => setShowModal(!showModal)}>
                    Settings
                  </Nav.Link>
                </Nav>
              </>
              <>
                <Navbar.Text className="mr-1">User:</Navbar.Text>
                <Navbar.Text className="header-user-email">
                  {user.email}
                </Navbar.Text>
                <Button
                  size="sm"
                  variant="warning"
                  className="ml-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            </Navbar.Collapse>
          </Navbar>
          {showModal ? <Modal setShowModal={setShowModal} /> : null}
        </>
      )}
    </>
  );
};

export default Header;
