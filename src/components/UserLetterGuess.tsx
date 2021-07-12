import { useState } from "react"

const UserLetterGuess = ({onGuessSubmit}: {onGuessSubmit: (letter: string) => void}) => {
    const [userLetter, setUserLetter] = useState('')

    return <><input value={userLetter} onChange={e=> setUserLetter(e.target.value)} type='text'/>
    <button onClick={() => onGuessSubmit(userLetter)}>GUESS</button>
    </>
}

export default UserLetterGuess