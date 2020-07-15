import "pages/AboutUs/style.scss";
import React from "react";
import { Container, Row, CardDeck, Card, Col } from "react-bootstrap";
import participants from "pages/AboutUs/participants";

import vladimir from "assets/images/about-us-page/vladimir.jpeg";
import ivan from "assets/images/about-us-page/ivan.jpeg";
import alexey from "assets/images/about-us-page/alexey.jpeg";
import anastasia from "assets/images/about-us-page/anastasia.jpeg";
import konstantsin from "assets/images/about-us-page/konstantsin.jpeg";
import evgeniya from "assets/images/about-us-page/evgeniya.jpeg";
import yuriy from "assets/images/about-us-page/yuriy.jpeg";
import alesya from "assets/images/about-us-page/alesya.jpeg";

const AboutUs = () => {
  const images = [
    vladimir,
    alexey,
    ivan,
    anastasia,
    konstantsin,
    evgeniya,
    yuriy,
    alesya,
  ];
  return (
    <Container fluid className="pb-4">
      <Row className="justify-content-center">
        <Col xs={7} lg={7} xl={7}>
          <CardDeck className="participants">
            {participants &&
              participants.map((participant) => {
                return (
                  <Card
                    className="participants__card"
                    key={participant.id}
                    bg="light"
                  >
                    <Card.Img
                      className="participants__image rounded-circle"
                      variant="top"
                      src={images[participant.id - 1]}
                    />
                    <Card.Body>
                      <Card.Title>
                        <h2 className="participants__title">
                          <span className="name">{participant.name}</span>
                          <span className="surname">{participant.surname}</span>
                        </h2>
                      </Card.Title>
                      <Card.Text className="participants__description-block h5">
                        {participant.position}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
