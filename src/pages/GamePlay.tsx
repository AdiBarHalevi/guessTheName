import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import ChosenMovie from "../components/ChosenMovie";

import Timer from "../components/Timer"
import UserLetterGuess from "../components/UserLetterGuess";
import { getRandomArrayIndex } from "../utils";

const Gameplay =({movies}: {movies: Array<string>})=>{
    const [movieName, setMovieName ] = useState<Array<{letter: string, isVisible: boolean}>>()
console.log(movieName);

    useEffect(()=>{
        const randomMovie = movies[getRandomArrayIndex(movies.length - 1)]
        setMovieName(movieNameToLettersObject(randomMovie))
    },[movies])

    const onLetterGuess = (letter: string) => {
        console.log(letter);
        
        const letterObjectMatches = movieName ? movieName.filter(letterObj => letterObj.letter === letter): []
        
        if(letterObjectMatches.length > 0){
            const movieNameWithGuess = movieName?.map(letterObj => {
                if(letter === letterObj.letter) return {letter: letterObj.letter,isVisible:true}
                return {letter: letterObj.letter,isVisible:letterObj.isVisible}
            })

            setMovieName(movieNameWithGuess)
        }
    }

    return (
    <div>
        <header>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/instructions"> Instructions</NavLink>
        </header>
        <div>
            <div>
                <Timer/>
            </div>
            <div>
                <h3>guess the word</h3>
                    <ChosenMovie movieName={movieName}/>

                    <UserLetterGuess onGuessSubmit={(letter: string) =>onLetterGuess(letter)} />
            </div>

        </div>

        
    </div>
    )
}

export default Gameplay

const movieNameToLettersObject = (movieName : string): Array<{letter: string, isVisible: boolean}> => {
    const movieLetters = movieName.split("")

    return movieLetters.map(letter => {  return{letter, isVisible: false}})
} 
