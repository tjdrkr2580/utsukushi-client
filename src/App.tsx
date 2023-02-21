import Header from "@components/Header";
import { darkmodeState } from "@utils/recoil/atoms";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "@utils/styles/theme";
import GlobalStyle from "@utils/styles/GlobalStyle";

const RootWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor1};
  a {
    color: ${(props) => props.theme.textColor2};
  }
`;

function App() {
  const isDarkmode = useRecoilValue(darkmodeState);
  return (
    <ThemeProvider theme={isDarkmode === true ? darkTheme : lightTheme}>
      <RootWrapper>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </RootWrapper>
    </ThemeProvider>
  );
}

export default App;
