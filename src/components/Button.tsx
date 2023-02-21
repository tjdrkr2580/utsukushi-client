import { ButtonPropsType } from "@utils/types/index";
import styled, { css } from "styled-components";

const CustomButton = styled.button<ButtonPropsType>`
  cursor: pointer;
  background-color: ${(props) => props.theme.primary};
  color: #ded9d9;
  border-radius: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  ${(props) =>
    props.wh === "m" &&
    css`
      width: 7rem;
      height: 3.5rem;
      font-size: 1.35rem;
    `}
  ${(props) =>
    props.wh === "l" &&
    css`
      width: 10rem;
      height: 4rem;
      font-size: 1.5rem;
    `}
    ${(props) =>
    props.wh === "s" &&
    css`
      width: 6rem;
      height: 3rem;
      font-size: 1.3rem;
    `}
  &:hover {
    filter: brightness(85%);
  }
`;

const Button = ({ children, ...props }: ButtonPropsType) => {
  return (
    <CustomButton wh={props.wh} empty={props.empty} onClick={props.onClick}>
      {children}
    </CustomButton>
  );
};

export default Button;

Button.defaultProps = {
  onClick: () => {},
  wh: "m",
  empty: false,
};
