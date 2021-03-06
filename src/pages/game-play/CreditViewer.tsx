import styled from "styled-components";
import CreditPoint from "../../img/life.png";

const CreditViewer = ({ creditPoints }: { creditPoints: number }) => {
  const creditArr = Array.from(Array(creditPoints).keys());

  return (
    <CreditContainer>
      {creditArr.map((num: number) => (
        <CreditIcon key={num} />
      ))}
    </CreditContainer>
  );
};

export default CreditViewer;

const CreditContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 30%;
  }
`;
const CreditIcon = styled.div`
  background: url(${CreditPoint}) center center/cover;
  height: 3rem;
  width: 3rem;

  @media (max-width: 800px) {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
