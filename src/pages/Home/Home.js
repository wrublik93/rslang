import React from "react";
import "pages/Home/style.scss";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
/* import games from "assets/HomePage/games.png"; */
/* import dictionary from "assets/HomePage/vocabulary.png"; */
/* import wordLearn from "assets/HomePage/words.png"; */
/* import statistics from "assets/HomePage/statistics.png"; */

const Home = () => {
  const games = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/HomePage/games.png`;
  const dictionary = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/HomePage/vocabulary.png`;
  const wordLearn = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/HomePage/words.png`;
  const statistics = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/HomePage/statistics.png`;
  return (
    <div className="home">
      <Container className="home__container">
        <Row className="home__row">
          <Col>
            <CardDeck className="home__card-deck">
              <Card
                className="home__card"
                bg="dark"
                variant="dark"
                onClick={() =>
                  document.querySelector(".click-mini-games").click()
                }
              >
                <Card.Img variant="top" src={games} className="home__image" />
                <Card.Body className="home__card-body">
                  <Card.Title>
                    <Link
                      variant="dark"
                      to="/games"
                      className="home__card-body click-mini-games"
                    >
                      Mini games
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card
                className="home__card"
                bg="dark"
                variant="dark"
                onClick={() =>
                  document.querySelector(".click-vocabulary").click()
                }
              >
                <Card.Img
                  variant="top"
                  src={dictionary}
                  className="home__image"
                />
                <Card.Body className="home__card-body">
                  <Card.Title>
                    <Link
                      to="/vocabulary"
                      className="home__card-body click-vocabulary"
                    >
                      Vocabulary
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card
                className="home__card"
                bg="dark"
                variant="dark"
                onClick={() => document.querySelector(".click-words").click()}
              >
                <Card.Img
                  variant="top"
                  src={wordLearn}
                  className="home__image"
                />
                <Card.Body className="home__card-body">
                  <Card.Title>
                    <Link to="/guess" className="home__card-body click-words">
                      Learn new words
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card
                className="home__card"
                bg="dark"
                variant="dark"
                onClick={() =>
                  document.querySelector(".click-statistics").click()
                }
              >
                <Card.Img
                  variant="top"
                  src={statistics}
                  className="home__image"
                />
                <Card.Body className="home__card-body">
                  <Card.Title>
                    <Link
                      to="/statistic"
                      className="home__card-body click-statistics"
                    >
                      Statistics
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

export default Home;
