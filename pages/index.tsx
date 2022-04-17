import type { NextPage } from "next";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Head from "next/head";
import { HeroSection } from "../src/components/HeroSection";
import Search from "../src/components/Search";
import MaterialSection from "../src/components/Sections/HomeSection/MaterialSection";
const TextContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > h1 {
    font-size: 48px;
    color: #fff;
  }

  > h3 {
    font-size: 28px;
    color: #777777;
  }
`;

const SearchWrap = styled.div`
  position: absolute;
  bottom: -25px;
  width: 100%;
  left: 0;
  display: flex;
`;

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Tam Rai Dee - Home</title>
      </Head>
      <HeroSection src="/img/bgHero.jpg" h="500px">
        <TextContainer>
          <h1>WHAT WE ARE COOKING ?</h1>
          <h3>personalize your experience</h3>
        </TextContainer>
        <SearchWrap>
          <Search placeholder="Specify your taste" />
        </SearchWrap>
      </HeroSection>
      <MaterialSection />
    </>
  );
};

export default Home;
