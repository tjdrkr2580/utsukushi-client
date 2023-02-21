import { ButtonPropsType } from "@utils/types/index";
import styled, { css } from "styled-components";

const CustomButton = styled.button<ButtonPropsType>`
  cursor: pointer;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textColor1};
  border-radius: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  ${(props) =>
    props.wh === "m" &&
    css`
      width: 7rem;
      height: 3.5rem;
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
