import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import ChosenMovie from "./game-play/ChosenMovie";

import Timer from "../components/Timer"
import UserLetterGuess from "./game-play/UserLetterGuess";
import { getRandomArrayIndex } from "../utils";
import CreditViewer from "./game-play/CreditViewer";

const Gameplay =({shows}: {shows: Array<string>})=>{
    const [showName, setShowName ] = useState<Array<{letter: string, isVisible: boolean}>>()
    const [creditPoints,setCreditPoints] = useState<number>(3)

    useEffect(()=>{
        const randomShow = shows[getRandomArrayIndex(shows.length - 1)]
        setShowName(showNameToLettersObject(randomShow))
    },[shows])

    const onLetterGuess = (letter: string) => {
        const letterObjectMatches = showName ? showName.filter(letterObj => letterObj.letter === letter): []
        
        if(letterObjectMatches.length > 0){
            const showNameWithGuess = showName?.map(letterObj => {
                if(letter === letterObj.letter) return {letter: letterObj.letter,isVisible:true}
                return {letter: letterObj.letter,isVisible:letterObj.isVisible}
            })
            const sloved = checkIfSolved(showNameWithGuess)
            console.log(sloved)
            if(!sloved) console.log('generate new word')
            setShowName(showNameWithGuess)
        }else{
            const deductedCredit = creditPoints-1
            return setCreditPoints(deductedCredit)
        }
    }

    return (
    <div>
        <header>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/instructions"> Instructions</NavLink>
        </header>
        <div>
            <CreditViewer creditPoints={creditPoints}/>
        </div>
        <div>
            <div>
                <Timer/>
            </div>
            <div>
                <h3>guess the word</h3>
                    {console.log(showName)}

                    <ChosenMovie showName={showName}/>

                    <UserLetterGuess onGuessSubmit={(letter: string) =>onLetterGuess(letter)} />
            </div>

        </div>

        
    </div>
    )
}

export default Gameplay

const showNameToLettersObject = (showName : string): Array<{letter: string, isVisible: boolean}> => {
    const showLetters = showName.split("")
    return showLetters.map(letter => { 
        if(letter === ' ') return {letter, isVisible: true} 
         return{letter, isVisible: false}})
} 

const checkIfSolved = (showName?:Array<{letter: string, isVisible: boolean}>)=> showName?.find(letterObj=>letterObj.isVisible === false)

