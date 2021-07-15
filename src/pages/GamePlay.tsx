import { useEffect, useState } from "react";
import ChosenMovie from "./game-play/ChosenNameShow";

import UserLetterGuess from "./game-play/UserLetterGuess";
import CreditViewer from "./game-play/CreditViewer";
import Stats from "./game-play/Stats";
import EndGameWindow from "./EndGameWindow";


import HintViewer from "./game-play/HintViewer";
import { DisabledButton, FlexBox, MainContent, StyledButton, StyledPage, StyledPageHeader, UpperContainer } from "../commonComponents/StyledComponents";
import { ActionType, checkIfSolved, gernerateAword, resetAfterWin, turnEnd } from "../utils/gamePlayUtils";


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
  const [statsObj, setStatsObj] = useState<{correct: number, wrong:number, help: number}>({ correct: 0, wrong: 0, help: 0 });
  const [newGame, setNewGame] = useState(true);

  useEffect(() => {
    gernerateAword(shows, hints, setShowName, setRelatedHint);
    setNewGame(false);
  }, [newGame, shows, hints]);

  const onHintRequest = () => {
    setHintModalOpen(!hintModalOpen)
    const tempStats = { ...statsObj };
    tempStats[ActionType.HELP]++;
    setStatsObj(tempStats);
  };

  const onLetterGuess = (letter: string) => {
    const lowerCaseUserGuess = letter.toLowerCase();
    
    const letterObjectMatches = showName
      ? showName.filter((letterObj) => letterObj.letter.toLowerCase() === lowerCaseUserGuess)
      : [];

    if (letterObjectMatches.length > 0) {
      const showNameWithGuess = showName?.map((letterObj) => {
        if (lowerCaseUserGuess === letterObj.letter.toLowerCase()){
          return { letter: letterObj.letter, isVisible: true };
        }
        return { letter: letterObj.letter, isVisible: letterObj.isVisible };
      });

      const tempStats = { ...statsObj };
      tempStats[ActionType.CORRECT]++;
      setStatsObj(tempStats);
      const coveredLettersLeft = checkIfSolved(showNameWithGuess);

      if (!coveredLettersLeft){
        turnEnd(setEndGameModelOpen, setPlayerWinTurn, true);
      }

      setShowName(showNameWithGuess);
    } else {
      const tempStats = { ...statsObj };
      tempStats[ActionType.WRONG]++;
      setStatsObj(tempStats);
      const deductedCredit = creditPoints - 1;

      if (deductedCredit === 0){
        turnEnd(setEndGameModelOpen, setPlayerWinTurn, false);
      }
      return setCreditPoints(deductedCredit);
    }
  };


  return (
    <StyledPage>  
      <UpperContainer>
        <Stats statsObj={statsObj} />
        <FlexBox
          flexDirection={"column"}
          justifyContent ={"center"}
          alignItems={"center"}
          height ={"58%"}
          width ={"50%"}
        >
          <CreditViewer creditPoints={creditPoints} />

          {/* some of the API's value's do not have a description */}
          {relatedHint.length>1?
            <StyledButton onClick={onHintRequest}> Hint </StyledButton>:
            <DisabledButton>this show has no hint, sorry!</DisabledButton>
          
        }
        </FlexBox>

        {hintModalOpen && (
          <HintViewer
            relatedHint={relatedHint}
            handleClick={() =>
              setHintModalOpen(!hintModalOpen)
            }
          />
        )}
      </UpperContainer>

      <MainContent>
        <FlexBox
          flexDirection={"column"}
          justifyContent ={"center"}
          alignItems={"center"}
          height ={"90%"}
          width ={"95%"}
        >
          <StyledPageHeader>guess the word</StyledPageHeader>

          <ChosenMovie showName={showName} />

          <UserLetterGuess
            onGuessSubmit={onLetterGuess}
          />
        </FlexBox>
      </MainContent>
      {endGamemodalOpen && (
        <EndGameWindow
          endGameStatus={playerWinTurn}
          contiuePlaying={() => resetAfterWin(setNewGame, setEndGameModelOpen)}
        />
      )}
    </StyledPage>
  );
};

export default Gameplay;
