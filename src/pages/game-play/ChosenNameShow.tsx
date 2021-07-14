import styled from "styled-components";

const ChosenMovie = ({
  showName,
}: {
  showName?: Array<{ letter: string; isVisible: boolean }>;
}) => {
  if (!showName) {
    return <div></div>;
  }
  return (
    <WordContainer>
      {console.log(showName)}
      {showName.map((letterObj: { letter: string; isVisible: boolean }, i) => {
        const { letter, isVisible } = letterObj;
        if (letter === " ") {
          return <StyledSpace key={i} />;
        }
        if (isVisible) {
          return <StyledDash key={i}>{letter}</StyledDash>;
        }
        return <StyledDash key={i}>_</StyledDash>;
      })}
    </WordContainer>
  );
};

export default ChosenMovie;

const StyledDash = styled.span`
  font-size: 44px;
  font-weight: 500;
  width: 5rem;
  height: 3.75rem;
  margin: 0 5px 0 5px;
  @media (max-width: 900px) {
    font-size: 22px;
  }
`;

const StyledSpace = styled.span`
  display: block;
  width: 5rem;
  height: 3.75rem;
  margin: 0 5px 0 5px;
`;

const WordContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 90%;
  padding: 10px;
  overflow: auto;
  @media (max-width: 900px) {
    justify-content: unset;
  }
`;
