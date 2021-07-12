const ChosenMovie = ({movieName}:{movieName?: Array<{letter: string, isVisible: boolean}>})=>{
    if(!movieName){
        return <div></div>
    }
    return (
        <div>         
            {movieName.map((letterObj: {letter: string, isVisible: boolean}) => {
                const {letter, isVisible} = letterObj
                if(letter === " "){
                    return <span> </span>
                }
                if(isVisible){
                    return <span>{letter}</span>
                }
                return <span>_,</span>
            })}
        </div>
    )
}

export default ChosenMovie
