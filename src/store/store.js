import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  auth: {
    authStatus: false,
    email: "",
  },
  words: [],
};

// eslint-disable-next-line import/prefer-default-export
export const { useGlobalState, setGlobalState } = createGlobalState(
  initialState
);
