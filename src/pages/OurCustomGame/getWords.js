const getWords = async (page, group) => {
  const rawResponse = await fetch(
    `https://afternoon-falls-25894.
    herokuapp.com/words?page=${page}&group=${group}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const content = await rawResponse.json();
  return content;
};

export default getWords;
