import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import oldWood from "../img/oldwood.jpeg";



const Layout = ({ children }: { children: JSX.Element }) => 
   (
    <Background>
      <OuterTVBorder>
        <InnerBorder>
          {children}
        </InnerBorder>

        <SideDecorations>
          <TVButton>
            <ButtonController />
          </TVButton>

          <LinksContainer>
              <StyledTVLink to={'/'} top ={'40%'}>
                Home
            </StyledTVLink>
              <StyledTVLink to={'/gamePlay'} top ={'50%'}>
                Play
            </StyledTVLink>
              <StyledTVLink to={'/explain'} top ={'40%'}>
                Instructions
            </StyledTVLink>
          </LinksContainer>

          <SoundAdjusters>
            <SingelAdujuster>
              <AdjusterPin  top={`10px`} />
            </SingelAdujuster>
            <SingelAdujuster>
              <AdjusterPin  top={`90px`} />
            </SingelAdujuster>
            <SingelAdujuster>
              <AdjusterPin top={`50px`} />
            </SingelAdujuster>
          </SoundAdjusters>
        </SideDecorations>
      </OuterTVBorder>
    </Background>
  );
;

export default Layout;

const Background = styled.div`
  height: 100vh;
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OuterTVBorder = styled.div`
  height: 92vh;
  width: 92vw;
  background: url(${oldWood}) center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:1rem;
  border:5px solid black;
  @media (max-width: 800px) {
    flex-direction:column;
  }
`;

const InnerBorder = styled.div`
  border: black 10px solid;
  height: 90%;
  width: 80%;
  display: flex;
  background: black;
  position: relative;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 80%;
    height: 80%;
  }
`;

const TVButton = styled.div`
  height: 6rem;
  width: 6rem;
  background: #e6dbcc;
  border-radius: 3rem;
  position: relative;
  z-index: 0;
  box-shadow:0px 0px 0px 5px rgba(0,0,0,0.51);
  transform: rotate(60deg);
  @media (max-width: 800px) {
    display: none;
 }

`;

const rotateController = keyframes`
    50%{
      transform: rotate(45deg);
    }
`;

const ButtonController = styled.div`
  height: 1rem;
  width: 5rem;
  background: black;
  position: absolute;
  top: 45%;
  left: 8px;
  animation-name: ${rotateController};
  animation-duration: 15s;
  animation-iteration-count: infinite;
`;




const SideDecorations = styled.div`
  border: black 10px solid;
  display: flex;
  flex-direction: column;
  background: #484a4c;
  height: 90%;
  width: 12%;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 800px) {
    width: 90%;
    height: 8%;
    background:none;
    border:none;

  }

`;

const SoundAdjusters = styled.div`
  display: flex;
  width: 80%;
  height:30%;
  justify-content: space-around;
  background:#E6DBCC;
  align-items:center;
  box-shadow:0px 0px 0px 5px rgba(0,0,0,0.51);
  @media (max-width: 800px) {
     display: none;
  }
`;

const SingelAdujuster = styled.div`
  height: 10rem;
  width: 0.5rem;
  background: black;
  position: relative;
`;

const moveAdjuster = keyframes`
    50%{
      top:0;
    }
`;

const AdjusterPin = styled(`div`)<{ top: string }>`
  height: 0.5rem;
  width: 2rem;
  background: brown;
  position: absolute;
  left: -10px;
  top: ${(props) => props.top};
  animation-name: ${moveAdjuster};
  animation-duration: 12s;
  animation-iteration-count: infinite;

`;



const LinksContainer = styled.div`
  position:rleative;
  height: 30%;
  width: 90%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  @media (max-width: 800px) {
    flex-direction:row;
 }
`

const StyledTVLink = styled(Link)<{ top: string }>`
    text-decoration:none;
    background:red;
    height: 20%;
    font-size:1.5rem;
    color:white;
    display:felx;
    align-items:center;
    justify-content:center;
    border:3px solid black;
    box-shadow:0px 0px 0px 2px rgba(0,0,0,0.51);
    @media(max-width: 1100px) {
      font-size: 1rem;
      
   }
    @media (max-width: 800px) {
      height: 250%;
      font-size: 1.3rem;
      
   }
    `