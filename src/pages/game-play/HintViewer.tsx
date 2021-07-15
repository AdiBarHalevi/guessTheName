import styled from "styled-components";
import { PopUpWindow } from "../../commonComponents/StyledComponents";

const HintViewer = ({
  relatedHint,
  handleClick,
}: {
  relatedHint: string;
  handleClick: Function;
}) => {
  return (
    <PopUpWindow flexDirection={"column"}>
      <StyledTitle> hint:</StyledTitle>
      <StyledParagraph>{relatedHint}</StyledParagraph>
      <StyledModalButton onClick={() => handleClick()}>
        Got it, Thanks
      </StyledModalButton>
    </PopUpWindow>
  );
};

export default HintViewer;

const StyledParagraph = styled.p`
  width: 60%;
  height: 60%;
  font-size: 22px;
  padding: 10px;

  @media (max-width: 900px) {
    overflow: scroll;
    font-size: 16px;
  }
`;

const StyledTitle = styled.span`
  font-size: 44px;
  font-weight: 600;

  @media (max-width: 900px) {
    font-size: 28px;
  }
`;

const StyledModalButton = styled.button`
  color: #433c3b;
  background: #e6dbcc;
  font-size: 22px;
  border-radius: 5%;
  cursor: pointer;
  height: 10%;
  width: 15%;

  @media (max-width: 900px) {
    font-size: 10px;
    border-radius: 5%;
    height: 8%;
    width: 35%;
  }
`;
