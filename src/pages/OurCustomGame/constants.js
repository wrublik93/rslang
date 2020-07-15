const DIFFICULTY_ARRAY = [6, 9, 12];
const PAGES_ARRAY = new Array(30)
  .fill(0)
  .fill(0)
  .map((item, i) => i);
const LEVELS_ARRAY = new Array(6).fill(0).map((item, index) => index);
const DATA_URL =
  "https://raw.githubusercontent.com/SavichAnastasia/rslang-data/master/";
const imageWinUrl = `https://raw.githubusercontent.com/
Alexey-Koren/rslang/assets/assets/OurCustomGame/win.png`;

export { DIFFICULTY_ARRAY, LEVELS_ARRAY, PAGES_ARRAY, DATA_URL, imageWinUrl };
