import { NavLink } from "react-router-dom"

const SucessFullTurn =({handleClick}:{handleClick:Function})=>{
    return (
        <div>
            <h2>You win</h2>
            <button onClick={()=>handleClick()}>restart the game</button>
            <NavLink to='/'>back home</NavLink>
        </div>
    )
}

export default SucessFullTurn