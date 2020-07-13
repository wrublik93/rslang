/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import "pages/Vocabulary/style.scss";
import imgSound from "assets/Vocabulary/sound.svg";
import imgUrn from "assets/Vocabulary/urn.svg";

const DATA_URL =
  "https://raw.githubusercontent.com/SavichAnastasia/rslang-data/master/";

const Word = ({
  vocabularyWords,
  el,
  index,
  transcriptionVisible,
  imageVisible,
  learningWords,
  setLearningWords,
  arrDeletedWords,
  setArrDeletedWords,
}) => {
  const audio = new Audio(`${DATA_URL}${el.audio}`);
  const audioMeaning = new Audio(`${DATA_URL}${el.audioMeaning}`);
  const audioExample = new Audio(`${DATA_URL}${el.audioExample}`);

  const removeWord = (id) => {
    if (vocabularyWords === "learningWords") {
      setArrDeletedWords([
        ...arrDeletedWords,
        ...learningWords.filter((word) => word.id === id),
      ]);
      setLearningWords(learningWords.filter((word) => word.id !== id));
    }
    if (vocabularyWords === "deletedWords") {
      setArrDeletedWords(arrDeletedWords.filter((word) => word.id !== id));
    }
  };
  return (
    <div className="word-container">
      <div className="word-information">
        <div className="index">{index + 1}.</div>
        <div className="img-container">
          {imageVisible && (
            <img className="imgWord" src={`${DATA_URL}${el.image}`} alt="" />
          )}
        </div>

        <div className="translation-container">
          <button
            className="button-img"
            type="button"
            onClick={() => audio.play()}
          >
            <img src={imgSound} alt="audio" className="audioWord" />
          </button>
          <div className="translation">
            <p className="text-Word">{el.word}</p>
            {transcriptionVisible && (
              <p className="text-Word">{el.transcription}</p>
            )}
            <p className="text-Word">{el.wordTranslate}</p>
          </div>
        </div>

        <div className="meaning-example__container">
          <button
            className="button-img"
            type="button"
            onClick={() => audioMeaning.play()}
          >
            <img src={imgSound} alt="audio" className="audioWord" />
          </button>

          <div className="meaning-example">
            <p className="text-Word">{el.textMeaning.replace(/<\/?i>/g, "")}</p>
            <p className="text-Word">{el.textMeaningTranslate}</p>
          </div>
        </div>

        <div className="meaning-example__container">
          <button
            className="button-img"
            type="button"
            onClick={() => audioExample.play()}
          >
            <img src={imgSound} alt="audio" className="audioWord" />
          </button>
          <div className="meaning-example">
            <p className="text-Word">{el.textExample.replace(/<\/?b>/g, "")}</p>
            <p className="text-Word">{el.textExampleTranslate}</p>
          </div>
        </div>

        <div className="button-container">
          <button
            className="button-img"
            type="button"
            onClick={() => removeWord(el.id)}
          >
            <img src={imgUrn} alt="imgUrn" className="audioWord" />
          </button>
        </div>
      </div>
      <div className="learning-process">
        <p className="learning-process__1">
          How many times the word was repeated:
        </p>
        <p>When was the last time:</p>
      </div>
    </div>
  );
};

export default Word;
