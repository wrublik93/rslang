import React from "react";
import "pages/GamesPage/style.scss";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
/* import customGame from "assets/images/games-page/custom-game.jpg"; */
/* import audioChallenge from "assets/images/games-page/audio-challenge.jpg"; */
/* import puzzle from "assets/images/games-page/puzzle.jpg"; */
/* import savanna from "assets/images/games-page/savanna.jpg"; */
/* import speakIt from "assets/images/games-page/speakit.jpg"; */
/* import sprint from "assets/images/games-page/sprint.jpg"; */

const GamesPage = () => {
  const puzzle = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/english-puzzle-game.png`;
  const savanna = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/savannah-game.png`;
  const audioChallenge = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/audio-challenge-game.png`;
  const speakIt = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/speak-it-game.png`;
  const sprint = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/sprint-game.png`;
  const customGame = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/our-game.png`;
  return (
    <div className="games">
      <Container className="games__container">
        <Row className="games__row">
          <Col>
            <CardDeck className="games__card-deck">
              <Card
                className="games__card"
                bg="dark"
                variant="dark"
                onClick={() =>
                  document.querySelector(".click-speak-it").click()
                }
              >
                <Card.Img
                  variant="top"
                  src={speakIt}
                  className="games__image"
                />
                <Card.Body className="games__card-body">
                  <Card.Title>
                    <Link
                      to="/speakIt"
                      className="games__card-body click-speak-it"
                    >
                      Speak It
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card
                className="games__card"
                bg="dark"
                variant="dark"
                onClick={() => document.querySelector(".click-puzzle").click()}
              >
                <Card.Img variant="top" src={puzzle} className="games__image" />
                <Card.Body className="games__card-body">
                  <Card.Title>
                    <Link
                      to="/englishPuzzle"
                      className="games__card-body click-puzzle"
                    >
                      English Puzzle
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card
                className="games__card"
                bg="dark"
                variant="dark"
                onClick={() =>
                  document.querySelector(".click-savannah").click()
                }
              >
                <Card.Img
                  variant="top"
                  src={savanna}
                  className="games__image"
                />
                <Card.Body className="games__card-body">
                  <Card.Title>
                    <Link
                      to="/savanna"
                      className="games__card-body click-savannah"
                    >
                      Savannah
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card
                className="games__card"
                bg="dark"
                variant="dark"
                onClick={() =>
                  document.querySelector(".click-challenge").click()
                }
              >
                <Card.Img
                  variant="top"
                  src={audioChallenge}
                  className="games__image"
                />
                <Card.Body className="games__card-body">
                  <Card.Title>
                    <Link
                      to="/audioChallenge"
                      className="games__card-body click-challenge"
                    >
                      Audio Challenge
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card
                className="games__card"
                bg="dark"
                variant="dark"
                onClick={() => document.querySelector(".click-sprint").click()}
              >
                <Card.Img variant="top" src={sprint} className="games__image" />
                <Card.Body className="games__card-body">
                  <Card.Title>
                    <Link
                      to="/sprint"
                      className="games__card-body click-sprint"
                    >
                      Sprint
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="games__card"
                bg="dark"
                variant="dark"
                onClick={() => document.querySelector(".click-memory").click()}
              >
                <Card.Img
                  variant="top"
                  src={customGame}
                  className="games__image"
                />
                <Card.Body className="games__card-body">
                  <Card.Title>
                    <Link
                      to="/ourCustomGame"
                      className="games__card-body click-memory"
                    >
                      Memory Game
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GamesPage;
