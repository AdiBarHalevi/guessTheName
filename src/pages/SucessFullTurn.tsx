import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const SucessFullTurn = ({ handleClick }: { handleClick: Function }) => {
  return (
    <div>
      <StyledTitle>You win</StyledTitle>
      <ButtonsContainer>
          <StyledModalButton onClick={() => handleClick()}>restart the game</StyledModalButton>
          <StyledLink to="/">back home</StyledLink>
      </ButtonsContainer>
    </div>
  );
};

export default SucessFullTurn;


const StyledModalButton = styled.button`
  color: #433c3b;
  background: #e6dbcc;
  font-size: 18px;
  border-radius: 5%;
  cursor: pointer;
  height: 5rem;
  width: 10rem;
  @media (max-width: 900px) {
    font-size: 16px;
    border-radius: 5%;
    height: 5rem;
    width: 5rem;
  }
`;

const StyledLink = styled(Link)`
  background: yellow;
  font-size: 22px;
  height: 5rem;
  width: 10rem;
  line-height:4;
  @media (max-width: 900px) {
    font-size: 1.2rem;
    font-size: 16px;
    height: 5rem;
    width: 5rem;
    line-height:4;
  }
`;

const ButtonsContainer = styled.div`
  display:flex;
`

const StyledTitle = styled.p`
  font-size: 55px;
  font-weight: 600;
  display: block;
  @media (max-width: 800px) {
    margin-top: 2rem;
    font-size: 22px;
  }
`;