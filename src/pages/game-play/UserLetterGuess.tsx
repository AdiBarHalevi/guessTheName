import { useState } from "react"
import styled from "styled-components"

const UserLetterGuess = ({onGuessSubmit}: {onGuessSubmit: (letter: string) => void}) => {
    const [userLetter, setUserLetter] = useState('')

    return (
    <LetterGuessContainer>
    {userLetter.length>1?
        <StyledInput value={userLetter} type='text' placeholder={userLetter} disabled/>:
        <StyledInput value={userLetter} onChange={e=> setUserLetter(e.target.value)}type='text'/>
    }
    <StyledButton onClick={() => {
        onGuessSubmit(userLetter)
         setUserLetter('')}}> <StyledButtonText>Send my guess</StyledButtonText> </StyledButton>
    </LetterGuessContainer>)
}

export default UserLetterGuess


const LetterGuessContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    height:100%;
    width:50%;
`
const StyledInput = styled.input`
    height:30%;
    width:40%;
    background:lightblue;
`
const StyledButton = styled.button`
    background: transparent;
    height: 40%;
    width: 40%;

`

const StyledButtonText =  styled.span`
    font-size:12px;
    @media (max-width: 900px) {
        margin-top:2rem;
        font-size:10px;
      }
      @media (min-width: 900px) {
        font-size:18px;
      }
    

`