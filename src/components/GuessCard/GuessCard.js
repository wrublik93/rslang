import classNames from "classnames";
import "components/GuessCard/style.scss";
import Image from "components/Image/Image";
import React, { useEffect, useRef } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

const createSentenceListItem = (text, translation) => {
  const searchRegExp = /<[A-Za-z]+>(.*?)<\/[A-Za-z]+>/g;
  const replaceWith = "[..]";
  const resultText = (
    <p className="crd__sentence">{text.replace(searchRegExp, replaceWith)}</p>
  );

  const resultTranslation = translation !== undefined && (
    <p className="crd__sentence-translate">
      {" "}
      {translation.replace(searchRegExp, replaceWith)}{" "}
    </p>
  );
  return [resultText, resultTranslation];
};

const GuessCard = (props) => {
  const {
    title,
    word,
    wordTranslate,
    textExample,
    textExampleTranslate,
    textMeaning,
    textMeaningTranslate,
    transcription,
    image,
  } = props;

  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);

  const cardClass = classNames("crd");
  const cardHeaderClass = classNames("crd__header");
  const cardTitleClass = classNames("crd__title", "no-wrap");
  const cardBodyClass = classNames("crd__body");
  const cardInputClass = classNames("crd__input", "no-wrap");
  const cardButtonClass = classNames("crd__button");
  const cardListClass = classNames("crd__list");
  const cardInputBlockClass = classNames(
    "crd__input-block",
    "justify-content-center"
  );
  // eslint-disable-next-line max-len
  const url = `https://raw.githubusercontent.com/irinainina/rslang-data/master/${image}`;
  const inputWidth = {
    width: `calc(${word ? word.length : "4"}rem)`,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={9}>
          <Card className={cardClass}>
            <Card.Header className={cardHeaderClass}>
              <h2 className={cardTitleClass}>{title}</h2>
            </Card.Header>
            <Card.Body className={cardBodyClass}>
              <Container>
                <Row className="crd__image-block">
                  {image && (
                    <Col xs={4}>
                      <Image
                        src={url}
                        alt="picture association"
                        className="crd__image-association"
                      />
                    </Col>
                  )}
                  <Col>
                    <ListGroup
                      as="ul"
                      className={cardListClass}
                      variant="flush"
                    >
                      <ListGroup.Item as="li" key="item-1">
                        <h3>
                          {wordTranslate
                            ? wordTranslate.toString().toUpperCase()
                            : "Sorry, no translation of word"}
                        </h3>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" key="item-2">
                        {textExample &&
                          createSentenceListItem(
                            textExample,
                            textExampleTranslate
                          )}
                      </ListGroup.Item>
                      <ListGroup.Item as="li" key="item-3">
                        {textMeaning &&
                          createSentenceListItem(
                            textMeaning,
                            textMeaningTranslate
                          )}
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Container>

              <Row className={cardInputBlockClass}>
                <Col xs={4}>
                  {transcription && <h6> {transcription} </h6>}
                  <Form.Group
                    controlId="formGroupCard"
                    style={inputWidth}
                    onSubmit={handleSubmit}
                  >
                    <Form.Control
                      className={cardInputClass}
                      ref={textInput}
                      size="lg"
                      type="text"
                      maxlength="50"
                    />
                  </Form.Group>
                  <Button
                    className={cardButtonClass}
                    variant="primary"
                    type="submit"
                  >
                    Next
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

GuessCard.defaultProps = {
  title: "Kuznitsa kadrov",
  word: "adventure",
  wordTranslate: "приключение",
  textExample: "Riding in the rough water was an <b>adventure</b>.",
  textExampleTranslate: "Езда в бурной воде была приключением",
  textMeaning: "An <i>adventure</i> is a fun or exciting thing that you do.",
  textMeaningTranslate:
    "Приключение - это забавная или захватывающая вещь, которую ты делаешь",
  transcription: "[ədvéntʃər]",
  image: "files/02_0021.jpg",
};

export default GuessCard;
