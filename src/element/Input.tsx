import { InputPropsType } from "@utils/types";
import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  width: 50%;
  height: 4rem;
  border-radius: 0.8rem;
  &:focus {
    outline: none;
  }
`;

const Input = ({ ...props }: InputPropsType) => {
  return <CustomInput placeholder={props.placeholder} />;
};

export default Input;
