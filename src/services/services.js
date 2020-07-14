export const createUser = async (user) => {
  const rawResponse = await fetch(
    "https://afternoon-falls-25894.herokuapp.com/users",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const content = await rawResponse.json();
  return { content };
};
export const loginUser = async (user) => {
  const rawResponse = await fetch(
    "https://afternoon-falls-25894.herokuapp.com/signin",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const content = await rawResponse.json();
  return content;
};
export const getData = (level, numberPage) => {
  let items = [];
  let group = 0;
  const requestSprint = "https://afternoon-falls-25894.herokuapp.com/words?";
  const wordsData = async () => {
    if (group > numberPage) return items;
    const urlWords = `${requestSprint}page=${level}&group=${group}`;
    const words = await fetch(urlWords);
    items = [...items, ...words];
    group += 1;
    return wordsData();
  };
  return wordsData;
};

export const getDataTemp = (page) => {
  let items = [];
  let group = 0;
  const url = "https://afternoon-falls-25894.herokuapp.com/words?";
  const wordsData = async () => {
    if (group > 6) return items;
    const responseWords = await fetch(`${url}?page=${page}&group=${group}`);
    const words = await responseWords.json();
    items = [...items, ...words];
    group += 1;
    return wordsData();
  };
  return wordsData;
};

export const getDataSpeakIt = (level, page) => {
  const requestSprint = "https://afternoon-falls-25894.herokuapp.com/words?";
  const wordsData = async () => {
    const urlWords = `${requestSprint}page=${page}&group=${level}`;
    const responseWords = await fetch(urlWords);
    const words = await responseWords.json();
    return words;
  };
  return wordsData;
};
