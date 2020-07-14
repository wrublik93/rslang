import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  user: {
    authStatus: false,
    email: "",
  },
  userCookie: {},
  words: [],
};

export const { useGlobalState, setGlobalState } = createGlobalState(
  initialState
);
