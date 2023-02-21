import { ButtonPropsType } from "@utils/types/index";
import styled, { css } from "styled-components";

const CustomButton = styled.button<ButtonPropsType>`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textColor1};
  ${(props) =>
    props.wh === "m" &&
    css`
      width: 5rem;
      height: 3rem;
    `}
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
