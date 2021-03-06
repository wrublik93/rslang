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

  return rawResponse;
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

  return rawResponse;
};

export const getData = (level, numberPage) => {
  let items = [];
  let group = 0;
  const url = "https://afternoon-falls-25894.herokuapp.com/words?";
  const wordsData = async () => {
    if (group > numberPage) return items;

    const rawResponse = await fetch(`${url}?page=${level}&group=${group}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const words = await rawResponse.json();
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
