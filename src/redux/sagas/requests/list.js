import axios from "axios";

export function addList(action) {
  return axios.post("http://localhost:5000/list/add", {
    title: action.title,
    words: action.words,
    email: action.email,
  });
}
export function getUserData(action) {
  return axios.post("http://localhost:5000/user-data", {
    email: action.email,
  });
}
