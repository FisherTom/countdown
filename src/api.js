import axios from "axios";

const api = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
});

export const getWord = (word) => {
  return api.get(`/${word}`).then((res) => {
    console.log(res.status);
    //return res.data.recipe;
  });
};
