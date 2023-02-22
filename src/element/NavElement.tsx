import { flexCenter } from "@utils/styles/Minxin";
import { NavElementProps } from "@utils/types";
import styled from "styled-components";

const NavElementWrapper = styled.li<Partial<NavElementProps>>`
  border-bottom: 0.4rem solid
    ${(props) =>
      props.index !== props.elementIndex
        ? props.theme.bgColor
        : props.theme.primary};
  ${flexCenter}
  span {
    padding: 0.5rem 0.8rem;
    font-size: 1.8rem;
  }
  transition: 0.25s border;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;

const NavElement = ({ ...props }: NavElementProps) => {
  return (
    <NavElementWrapper
      elementIndex={props.elementIndex}
      index={props.index}
      onClick={props.onClick}
    >
      <span>{props.text}</span>
    </NavElementWrapper>
  );
};

export default NavElement;
