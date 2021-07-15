import { getRandomArrayIndex } from "./utils";
const englishLettersRegex = /[A-Za-z]/;

export enum ActionType {
  CORRECT = "correct",
  WRONG = "wrong",
  HELP = "help",
}

export const showNameToLettersObject = (
  showName: string
): Array<{ letter: string; isVisible: boolean }> => {
  const showLetters = showName.split("");
  return showLetters.map((letter) => {
    if (!englishLettersRegex.test(letter)) {
      return { letter, isVisible: true };
    }

    return { letter, isVisible: false };
  });
};

export const checkIfSolved = (
  showName?: Array<{ letter: string; isVisible: boolean }>
) => showName?.find((letterObj) => letterObj.isVisible === false);

export const gernerateAword = (
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

export const turnEnd = (
  setModelOpen: Function,
  setPlayerWinTurn: Function,
  playerWin: Boolean
) => {
  setModelOpen(true);
  setPlayerWinTurn(playerWin);
};

export const resetAfterWin = (setNewGame: Function, setModalOpen: Function) => {
  setNewGame(true);
  setModalOpen(false);
};
