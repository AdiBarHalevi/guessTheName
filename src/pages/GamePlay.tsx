import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import ChosenMovie from "./game-play/ChosenMovie";

import Timer from "../components/Timer"
import UserLetterGuess from "./game-play/UserLetterGuess";
import { getRandomArrayIndex } from "../utils";
import CreditViewer from "./game-play/CreditViewer";
import Stats from "./game-play/Stats";
import EndGameModal from "./EndGameModal";

import styled from "styled-components";

enum actionEnum {
    CORRECT = 'correct',
    WRONG = 'wrong',
    HELP= 'help'

}

// TODO CHECK HOW TO IMPLEMENT THIS INTERFACE
interface StatsData{
        correct:number;
        wrong:number;
        help:number;
}

const showNameToLettersObject = (showName : string): Array<{letter: string, isVisible: boolean}> => {
    const showLetters = showName.split("")
    return showLetters.map(letter => { 
        if(letter === ' ') return {letter, isVisible: true} 
         return{letter, isVisible: false}})
} 

const checkIfSolved = (showName?:Array<{letter: string, isVisible: boolean}>)=> showName?.find(letterObj=>letterObj.isVisible === false)


const changeStats =(stats:{correct:number,wrong:number,help:number},action:actionEnum ,setStatsObj:Function)=>{
     const tempStats ={...stats}
     tempStats[action] += 1
    setStatsObj(tempStats)
    }

const gernerateAword =(shows:Array<string>,setShowName:Function)=>{
    const randomShow = shows[getRandomArrayIndex(shows.length - 1)]
    setShowName(showNameToLettersObject(randomShow))
}

const turnEnd = (setModelOpen:Function,setPlayerWinTurn:Function,playerWin:Boolean)=>{
    setModelOpen(true)
    setPlayerWinTurn(playerWin)
}

const resetGame=(setNewGame:Function,setModelOpen:Function)=>{
    setNewGame(true)
    // TODO CHANGE NAME TO MODAL
    setModelOpen(false)


}


const Gameplay =({shows}: {shows: Array<string>})=>{
    const [showName, setShowName ] = useState<Array<{letter: string, isVisible: boolean}>>()
    const [modelOpen,setModelOpen] = useState(false)
    const [playerWinTurn,setPlayerWinTurn] = useState(false)
    const [creditPoints,setCreditPoints] = useState<number>(3)
    const [statsObj,setStatsObj] = useState({correct:0,wrong:0,help:0})
    const [newGame, setNewGame] = useState(true)

    useEffect(()=>{
        gernerateAword(shows,setShowName)
        setNewGame(false)

    },[newGame,shows])

    const onLetterGuess = (letter: string) => {
        const letterObjectMatches = showName ? showName.filter(letterObj => letterObj.letter === letter): []
        
        if(letterObjectMatches.length > 0){
            const showNameWithGuess = showName?.map(letterObj => {
                if(letter === letterObj.letter) return {letter: letterObj.letter,isVisible:true}
                return {letter: letterObj.letter,isVisible:letterObj.isVisible}
            })

            changeStats(statsObj,actionEnum.CORRECT,setStatsObj)
            const coveredLettersLeft = checkIfSolved(showNameWithGuess)
            if(!coveredLettersLeft) turnEnd(setModelOpen,setPlayerWinTurn,true)

            setShowName(showNameWithGuess)
        }else{
            changeStats(statsObj,actionEnum.WRONG,setStatsObj)
            const deductedCredit = creditPoints-1
            if(deductedCredit === 0)turnEnd(setModelOpen,setPlayerWinTurn,false)
            return setCreditPoints(deductedCredit)
        }
    }

    return (
    <StyledPage>
        {/* <header>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/instructions"> Instructions</NavLink>
        </header> */}
        <UpperContainer>
        <ScoreBoard>
                <Timer/>
                <Stats statsObj={statsObj}/>
            </ScoreBoard>
            <CreditViewer creditPoints={creditPoints}/>
        </UpperContainer>
        <MainContent>

            <GameContainer>
                <StyledTitle>guess the word</StyledTitle>
                    <ChosenMovie showName={showName}/>
                    <UserLetterGuess onGuessSubmit={(letter: string) =>onLetterGuess(letter)} />
            </GameContainer>
        </MainContent>
        {modelOpen&& <EndGameModal endGameStatus={playerWinTurn} resetGame={()=>resetGame(setNewGame,setModelOpen)}/> }
    </StyledPage>
    )
}

export default Gameplay


const StyledPage = styled.div`
    height:100%;
    width:100%;
    background:blue;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    text-align:center;
    font-family: 'Yomogi', cursive,Arial, Helvetica, sans-serif;
    // position: relative;
`

const UpperContainer = styled.header`
    width:100%;
    height:40%;
    display:flex;
    justify-content:space-around;
    align-items: center;

`
const MainContent = styled.div`
    width:100%;
    height:80%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;

`

const ScoreBoard = styled.div`
    display:flex;
    flex-direction:column;
    width:60%;
`

const GameContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    height:90%;
    width:95%;
`

const StyledTitle = styled.p`
    font-size:44px;
    font-weight:600;
    display: block;
    @media (max-width: 800px) {
        margin-top:2rem;
        font-size:22px;
      }

`