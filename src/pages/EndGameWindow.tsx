import { PopUpWindow } from "../commonComponents/StyledComponents";
import GameOver from "./GameOver";
import SucessFullTurn from "./SucessFullTurn";

const EndGameWindow = ({
  endGameStatus,
  contiuePlaying,
}: {
  endGameStatus: boolean;
  contiuePlaying: Function;

}) => {

  const resetToContinue = () => {
    contiuePlaying();
  };

  return (
    <>
      <PopUpWindow flexDirection="row">
        {endGameStatus ? (
          <SucessFullTurn handleClick={()=>resetToContinue} />
        ) : (
          <GameOver />
        )}
      </PopUpWindow>
    </>
  );
};

export default EndGameWindow;
