import {
  FlexBox,
  PopUpHeader,
  StyledModalButton,
} from "../commonComponents/StyledComponents";

const SucessFullTurn = ({ handleClick }: { handleClick: Function }) => {
  return (
    <FlexBox flexDirection={"column"}>
      <PopUpHeader>You win</PopUpHeader>
      <StyledModalButton onClick={() => handleClick()}>
        restart the game
      </StyledModalButton>
    </FlexBox>
  );
};

export default SucessFullTurn;
