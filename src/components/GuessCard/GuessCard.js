import classNames from "classnames";
import createSentenceListItem from "components/GuessCard/createSentence";
import { AUDIO_URL } from "pages/EnglishPuzzle/constants";
import "components/GuessCard/style.scss";
import Image from "components/Image/Image";
import { setVocabularyWords } from "store/actions";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useGlobalState } from "store/store";

const GuessCard = (props) => {
  const textInput = useRef(null);
  const [settings] = useGlobalState("settings");
  const { optional } = settings;
  const {
    isPicture,
    isTranscription,
    isWordTranslation,
    isMeaningSentence,
    isExampleSentence,
    isAutoPronunciation,
    isShowBtn,
  } = optional;
  const { wordObj, title, handleAnswer } = props;

  useEffect(() => {
    const audio = new Audio();
    if (wordObj.audioExample && isAutoPronunciation) {
      audio.src = `${AUDIO_URL}${wordObj.audio}`;
      audio.autoplay = true;
    }
    return () => audio.pause();
  }, [isAutoPronunciation, wordObj]);

  useEffect(() => {
    textInput.current.focus();
    textInput.current.value = "";
  }, [wordObj]);

  const {
    word,
    wordTranslate,
    textExample,
    textExampleTranslate,
    textMeaning,
    textMeaningTranslate,
    transcription,
    image,
  } = wordObj;

  const [inputClass, setInputClass] = useState("");

  const cardClass = classNames("crd");
  const cardHeaderClass = classNames("crd__header");
  const cardTitleClass = classNames("crd__title", "no-wrap");
  const cardBodyClass = classNames("crd__body");
  const cardInputClass = classNames("crd__input", "no-wrap");
  const cardButtonClass = classNames("crd__button");
  const cardListClass = classNames(
    "crd__list",
    "list-group",
    "list-group-flush"
  );
  const cardListItem = classNames("crd__list-item", "list-group-item");
  const cardWordClass = classNames("crd__word");
  const cardInputBlockClass = classNames(
    "crd__input-block",
    "justify-content-center"
  );
  // eslint-disable-next-line max-len
  const url = `https://raw.githubusercontent.com/irinainina/rslang-data/master/${image}`;
  const inputWidth = {
    width: `calc(${word ? word.length : "5"}rem)`,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { input } = event.currentTarget.elements;
    setInputClass(input.value === wordObj.word ? "green" : "red");
    handleAnswer(input);
  };

  const handleChange = () => {
    setInputClass("");
  };

  const handleShow = () => {
    textInput.current.value = wordObj.word;
  };

  const handleAdd = () => {
    setVocabularyWords(wordObj);
  };

  const listData = [
    {
      data: isWordTranslation ? (
        <h3 className={cardWordClass} key={1}>
          {wordTranslate
            ? wordTranslate.toString().toUpperCase()
            : "Sorry, no translation of word"}
        </h3>
      ) : null,
      id: 1,
    },
  ];
  if (textExample && isExampleSentence) {
    const id = listData[listData.length - 1].id + 1;
    listData.push({
      data: createSentenceListItem(textExample, textExampleTranslate),
      id,
    });
  }

  if (textMeaning && isMeaningSentence) {
    const id = listData[listData.length - 1].id + 1;
    listData.push({
      data: createSentenceListItem(textMeaning, textMeaningTranslate),
      id,
    });
  }

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
                  {isPicture && image && (
                    <Col xs={12} md={6}>
                      <Image
                        src={url}
                        alt="picture association"
                        className="crd__image-association"
                      />
                    </Col>
                  )}
                  <Col>
                    <ul className={cardListClass}>
                      {listData &&
                        listData.length > 0 &&
                        listData.map((item) => {
                          return (
                            <ListItem
                              className={cardListItem}
                              key={item.id.toString()}
                              data={item.data}
                            />
                          );
                        })}
                    </ul>
                  </Col>
                </Row>
              </Container>

              <Row className={cardInputBlockClass}>
                <Col xs={4}>
                  {isTranscription && transcription && (
                    <h6> {transcription} </h6>
                  )}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupCard" style={inputWidth}>
                      <Form.Control
                        className={`${cardInputClass} ${inputClass}`}
                        ref={textInput}
                        name="input"
                        onChange={handleChange}
                        size="lg"
                        type="text"
                        maxLength="50"
                      />
                    </Form.Group>
                    <Button
                      className="crd__sbmBtn"
                      variant="outline-success"
                      type="submit"
                    >
                      &#10004;
                    </Button>
                  </Form>
                  {isShowBtn ? (
                    <Button
                      className={cardButtonClass}
                      variant="primary"
                      type="button"
                      onClick={handleShow}
                    >
                      Show answer
                    </Button>
                  ) : null}
                  <Button
                    className={`${cardButtonClass} crd__addBtn`}
                    variant="warning"
                    onClick={handleAdd}
                    type="button"
                  >
                    Add to vocabulary
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

const ListItem = (props) => {
  const { data, className } = props;
  return <li className={className}>{data}</li>;
};

export default GuessCard;
