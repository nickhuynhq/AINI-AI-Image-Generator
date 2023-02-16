import axios from "axios";

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
  return axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, body);
};

export const logInUser = (body: logInInterface) => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, body);
};

export const sharePost = (body: sharePostInterface) => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/posts`, body);
};

export const fetchUserProfile = () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`,{
      headers: {
          Authorization: `Bearer ${localStorage.token}`
      }
  })
}