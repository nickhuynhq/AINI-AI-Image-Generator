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

export const signUpUser = (body: signUpBodyInterface) => {
  return axios.post(`${BASE_URL}/users/register`, body);
};

export const logInUser = (body: logInInterface) => {
  return axios.post(`${BASE_URL}/users/login`, body);
};
