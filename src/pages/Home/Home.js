import React from "react";
import "pages/Home/style.scss";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import games from "assets/images/home-page/games.jpeg";
import dictionary from "assets/images/home-page/dictionary.jpg";
import wordLearn from "assets/images/home-page/word-learn.jpg";
import statistics from "assets/images/home-page/statistics.jpg";

const Home = () => {
  return (
    <Container className="home__container">
      <Row className="home__row">
        <Col>
          <CardDeck className="home__card-deck">
            <Card className="home__card">
              <Card.Img variant="top" src={games} />
              <Card.Body>
                <Card.Title>
                  <Card.Link href="/games">Mini games</Card.Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="home__card">
              <Card.Img variant="top" src={dictionary} />
              <Card.Body>
                <Card.Title>
                  <Card.Link href="/vocabulary">Vocabulary</Card.Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="home__card">
              <Card.Img variant="top" src={wordLearn} />
              <Card.Body>
                <Card.Title>
                  <Card.Link href="#">Learn new words</Card.Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="home__card">
              <Card.Img variant="top" src={statistics} />
              <Card.Body>
                <Card.Title>
                  <Card.Link href="/statistic">Statistics</Card.Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
