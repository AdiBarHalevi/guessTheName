import styled from "styled-components";
import {
  MainSign,
  StyledDescription,
  StyledPage,
  StyledPageHeader,
} from "../commonComponents/StyledComponents";

const Home = () => {
  return (
    <StyledPage>
      <MainSign>
        <StyledPageHeader> Welcome to guess the TV game </StyledPageHeader>
        <StyledDescription>
          <LineSpan>
            in order to start playing , click the{" "}
            <TVButtonSpan>Play</TVButtonSpan> button on the TV{" "}
          </LineSpan>
          <LineSpan>
            {" "}
            if you need instructions , click the{" "}
            <TVButtonSpan>Instructions</TVButtonSpan> button on the TV{" "}
          </LineSpan>
          <LineSpan>
            {" "}
            if you want to go back to this page, you can always click the{" "}
            <TVButtonSpan> Home </TVButtonSpan> button{" "}
          </LineSpan>
        </StyledDescription>
      </MainSign>
    </StyledPage>
  );
};

export default Home;

const TVButtonSpan = styled.span`
  text-decoration: none;
  background: red;
  color: white;
  display: inline-block;
  border: 1px solid black;
  padding: 1px;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.51);
`;

const LineSpan = styled.span`
  display: block;
  margin-top: 20px;
  @media (max-width: 900px) {
    font-size: 33px;
    display: inline-block;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    margin-top: 5px;
    display: inline-block;
  }
`;
