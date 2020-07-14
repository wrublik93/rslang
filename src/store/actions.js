import { setGlobalState } from "store/store";

export const settingAuth = (newState) => {
  setGlobalState("auth", () => newState);
};

export const settingWords = (newState) => {
  setGlobalState("words", () => newState);
};
