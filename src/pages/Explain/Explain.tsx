import { MainSign, StyledDescription, StyledPage, StyledPageHeader } from "../../commonComponents/StyledComponents";

const Explain = ()=>(
    <StyledPage>
        <MainSign>
             <StyledPageHeader> Guess the TV Show - insturctions </StyledPageHeader>
                <StyledDescription>
                  In order to win the game You need to guess a movie's name <br/>
                  Failing to do so, will cause you a loss of credit.<br/>
                  you can get a hint using the hint button<br/>
                  if you managed to guess a letter correctly you get a point
              </StyledDescription>
        </MainSign>
    </StyledPage>
    )


export default Explain
