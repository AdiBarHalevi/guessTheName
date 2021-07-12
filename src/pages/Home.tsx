import { NavLink } from "react-router-dom"

const Home = ()=>{
    return (
        <div>
            <h2> Welcome to guess the game </h2>
            <div>
                <div>
                    <label>click to start the game</label>
                    <NavLink to="/gameplay"> click here to play</NavLink>
                </div>
                <div>
                    <label>click for insturctions</label>
                    <NavLink 
                    to="/gameplay"
                    activeStyle ={{border:'1px solid black',background:'lightGrey'}}> click for insturctions</NavLink>
                </div>
            </div>
            
        </div>
    )
}

export default Home