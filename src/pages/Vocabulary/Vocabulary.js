import React, { useState } from "react";
import "pages/Vocabulary/style.scss";
import { Button } from "react-bootstrap";
/* import { Link } from "react-router-dom"; */
import { useGlobalState } from "store/store";
import Word from "pages/Vocabulary/components/Word";
// import * as wordsSnapshot from "pages/Vocabulary/wordsSnapshot.json";

const Vocabulary = () => {
  const [vocabularyWords, setVocabularyWords] = useState("learningWords");
  const transcriptionVisible = true;
  const imageVisible = true;

  const [userWords] = useGlobalState("vocabularyWords");
  const [learningWords, setLearningWords] = useState(userWords);
  const [arrDeletedWords, setArrDeletedWords] = useState([]);

  const allWords = learningWords.map((el, index) => (
    <Word
      vocabularyWords={vocabularyWords}
      el={el}
      key={el.id}
      index={index}
      transcriptionVisible={transcriptionVisible}
      imageVisible={imageVisible}
      learningWords={learningWords}
      setLearningWords={setLearningWords}
      arrDeletedWords={arrDeletedWords}
      setArrDeletedWords={setArrDeletedWords}
    />
  ));
  const deletedWords = arrDeletedWords.map((el, index) => (
    <Word
      vocabularyWords={vocabularyWords}
      el={el}
      key={el.id}
      index={index}
      transcriptionVisible={transcriptionVisible}
      imageVisible={imageVisible}
      arrDeletedWords={arrDeletedWords}
      setArrDeletedWords={setArrDeletedWords}
    />
  ));

  return (
    <div className="vocabulary">
      <div className="menu__buttons">
        {/*  <Button
          variant="dark"
          className="button-exit"
          onClick={() => setVocabularyWords("learningWords")}
        >
          <Link to="/home" className="home-page__link">
            Main menu
          </Link>
        </Button> */}
        <div>
          <Button
            variant="warning"
            onClick={() => setVocabularyWords("learningWords")}
          >
            Learning words
          </Button>
          <Button
            variant="warning"
            className="button-difficultWords"
            onClick={() => setVocabularyWords("difficultWords")}
          >
            Difficult words
          </Button>
          <Button
            variant="danger"
            onClick={() => setVocabularyWords("deletedWords")}
          >
            Deleted words
          </Button>
        </div>
      </div>
      {vocabularyWords === "learningWords" && (
        <div className="allWords scrollbar"> {allWords}</div>
      )}
      {vocabularyWords === "difficultWords" && (
        <div className="difficultWords" />
      )}
      {vocabularyWords === "deletedWords" && (
        <div className="deletedWords">{deletedWords} </div>
      )}
    </div>
  );
};

export default Vocabulary;
