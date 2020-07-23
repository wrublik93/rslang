import "pages/AboutUs/style.scss";
import React from "react";
import classNames from "classnames";
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
    <Container fluid className="pb-4 container-about">
      <Row className="justify-content-center">
        <Col xs={7} lg={7} xl={8}>
          <CardDeck className="participants ">
            {participants &&
              participants.map((participant) => {
                return (
                  <Card
                    className="participants__card back-about"
                    key={participant.id}
                    bg="light"
                  >
                    <Card.Img
                      className="participants__image rounded-circle"
                      variant="top"
                      src={images[participant.id - 1]}
                    />
                    <Card.Body className="back-about">
                      <Card.Title>
                        <h2 className="participants__title">
                          <span className="name">{participant.name}</span>
                          <span className="surname">{participant.surname}</span>
                          <span className="contribution">
                            {participant.contribution}
                          </span>
                        </h2>
                      </Card.Title>
                      <Card.Text
                        className={classNames(
                          "participants__description-block",
                          "h5",
                          "bg-warning",
                          "font-weight-bold",
                          "text-center"
                        )}
                      >
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
