import { useState } from "react";
import styled from "styled-components";
import {
  DisabledButton,
  FlexBox,
  InvalidSign,
  StyledButton,
} from "../../commonComponents/StyledComponents";

const UserLetterGuess = ({
  onGuessSubmit,
}: {
  onGuessSubmit: (letter: string) => void;
}) => {
  const [userLetter, setUserLetter] = useState("");

  return (
    <FlexBox
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"100%"}
      width={"50%"}
    >
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
          <InvalidSign>You can guess only one charcter at a time</InvalidSign>
          Check the guess
        </DisabledButton>
      ) : (
        <StyledButton
          onClick={() => {
            onGuessSubmit(userLetter);
            setUserLetter("");
          }}
        >
          Check the guess
        </StyledButton>
      )}
    </FlexBox>
  );
};

export default UserLetterGuess;

const StyledInput = styled.input`
  height: 30%;
  width: 40%;
  background: lightblue;
  font-size: 33px;
  text-align: center;
  @media (max-width: 900px) {
    height: 30%;
    width: 80%;
    font-size: 22px;
  }
`;
