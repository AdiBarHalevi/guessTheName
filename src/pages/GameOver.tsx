import { FlexBox, PopUpHeader, StyledModalButton } from "../commonComponents/StyledComponents";

const GameOver = () => {
  return (
    <FlexBox flexDirection='column'>
      <PopUpHeader>Game Over</PopUpHeader>
        <StyledModalButton onClick={() => window.location.reload()}>
          restart the game
        </StyledModalButton>
    </FlexBox>
  );
};

export default GameOver;

