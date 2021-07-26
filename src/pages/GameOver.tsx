import {
  FlexBox,
  PopUpHeader,
  StyledModalButton,
} from "../commonComponents/StyledComponents";

const GameOver = ({handleClick}:{handleClick:Function}) => {
  return (
    <FlexBox flexDirection="column">
      <PopUpHeader>Game Over</PopUpHeader>
      <StyledModalButton onClick={() => handleClick()}>
        restart the game
      </StyledModalButton>
    </FlexBox>
  );
};

export default GameOver;
