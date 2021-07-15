import styled, { keyframes } from "styled-components";

const OpenScreen = keyframes`
    0%{
        height:0%;
    }
    100%{
        height:100%;
    }
`;

export const Hide = keyframes`
  0%{
    opacity:0;
  }
  90%{
    opacity:0;
  }
  100%{
    opacity:1;
  }

`;

export const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  background: #b3bec2;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  position: relative;
  animation: ${OpenScreen} 3s ease;

  @media (max-width: 900px) {
    font-size: 28px;
    align-items: center;
  }
`;

export const PopUpWindow = styled.div<{ flexDirection: string }>`
  position: absolute;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: center;
  align-items: center;
  top: 2%;
  left: 8%;
  height: 90%;
  width: 90%;
  z-index: 2;
  background: #433c3b;
  color: #e6dbcc;
  @media (max-width: 900px) {
    left: 5%;
    top: 5%;
  }
`;

export const StyledButton = styled.button`
  background: black;
  color: #b3bec2;
  font-size: 22px;
  border-radius: 1rem;
  cursor: pointer;
  padding: 8px;

  @media (max-width: 900px) {
    font-size: 10px;
    border-radius: 10px;
    padding: 4px;
  }
`;

export const StyledPageHeader = styled.h2`
  font-size: 60px;
  font-weight: 600;
  animation: ${Hide} 2s ease;
  @media (max-width: 900px) {
    font-size: 33px;
  }
`;

export const StyledDescription = styled.p`
  font-size: 30px;
  font-weight: 500;
  animation: ${Hide} 2s ease;

  @media (max-width: 900px) {
    font-size: 22px;
    overflow: scroll;
  }
`;

export const MainSign = styled.div`
  animation: ${OpenScreen} 3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #b3bec2;
  @media (max-width: 900px) {
    font-size: 33px;
    over-flow: scroll;
    height: 100%;
    display: block;
  }
`;

export const FlexBox = styled.div<{
  flexDirection: string;
  height?: string;
  width?: string;
  justifyContent?: string;
  alignItems?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const UpperContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  animation: ${Hide} 3s ease;

  @media (max-width: 800px) {
    height: 50%;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Hide} 3s ease;
  align-items: center;
`;

export const InvalidSign = styled.span`
  padding: 4px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8rem;
  background: black;
  color: #b3bec2;
  opacity: 0;
  @media (max-width: 900px) {
    font-size: 12px;
    height: 6rem;
    border-radius: 10px;
    top: -8rem;
  }
`;

export const DisabledButton = styled.button`
  background: #6b6b6b;
  color: #b3bec2;
  font-size: 22px;
  border-radius: 1rem;
  cursor: pointer;
  position: relative;
  padding: 8px;
  &:hover ${InvalidSign} {
    opacity: 1;
    transition: opacity 2s;
  }

  @media (max-width: 900px) {
    font-size: 12px;
    border-radius: 10px;
    padding: 1px;
  }
`;

export const StyledModalButton = styled.button`
  color: #433c3b;
  background: #e6dbcc;
  font-size: 18px;
  border-radius: 5%;
  cursor: pointer;
  padding: 6px;

  @media (max-width: 900px) {
    font-size: 16px;
    border-radius: 5%;
    padding: 6px;
  }
`;

export const PopUpHeader = styled.h2`
  font-size: 60px;
  font-weight: 600;
  @media (max-width: 900px) {
    font-size: 33px;
  }
`;
