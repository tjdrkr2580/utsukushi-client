import { atom } from "recoil";
import { v1 } from "uuid";

export const darkmodeState = atom<boolean>({
  key: `state${v1()}`,
  default: false,
});

export const userInfoState = atom({
  key: `state${v1()}`,
  default: {
    username: "",
    photoURL: "",
    description: null,
  },
});
