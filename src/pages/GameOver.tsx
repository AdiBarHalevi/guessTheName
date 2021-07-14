import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const GameOver = () => {
  return (
    <EndGameContainer>
      <StyledTitle>Game Over</StyledTitle>
      <ButtonContainer>
        <StyledModalButton onClick={() => window.location.reload()}>
          restart the game
        </StyledModalButton>
        <StyledLink to="/">back home</StyledLink>
      </ButtonContainer>
    </EndGameContainer>
  );
};

export default GameOver;

const EndGameContainer = styled.div`
  display: flex;
  height: 50%;
  width: 40%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTitle = styled.p`
  font-size: 55px;
  font-weight: 600;
  display: block;
  @media (max-width: 800px) {
    margin-top: 2rem;
    font-size: 22px;
  }
`;
const StyledModalButton = styled.button`
  color: #433c3b;
  background: #e6dbcc;
  font-size: 18px;
  border-radius: 5%;
  cursor: pointer;
  height: 5rem;
  width: 10rem;
  @media (maxwidth: 900px) {
    font-size: 10px;
    border-radius: 5%;
    height: 8%;
    width: 35%;
  }
`;
const StyledLink = styled(Link)`
  background: yellow;
  font-size: 22px;
  width:9rem;
  margin-left: 2rem;
  line-height:3;
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;
