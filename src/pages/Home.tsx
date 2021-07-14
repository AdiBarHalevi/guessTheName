import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <StyledPage>
      <MainSign>
        <H2> Welcome to guess the TV game </H2>
        <HomeMainContent>
          <StyledLabel>click to start the game</StyledLabel>
          <StyledLink to="/gameplay"> click here to play</StyledLink>
        </HomeMainContent>
        {/* <HomeMainContent>
          <StyledLabel>click for insturctions</StyledLabel>
          <StyledLink to="/gameplay"> click for insturctions</StyledLink>
        </HomeMainContent> */}
      </MainSign>
    </StyledPage>
  );
};

export default Home;

// TODO IMPORT
const StyledPage = styled.div`
  height: 100%;
  width: 100%;
  background: blue;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Yomogi", cursive, Arial, Helvetica, sans-serif;
`;
const MainSign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const H2 = styled.h2`
  font-size: 52px;
  @media (max-width: 900px) {
    font-size: 33px;
  }
`;

const StyledLabel = styled.label`
  font-size: 3rem;
  @media (max-width: 800px) {
    font-size: 30px;
  }
  @media (max-width: 900px) and (min-width: 800px) {
    font-size: 2rem;
  }
`;

const StyledLink = styled(Link)`
  background: yellow;
  font-size: 2rem;
  margin-left: 2rem;
  @media (max-width: 900px) {
    font-size: 1.2rem;
    margin-left:0rem;
    margin-top:2rem;
  }
`;

const HomeMainContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content:center;
    align-items:space-around;
  }
`;
