const ChosenMovie = ({showName}:{showName?: Array<{letter: string, isVisible: boolean}>})=>{
    if(!showName){
        return <div></div>
    }
    return (
        <div>         
            {showName.map((letterObj: {letter: string, isVisible: boolean},i) => {
                const {letter, isVisible} = letterObj
                if(letter === " "){
                    return <span key ={i}> </span>
                }
                if(isVisible){
                    return <span key ={i}>{letter}</span>
                }
                return <span key ={i}>_,</span>
            })}
        </div>
    )
}

export default ChosenMovie
