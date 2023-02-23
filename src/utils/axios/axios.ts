import { userDto } from "./../types/index.d";
import axios from "axios";

const signInPost = async (dto: userDto) => {
  const res = await axios.post(
    `${process.env.REACT_APP_LOGINMOCK}/register`,
    dto
  );
  return res;
};

const signUpPost = async (dto: userDto) => {
  const res = await axios.post(`${process.env.REACT_APP_LOGINMOCK}/login`, dto);
  return res;
};

const isUserConfirm = async () => {
  const res = await axios.get(`${process.env.REACT_APP_LOGINMOCK}/user`);
  return res;
};
