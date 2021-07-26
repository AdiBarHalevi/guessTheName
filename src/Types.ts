export type StatisticsType = {
    correct: number;
    wrong: number;
    help: number;
}

export type GamePlayProp = Array<string>

export enum ActionType {
    CORRECT = "correct",
    WRONG = "wrong",
    HELP = "help",
  }

export interface HintViewerInterFace{
    relatedHint: string;
    handleClick: Function;
  }

export type showNameType = Array<{ letter: string; isVisible: boolean }>

export type LetterObjType = { letter: string; isVisible: boolean }

export type endGameProps = {
    endGameStatus: boolean;
    contiuePlaying: Function;
    resetAfterLoss:Function
  }