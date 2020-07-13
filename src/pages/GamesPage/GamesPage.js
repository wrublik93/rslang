import React from "react";
import "pages/GamesPage/style.scss";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import customGame from "assets/images/games-page/custom-game.jpg";
import audioChallenge from "assets/images/games-page/audio-challenge.jpg";
import puzzle from "assets/images/games-page/puzzle.jpg";
import savanna from "assets/images/games-page/savanna.jpg";
import speakIt from "assets/images/games-page/speakit.jpg";
import sprint from "assets/images/games-page/sprint.jpg";

const GamesPage = () => {
  return (
    <Container className="games__container">
      <Row className="games__row">
        <Col>
          <CardDeck className="games__card-deck">
            <Card className="games__card">
              <Card.Img variant="top" src={puzzle} />
              <Card.Body>
                <Card.Title>
                  <Link to="/englishPuzzle">English Puzzle</Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="games__card">
              <Card.Img variant="top" src={savanna} />
              <Card.Body>
                <Card.Title>
                  <Link to="/savanna">Savanna</Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="games__card">
              <Card.Img variant="top" src={speakIt} />
              <Card.Body>
                <Card.Title>
                  <Link to="/speakIt">Speak It</Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="games__card">
              <Card.Img variant="top" src={sprint} />
              <Card.Body>
                <Card.Title>
                  <Link to="/sprint">Sprint</Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="games__card">
              <Card.Img variant="top" src={customGame} />
              <Card.Body>
                <Card.Title>
                  <Link to="/ourCustomGame">Our custom game</Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="games__card">
              <Card.Img variant="top" src={audioChallenge} />
              <Card.Body>
                <Card.Title>
                  <Link to="/audioChallenge">Audio Challenge</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default GamesPage;
