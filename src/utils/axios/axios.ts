import { userDto } from "./../types/index.d";
import axios from "axios";

export const signInPost = async (dto: userDto) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_LOGINMOCK}/register`,
    dto
  );
  return data;
};

export const signUpPost = async (dto: userDto) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_LOGINMOCK}/login`,
    dto
  );
  return data;
};

export const isUserConfirm = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_LOGINMOCK}/user`);
  return data;
};
