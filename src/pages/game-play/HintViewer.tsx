import { GameModal, ModalBackGround } from "../../commonComponents/StyledComponents"

const HintViewer = ({relatedHint,handleClick}:{relatedHint:string,handleClick:Function})=>{
    return (
        <>
        <ModalBackGround/>
        <GameModal flexDirection={"column"}>
            <p>{relatedHint}</p>
            <button onClick={()=>handleClick()}>click</button>
        </GameModal>
        </>
    )
}

export default HintViewer
