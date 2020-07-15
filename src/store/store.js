import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  user: {
    authStatus: false,
    email: "",
  },
  userCookie: {},
  words: [],
  settings: {
    wordsPerDay: 20,
    optional: {
      maxWords: 40,
      mixWords: true,
      translation: true,
      meaning: false,
      textExampl: false,
      picture: false,
      transcript: false,
      autopronunciation: false,
      showBtn: true,
    },
  },
};

export const { useGlobalState, setGlobalState } = createGlobalState(
  initialState
);
