import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ChosenMovie from "./game-play/ChosenNameShow";

import Timer from "../components/Timer";
import UserLetterGuess from "./game-play/UserLetterGuess";
import { getRandomArrayIndex } from "../utils";
import CreditViewer from "./game-play/CreditViewer";
import Stats from "./game-play/Stats";
import EndGameModal from "./EndGameModal";

import styled from "styled-components";
import HintViewer from "./game-play/HintViewer";
import { StyledButton } from "../commonComponents/StyledComponents";

enum actionEnum {
  CORRECT = "correct",
  WRONG = "wrong",
  HELP = "help",
}
const showNameToLettersObject = (
  showName: string
): Array<{ letter: string; isVisible: boolean }> => {
  const showLetters = showName.split("");
  return showLetters.map((letter) => {
    if (letter === " ") return { letter, isVisible: true };
    return { letter, isVisible: false };
  });
};

const checkIfSolved = (
  showName?: Array<{ letter: string; isVisible: boolean }>
) => showName?.find((letterObj) => letterObj.isVisible === false);

const changeStats = (
  stats: { correct: number; wrong: number; help: number },
  action: actionEnum,
  setStatsObj: Function
) => {
  const tempStats = { ...stats };
  tempStats[action] += 1;
  setStatsObj(tempStats);
};

const gernerateAword = (
  shows: Array<string>,
  hints: Array<string>,
  setShowName: Function,
  setRelatedHint: Function
) => {
  const randomIndex = getRandomArrayIndex(shows.length - 1);
  const chosenShow = shows[randomIndex];
  const chosenHint = hints[randomIndex];
  setShowName(showNameToLettersObject(chosenShow));
  setRelatedHint(chosenHint);
};

const turnEnd = (
  setModelOpen: Function,
  setPlayerWinTurn: Function,
  playerWin: Boolean
) => {
  setModelOpen(true);
  setPlayerWinTurn(playerWin);
};

const resetGame = (setNewGame: Function, setModalOpen: Function) => {
  setNewGame(true);
  setModalOpen(false);
};

const switchModalVisability = (setFunction: Function, modalState: boolean) =>
  modalState ? setFunction(false) : setFunction(true);

const Gameplay = ({
  shows,
  hints,
}: {
  shows: Array<string>;
  hints: Array<string>;
}) => {
  const [showName, setShowName] = useState<
    Array<{ letter: string; isVisible: boolean }>
  >();
  const [relatedHint, setRelatedHint] = useState("");
  const [endGamemodalOpen, setEndGameModelOpen] = useState(false);
  const [hintModalOpen, setHintModalOpen] = useState(false);
  const [playerWinTurn, setPlayerWinTurn] = useState(false);
  const [creditPoints, setCreditPoints] = useState<number>(3);
  const [statsObj, setStatsObj] = useState({ correct: 0, wrong: 0, help: 0 });
  const [newGame, setNewGame] = useState(true);

  useEffect(() => {
    gernerateAword(shows, hints, setShowName, setRelatedHint);
    setNewGame(false);
  }, [newGame, shows, hints]);

  const onHintRequest = () => {
    switchModalVisability(setHintModalOpen, hintModalOpen);
    changeStats(statsObj, actionEnum.HELP, setStatsObj);
  };

  const onLetterGuess = (letter: string) => {
    const letterObjectMatches = showName
      ? showName.filter((letterObj) => letterObj.letter === letter)
      : [];

    if (letterObjectMatches.length > 0) {
      const showNameWithGuess = showName?.map((letterObj) => {
        if (letter === letterObj.letter)
          return { letter: letterObj.letter, isVisible: true };
        return { letter: letterObj.letter, isVisible: letterObj.isVisible };
      });

      changeStats(statsObj, actionEnum.CORRECT, setStatsObj);
      const coveredLettersLeft = checkIfSolved(showNameWithGuess);
      if (!coveredLettersLeft)
        turnEnd(setEndGameModelOpen, setPlayerWinTurn, true);

      setShowName(showNameWithGuess);
    } else {
      changeStats(statsObj, actionEnum.WRONG, setStatsObj);
      const deductedCredit = creditPoints - 1;
      if (deductedCredit === 0)
        turnEnd(setEndGameModelOpen, setPlayerWinTurn, false);
      return setCreditPoints(deductedCredit);
    }
  };

  return (
    <StyledPage>
      <UpperContainer>
        <ScoreBoard>
          <Stats statsObj={statsObj} />
        </ScoreBoard>
        <CreditAndHintsContainer>
          <CreditViewer creditPoints={creditPoints} />
          <StyledButton onClick={onHintRequest}> Hint </StyledButton>
        </CreditAndHintsContainer>
        {hintModalOpen && (
          <HintViewer
            relatedHint={relatedHint}
            handleClick={() =>
              switchModalVisability(setHintModalOpen, hintModalOpen)
            }
          />
        )}
      </UpperContainer>
      <MainContent>
        <GameContainer>
          <StyledTitle>guess the word</StyledTitle>
          <ChosenMovie showName={showName} />
          <UserLetterGuess
            onGuessSubmit={(letter: string) => onLetterGuess(letter)}
          />
        </GameContainer>
      </MainContent>
      {endGamemodalOpen && (
        <EndGameModal
          endGameStatus={playerWinTurn}
          resetGame={() => resetGame(setNewGame, setEndGameModelOpen)}
        />
      )}
    </StyledPage>
  );
};

export default Gameplay;

const StyledPage = styled.div`
  height: 100%;
  width: 100%;
  background: #b3bec2;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  font-family: "Yomogi", cursive, Arial, Helvetica, sans-serif;
  position: relative;
  @media (max-width: 900px) {
    font-size: 28px;
  }
`;

const UpperContainer = styled.header`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 800px) {
    height: 50%;
  }
`;
const MainContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 95%;
`;

const StyledTitle = styled.p`
  font-size: 44px;
  font-weight: 600;
  display: block;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
const CreditAndHintsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 58%;
  width: 50%;
  @media (max-width: 800px) {
    height: 65%;
    justify-content: center;
    width: 30%;
  }
`;
