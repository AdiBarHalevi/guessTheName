import { PopUpWindow } from "../commonComponents/StyledComponents";
import { endGameProps } from "../Types";
import GameOver from "./GameOver";
import SucessFullTurn from "./SucessFullTurn";

const EndGameWindow = ({
  endGameStatus,
  contiuePlaying,
  resetAfterLoss
}: endGameProps) => {
  const resetToContinue = () => {
    contiuePlaying();
  };

  return (
    <>
      <PopUpWindow flexDirection="row">
        {endGameStatus ? (
          <SucessFullTurn handleClick={() => resetToContinue()} />
        ) : (
          <GameOver handleClick={()=>resetAfterLoss()}/>
        )}
      </PopUpWindow>
    </>
  );
};

export default EndGameWindow;
