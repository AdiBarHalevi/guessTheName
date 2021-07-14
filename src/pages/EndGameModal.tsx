import { GameModal } from "../commonComponents/StyledComponents";
import GameOver from "./GameOver";
import SucessFullTurn from "./SucessFullTurn";

const EndGameModal = ({
  endGameStatus,
  resetGame,
}: {
  endGameStatus: boolean;
  resetGame: Function;
}) => {
  const handleClick = () => {
    resetGame();
  };

  return (
    <>
      <GameModal flexDirection="row">
        {endGameStatus ? (
          <SucessFullTurn handleClick={handleClick} />
        ) : (
          <GameOver />
        )}
      </GameModal>
    </>
  );
};

export default EndGameModal;
