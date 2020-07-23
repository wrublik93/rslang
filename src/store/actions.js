import { setGlobalState } from "store/store";

export const settingUser = (user) => {
  setGlobalState("user", () => user);
};

export const settingCookie = (cookie) => {
  setGlobalState("userCookie", () => cookie);
};

export const settingSettings = (newState) => {
  setGlobalState("settings", () => newState);
};

export const setVocabularyWords = (word) => {
  setGlobalState("vocabularyWords", (state) => {
    return state.find((item) => item.id === word.id) ? state : [...state, word];
  });
};
