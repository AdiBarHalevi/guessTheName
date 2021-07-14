import { Link, NavLink, useLocation } from "react-router-dom"
import styled from "styled-components"

const GameOver = ()=>{

    return (
        <EndGameContainer>
            <StyledTitle>Game Over</StyledTitle>
            <ButtonContainer>
                <StyledButton onClick={()=>window.location.reload()}>restart the game</StyledButton>
                <StyledLink to='/'>back home</StyledLink>
            </ButtonContainer>
        </EndGameContainer>
    )
}

export default GameOver


const EndGameContainer = styled.div`
    display:flex;
    height:50%;
    width:40%;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`

const StyledTitle = styled.p`
    font-size:55px;
    font-weight:600;
    display: block;
    @media (max-width: 800px) {
        margin-top:2rem;
        font-size:22px;
      }

`

const StyledButton = styled.button`
    background: transparent;
    height: 100%;
    width: 40%;

`

const StyledLink  = styled(Link)`
     background: yellow;
     font-size:22px;
     margin-left:2rem;
     @media (max-width: 900px) {
        font-size:1.2rem;
      }
`;

const ButtonContainer = styled.div`
      display:flex;

`