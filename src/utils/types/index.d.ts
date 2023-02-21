import { ChangeEvent, ReactNode } from "react";

export interface ButtonPropsType {
  wh: string;
  empty: boolean;
  children: ReactNode;
  onClick: () => void;
}

export interface InputPropsType {
  wh: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

export interface userInfo {
  userName: string;
  photoURL: string;
  description: string | null;
}
