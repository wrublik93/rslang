import React, { useState, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import Earth from "pages/EnglishPuzzle/components/Helper/Earth";
import Image from "pages/EnglishPuzzle/components/Helper/Image";
import Speak from "pages/EnglishPuzzle/components/Helper/Speak";
import { AUDIO_URL } from "pages/EnglishPuzzle/constants";
import paintings from "assets/englishPuzzle/paintings";
import "pages/EnglishPuzzle/components/Helper/style.scss";

function Helper({ word, setImg, level, raund, raundIsOver }) {
  const [translation, setTranslation] = useState(false);
  const [pronunciation, setPronunciation] = useState(false);
  const [visibleImage, setVisibleImage] = useState(false);

  const pronounceWord = () => {
    setPronunciation(!pronunciation);
  };

  const showImage = useCallback(() => {
    if (visibleImage) {
      setImg(paintings[6][0]);
      setVisibleImage(false);
    } else {
      setImg(paintings[level][raund % paintings.length]);
      setVisibleImage(true);
    }
  }, [level, raund, visibleImage, setImg]);

  const translate = () => setTranslation(!translation);

  useEffect(() => {
    if (raundIsOver) {
      setImg(paintings[level][raund % paintings.length]);
    } else {
      setImg(
        visibleImage
          ? paintings[level][raund % paintings.length]
          : paintings[6][0]
      );
    }
  }, [level, raund, visibleImage, raundIsOver, setImg]);

  useEffect(() => {
    const audio = new Audio();
    if (word.audioExample && pronunciation) {
      audio.src = `${AUDIO_URL}${word.audioExample}`;
      audio.autoplay = true;
    }
    return () => audio.pause();
  }, [pronunciation, word]);

  return (
    <div className="helper-container">
      <div className="helper-container-helperData">
        {translation ? word.textExampleTranslate : null}
      </div>
      <div className="helper-container-tools">
        <Button
          variant="info"
          className={`helper-container-tools-helperItem translate-btn
            ${translation ? "on" : ""}`}
          onClick={translate}
        >
          <Earth />
        </Button>
        <Button
          variant="info"
          className={`helper-container-tools-helperItem
          ${pronunciation ? "on" : ""}`}
          onClick={pronounceWord}
        >
          <Speak />
        </Button>
        <Button
          variant="info"
          className={`helper-container-tools-helperItem image-btn
          ${visibleImage ? "on" : ""}`}
          onClick={showImage}
        >
          <Image />
        </Button>
      </div>
    </div>
  );
}

export default React.memo(Helper);
