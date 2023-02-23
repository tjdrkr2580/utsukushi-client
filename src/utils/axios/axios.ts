import { userDto } from "./../types/index.d";
import axios from "axios";

const signInPost = async (dto: userDto) => {
  const res = await axios.post(`/register`, dto);
  return res;
};

const signUpPost = async (dto: userDto) => {
  const res = await axios.post(`/login`, dto);
  return res;
};

const isUserConfirm = async () => {
  const res = await axios.get(`/user`);
  return res;
};
