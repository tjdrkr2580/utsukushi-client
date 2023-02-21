import { darkmodeState } from "@utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import styled from "styled-components";

const CustomButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.textColor1};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: transparent;
  &:hover {
    color: yellow;
  }
`;

const ToggleMode = () => {
  const [isDarkmode, setIsDarkmode] = useRecoilState(darkmodeState);
  const onToggle = () => {
    setIsDarkmode(!isDarkmode);
  };
  return (
    <CustomButton onClick={onToggle}>
      {isDarkmode === false ? (
        <BsSunFill size={22} />
      ) : (
        <BsFillMoonFill size={22} />
      )}
    </CustomButton>
  );
};

export default ToggleMode;
