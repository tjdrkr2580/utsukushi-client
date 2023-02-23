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
  id: string;
}

export interface userDto {
  id: string;
  password: string;
}

export interface NavElementProps {
  index: number;
  text: string;
  elementIndex: number;
  onClick: () => void;
}

export interface InputProps {
  children: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placehoder: string;
}
