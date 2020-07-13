import React from "react";

export default (text, translation) => {
  const searchRegExp = /<[A-Za-z]+>(.*?)<\/[A-Za-z]+>/g;
  const replaceWith = "[..]";
  const resultText = (
    <p className="crd__sentence" key={1}>
      {text.replace(searchRegExp, replaceWith)}
    </p>
  );

  const resultTranslation = translation !== undefined && (
    <p className="crd__sentence-translate" key={2}>
      {" "}
      {translation.replace(searchRegExp, replaceWith)}{" "}
    </p>
  );
  return [resultText, resultTranslation];
};
