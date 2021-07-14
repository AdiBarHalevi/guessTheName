import styled from "styled-components"
import disturtedImage from "../img/messybackground.gif"
import oldWood from '../img/oldwood.jpeg'

const Layout =({children}:{children: JSX.Element})=>{
    return(
        <OuterBorder>
            <InnerBorder>
                {children}
            </InnerBorder>

            <SideDecorations>

                <TVButton>
                    <ButtonController/>
                </TVButton>

                <SoundAdjusters>

                    <SingelAdujuster>
                        <AdjusterPin left={`-10px`} top={`10px`}/>
                    </SingelAdujuster>
                    <SingelAdujuster>
                        <AdjusterPin left={`-10px`} top={`90px`}/>
                    </SingelAdujuster>
                    <SingelAdujuster>
                        <AdjusterPin left={`-10px`} top={`50px`}/>
                    </SingelAdujuster>

                </SoundAdjusters>
            </SideDecorations>

        </OuterBorder>
    )
}

export default Layout

const OuterBorder = styled.div`
    height:100vh;
    background:url(${oldWood}) center center/cover;
    display:flex;
    justify-content: center;
    align-items:center;
`

const InnerBorder = styled.div`
    border:black 10px solid;
    height:80%;
    width:70%;
    display:flex;
    justify-content: center;
    align-items:center;
    @media (max-width: 800px){
        width:80%;
        height:80%;
      }
`

const TVButton = styled.div`
    height:6rem;
    width:6rem;
    background:#868278;
    border-radius: 3rem;
    position:relative;
    z-index:0;
`
const ButtonController = styled.div`
    height: 1rem;
    width: 5rem;
    background: black;
    position: absolute;
    top: 40px;
    left: 8px;
`

const SideDecorations = styled.div`
    border:black 10px solid;
    display:flex;
    flex-direction:column;
    background:white;
    height:80%;
    width: 12%;
    justify-content:space-around;
    align-items:center;
    @media (max-width: 800px){
        display:none;
      }
`

const SoundAdjusters = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
`

const SingelAdujuster = styled.div`
    height: 10rem;
    width: 0.5rem;
    background: black;
    position: relative;
`

const AdjusterPin = styled(`div`)<{left:string;top:string}>`
    height: 0.5rem;
    width: 2rem;
    background: black;
    position: absolute;
    left: ${(props)=>props.left};
    top:${(props)=>props.top};
`