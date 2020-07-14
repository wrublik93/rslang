import React, { useRef, useEffect } from "react";
import { SCREEN_POINT } from "pages/EnglishPuzzle/constants";
import "pages/EnglishPuzzle/components/Word/style.scss";

function Word({
  word,
  onePart,
  wordCount,
  extraWidth,
  j,
  imgWidth,
  canvasHeight,
  img,
  startYPointCropImage,
  widthCount,
  addWidthCount,
  opacity,
}) {
  const canvas = useRef(null);
  const i = 0;

  useEffect(() => {
    if (document.documentElement.clientWidth > SCREEN_POINT) {
      const fontFamily = "Arial";
      const fontRatio = 1;
      const fontType = "bold";
      const borderPuzzle = 1;
      const shadowPuzzle = 1;
      const borderText = 1;
      const shadowText = 10;
      const colorBorder = `rgba(0,255,250,${opacity})`;
      const colorShadowBorder = `rgba(255,255,250,${opacity})`;
      const colorText = "magenta";
      const colorShadowText = "black";
      const solidTextColor = "white";
      const fontStyle = "fillText";
      const ctx = canvas.current.getContext("2d");
      let canvasWidth = word.length * onePart + extraWidth;

      if (j === wordCount - 1) {
        canvasWidth = imgWidth - widthCount;
      }
      addWidthCount(canvasWidth, j);
      const x1 = 0;
      const y1 = Math.round(canvasHeight / 3);
      const y2 = Math.round((canvasHeight / 3) * 2);
      const centerY = canvasHeight / 2;
      const radius = Math.round(canvasHeight / 3 / 2);

      const fontSize = Math.round(canvasHeight / 4);
      ctx.canvas.width = canvasWidth + radius;
      ctx.canvas.height = canvasHeight;

      ctx.beginPath();

      if (j) {
        ctx.arc(x1, centerY, radius, Math.PI / 2, Math.PI * 1.5, true);
      }

      ctx.lineTo(0, y1);
      ctx.lineTo(0, 0);
      ctx.lineTo(canvasWidth, 0);
      ctx.lineTo(canvasWidth, y1);

      if (j !== wordCount - 1) {
        ctx.arc(
          canvasWidth,
          centerY,
          radius,
          Math.PI * 1.5,
          Math.PI / 2,
          false
        );
      }

      ctx.lineTo(canvasWidth, y2);
      ctx.lineTo(canvasWidth, canvasHeight);
      ctx.lineTo(0, canvasHeight);
      ctx.lineTo(0, y2);

      if (!j) {
        ctx.lineTo(0, y1);
      }

      ctx.clip();

      ctx.drawImage(
        img,
        widthCount,
        startYPointCropImage,
        canvasWidth + radius,
        canvasHeight,
        0,
        0,
        canvasWidth + radius,
        canvasHeight
      );
      ctx.shadowColor = colorShadowBorder;
      ctx.strokeStyle = colorBorder;
      ctx.shadowBlur = shadowPuzzle;
      ctx.lineWidth = borderPuzzle;
      ctx.stroke();
      ctx.globalCompositeOperation = "destination-in";
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
      ctx.beginPath();
      ctx.shadowColor = colorShadowText;
      ctx.shadowBlur = shadowText;
      ctx.lineWidth = borderText;
      ctx.strokeStyle = colorText;
      ctx.font = `${fontType} ${fontSize * fontRatio}pt ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.fillStyle = solidTextColor;
      ctx[fontStyle](
        opacity ? word : "",
        canvasWidth / 2 + radius / 2,
        canvasHeight / 2 + fontSize / 3
      );
    }
  }, [
    onePart,
    extraWidth,
    word,
    imgWidth,
    startYPointCropImage,
    canvasHeight,
    img,
    j,
    wordCount,
    widthCount,
    addWidthCount,
    opacity,
  ]);

  return (
    <>
      {document.documentElement.clientWidth > SCREEN_POINT ? (
        <canvas
          ref={canvas}
          data-index={j}
          data-word={word}
          className={`canvas-item canvas-row-${i} canvas-item-${j + 1}`}
          data-item={`${i + 1}-${j + 1}`}
        />
      ) : (
        <span className="simple-word">{word}</span>
      )}
    </>
  );
}

export default React.memo(Word);
