import styled from "styled-components"
import { GameModal, ModalBackGround } from "../commonComponents/StyledComponents"
import GameOver from "./GameOver"
import SucessFullTurn from "./SucessFullTurn"

const EndGameModal = ({endGameStatus,resetGame}:{endGameStatus:boolean;resetGame:Function})=>{
    const handleClick = ()=> {
        resetGame()
    }
    
    return (
    <>  
        <ModalBackGround/>
        <GameModal flexDirection="row">
            {endGameStatus? <SucessFullTurn handleClick={handleClick}/>:<GameOver/>}
        </GameModal>
    </>
    )
}

export default EndGameModal

