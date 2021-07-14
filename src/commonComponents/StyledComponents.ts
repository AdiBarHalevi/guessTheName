import styled from "styled-components";

export const StyledPage = styled.div`
  height: 100%;
  width: 100%;
  background: blue;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Yomogi", cursive, Arial, Helvetica, sans-serif;
`;

export const GameModal = styled.div<{ flexDirection: string }>`
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
  height: 40%;
  width: 40%;
  @media (max-width: 900px) {
    font-size: 10px;
    border-radius: 10px;
    height: 30%;
    width: 50%;
  }
  @media (min-width: 900px) {
    font-size: 18px;
  }
`;
