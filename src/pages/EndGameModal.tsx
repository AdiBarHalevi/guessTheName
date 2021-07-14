import styled from "styled-components"
import GameOver from "./GameOver"
import SucessFullTurn from "./SucessFullTurn"

const EndGameModal = ({endGameStatus,resetGame}:{endGameStatus:boolean;resetGame:Function})=>{
    const handleClick = ()=> {
        resetGame()
    }
    
    return (
    <>
        <ModalBackGround/>
        <GameModal>
            {endGameStatus? <SucessFullTurn handleClick={handleClick}/>:<GameOver/>}
        </GameModal>
    </>
    )
}

export default EndGameModal

const ModalBackGround = styled.div`
    opacity:0.7;
    background:black;
    position:absolute;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    z-index:1;

`


const GameModal = styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    top:30%;
    left:30%;
    height:50vh;
    width:30vw;
    z-index:2;
    background:red;

`