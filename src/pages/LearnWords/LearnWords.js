import React, { useState } from "react";
import "pages/LearnWords/style.scss";
import { Container, Col, Row, ProgressBar } from "react-bootstrap";
import { getRandom } from "utils/utils";
import GuessCard from "components/GuessCard";

const LearnWords = (props) => {
  const { words } = props;
  const wordsNumber = words.length;
  const [currentWordId, setCurrentWordId] = useState(0);
  const arrayRandomWordsId = getRandom(0, wordsNumber, wordsNumber)();

  const handleAnswer = (input) => {
    const inputValue = input.value;
    const guessWord = words[arrayRandomWordsId[currentWordId]].word;
    // if (inputValue.length === guessWord.length) {
    if (inputValue === guessWord) {
      setCurrentWordId(currentWordId + 1);
      // } else {
      // eslint-disable-next-line no-alert
      // alert("wrong");
    }
    // }
  };

  return (
    <Container fluid className="learn-words__container">
      <Row className="learn-words__row">
        <Col>
          <GuessCard
            title="Learn Words"
            wordObj={words[arrayRandomWordsId[currentWordId]]}
            handleAnswer={handleAnswer}
          />
        </Col>
      </Row>
      <Row className="learn-words__row justify-content-center">
        <Col xs={6}>
          <ProgressBar
            className="learn-words__progress-bar"
            now={currentWordId}
            label={`${currentWordId}%`}
          />
        </Col>
      </Row>
    </Container>
  );
};

LearnWords.defaultProps = {
  words: [
    {
      id: "5e9f5ee35eb9e72bc21af4aa",
      group: 0,
      page: 0,
      word: "enjoy",
      image: "files/01_0011.jpg",
      audio: "files/01_0011.mp3",
      audioMeaning: "files/01_0011_meaning.mp3",
      audioExample: "files/01_0011_example.mp3",
      textMeaning: "To <i>enjoy</i> is to like something.",
      textExample: "The woman <b>enjoys</b> riding her bicycle.",
      transcription: "[indʒɔ́i]",
      textExampleTranslate: "Женщина любит кататься на велосипеде",
      textMeaningTranslate: "Наслаждаться значит любить что-то",
      wordTranslate: "наслаждаться",
      wordsPerExampleSentence: 6,
    },
    {
      id: "5e9f5ee35eb9e72bc21af4ab",
      group: 0,
      page: 0,
      word: "invite",
      image: "files/01_0012.jpg",
      audio: "files/01_0012.mp3",
      audioMeaning: "files/01_0012_meaning.mp3",
      audioExample: "files/01_0012_example.mp3",
      textMeaning:
        "To <i>invite</i> is to ask someone to come to a place or event.",
      textExample: "I will <b>invite</b> my friends to my birthday party.",
      transcription: "[inváit]",
      textExampleTranslate: "Я приглашаю своих друзей на мой день рождения",
      textMeaningTranslate:
        "Пригласить - это попросить кого-нибудь прийти на место или событие",
      wordTranslate: "пригласить",
      wordsPerExampleSentence: 9,
    },
    {
      id: "5e9f5ee35eb9e72bc21af4ac",
      group: 0,
      page: 0,
      word: "month",
      image: "files/01_0014.jpg",
      audio: "files/01_0014.mp3",
      audioMeaning: "files/01_0014_meaning.mp3",
      audioExample: "files/01_0014_example.mp3",
      textMeaning: "A <i>month</i> is one of 12 periods of time in one year.",
      textExample: "January is the first <b>month</b> of the year.",
      transcription: "[mʌnθ]",
      textExampleTranslate: "январь - первый месяц года",
      textMeaningTranslate: "Месяц - это один из 12 периодов времени в году",
      wordTranslate: "месяц",
      wordsPerExampleSentence: 8,
    },
    {
      id: "5e9f5ee35eb9e72bc21af4ae",
      group: 0,
      page: 0,
      word: "love",
      image: "files/01_0013.jpg",
      audio: "files/01_0013.mp3",
      audioMeaning: "files/01_0013_meaning.mp3",
      audioExample: "files/01_0013_example.mp3",
      textMeaning: "To <i>love</i> is to like something or someone a lot.",
      textExample: "I <b>love</b> my family very much.",
      transcription: "[lʌv]",
      textExampleTranslate: "Я очень люблю свою семью",
      textMeaningTranslate: "Любить значит любить что-то или кого-то много",
      wordTranslate: "любовь",
      wordsPerExampleSentence: 6,
    },
    {
      id: "5e9f5ee35eb9e72bc21af4b1",
      group: 0,
      page: 0,
      word: "weather",
      image: "files/01_0018.jpg",
      audio: "files/01_0018.mp3",
      audioMeaning: "files/01_0018_meaning.mp3",
      audioExample: "files/01_0018_example.mp3",
      textMeaning:
        "<i>Weather</i> is the temperature and the state of the outdoors.",
      textExample: "Today’s <b>weather</b> is rainy and cloudy.",
      transcription: "[weðər]",
      textExampleTranslate: "Сегодня погода дождливая и облачная",
      textMeaningTranslate: "Погода это температура и состояние на улице",
      wordTranslate: "погода",
      wordsPerExampleSentence: 6,
    },
    {
      id: "5e9f5ee35eb9e72bc21af4b2",
      group: 0,
      page: 0,
      word: "wine",
      image: "files/01_0020.jpg",
      audio: "files/01_0020.mp3",
      audioMeaning: "files/01_0020_meaning.mp3",
      audioExample: "files/01_0020_example.mp3",
      textMeaning: "<i>Wine</i> is an alcoholic drink made from grapes.",
      textExample: "The store carried both red and white <b>wine</b>.",
      transcription: "[wain]",
      textExampleTranslate: "В магазине было красное и белое вино",
      textMeaningTranslate: "Вино - это алкогольный напиток из винограда",
      wordTranslate: "вино",
      wordsPerExampleSentence: 8,
    },
    {
      id: "5e9f5ee35eb9e72bc21af4b3",
      group: 0,
      page: 0,
      word: "week",
      image: "files/01_0019.jpg",
      audio: "files/01_0019.mp3",
      audioMeaning: "files/01_0019_meaning.mp3",
      audioExample: "files/01_0019_example.mp3",
      textMeaning: "A <i>week</i> is a period of time that is seven days long.",
      textExample: "What are you doing next <b>week</b>?",
      transcription: "[wiːk]",
      textExampleTranslate: "Что ты делаешь на следующей неделе?",
      textMeaningTranslate:
        "Неделя - это период времени, который длится семь дней",
      wordTranslate: "неделя",
      wordsPerExampleSentence: 6,
    },
  ],
};
export default LearnWords;
