export const RandomInteger = (min, max) => {
  const rand = min + Math.random() * (max - min);
  return Math.round(rand);
};

export const RightAnswer = (point) => {
  return point + 1;
};
