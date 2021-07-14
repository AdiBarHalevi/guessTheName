import { useState } from "react";
import styled, { keyframes } from "styled-components";
import disturtedImage from "../img/messybackground.gif";
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
  width: 100vw;
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
`;
const ButtonController = styled.div`
  height: 1rem;
  width: 5rem;
  background: black;
  position: absolute;
  top: 40px;
  left: 8px;
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
    display: none;
  }
`;

const SoundAdjusters = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const SingelAdujuster = styled.div`
  height: 10rem;
  width: 0.5rem;
  background: black;
  position: relative;
`;

const AdjusterPin = styled(`div`)<{ top: string }>`
  height: 0.5rem;
  width: 2rem;
  background: #e6dbcc;
  position: absolute;
  left: -10px;
  top: ${(props) => props.top};
`;

// const brakePic = keyframes`
//     from{
//         opacity:0;
//     }
//     to{
//         opacity:0.9;
//     }
// `;

