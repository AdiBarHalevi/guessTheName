import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../commonComponents/StyledComponents";

const UserLetterGuess = ({
  onGuessSubmit,
}: {
  onGuessSubmit: (letter: string) => void;
}) => {
  const [userLetter, setUserLetter] = useState("");

  return (
    <LetterGuessContainer>
      <StyledInput
        value={userLetter}
        onChange={(e) => setUserLetter(e.target.value)}
        type="text"
      />
      {userLetter.length > 1 ? (
        <DisabledButton
          onClick={() => {
            onGuessSubmit(userLetter);
            setUserLetter("");
          }}
          disabled
        >
          Send my guess
        </DisabledButton>
      ) : (
        <StyledButton
          onClick={() => {
            onGuessSubmit(userLetter);
            setUserLetter("");
          }}
        >

          Send my guess
        </StyledButton>
      )}
    </LetterGuessContainer>
  );
};

export default UserLetterGuess;

const LetterGuessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 50%;
`;
const StyledInput = styled.input`
  height: 30%;
  width: 40%;
  background: lightblue;
  font-size: 33px;
  text-align: center;
`;

const DisabledButton = styled.button`
    background: #6b6b6b;
    color: #b3bec2;
    font-size: 22px;
    border-radius: 1rem;
    cursor: pointer;
    height: 40%;
    width: 40%;
    @media (max-width: 900px) {
    font-size: 10px;
    border-radius: 10px;
    height: 30%;
    width: 50%;
    }
    @media (min-width: 900px) {
    font-size: 18px;
    }
`
