import ToggleMode from "@element/ToggleMode";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../element/Button";
import useNavi from "@hook/useNavi";
import { useSetRecoilState } from "recoil";
import { modalState } from "@utils/recoil/atoms";

const HeaderWrapper = styled.header`
  width: 100vw;
  z-index: 998;
  padding: 0.8rem;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6rem;
`;

const LinkTitle = styled(Link)`
  font-size: ${(props) => props.theme.bigSize};
  font-weight: 700;
  font-size: ${(props) => props.theme.bigSize};
`;

const MenuWrapper = styled.section`
  display: flex;
  gap: 1.75rem;
  align-items: center;
`;

const Header = () => {
  const setVisible = useSetRecoilState(modalState);
  return (
    <HeaderWrapper>
      <LinkTitle to="/">Utsukushi</LinkTitle>
      <MenuWrapper>
        <ToggleMode />
        <Button onClick={() => setVisible(true)}>로그인</Button>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
