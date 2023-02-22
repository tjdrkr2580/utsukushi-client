import Navbar from "@components/Navbar";
import { SectionDefaultMaginPadding } from "@utils/styles/Minxin";
import styled from "styled-components";

const HomeWrapper = styled.main`
  ${SectionDefaultMaginPadding}
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
    </HomeWrapper>
  );
};

export default Home;
