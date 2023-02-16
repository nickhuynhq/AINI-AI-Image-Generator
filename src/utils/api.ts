import axios from "axios";
// const BASE_URL = `http://localhost:8080`;
const BASE_URL = `https://carma-island-api.herokuapp.com`;

interface signUpBodyInterface {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface logInInterface {
  email: string;
  password: string;
}

interface sharePostInterface {
  prompt: string;
  photo: string;
  story: string;
  user_id: number;
}

export const signUpUser = (body: signUpBodyInterface) => {
  return axios.post(`${BASE_URL}/users/register`, body);
};

export const logInUser = (body: logInInterface) => {
  return axios.post(`${BASE_URL}/users/login`, body);
};

export const sharePost = (body: sharePostInterface) => {
  return axios.post(`${BASE_URL}/posts`, body);
};
