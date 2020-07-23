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
      isMixWords: true,
      isWordTranslation: true,
      isSentencesTranslation: false,
      isMeaningSentence: false,
      isExampleSentence: false,
      isPicture: false,
      isTranscription: false,
      isAutoPronunciation: false,
      isShowBtn: true,
      isDeleteBtn: true,
      isHardWordBtn: true,
    },
  },
  vocabularyWords: [],
};

export const { useGlobalState, setGlobalState } = createGlobalState(
  initialState
);
