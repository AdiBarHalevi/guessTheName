import styled from "styled-components";
import { FlexBox } from "../../commonComponents/StyledComponents";

interface Props {
  statsObj: {
    correct: number;
    wrong: number;
    help: number;
  };
}


const Stats: React.FC<Props> = ({ statsObj }) => {
  return (
    <FlexBox flexDirection={'column'} width={'60%'} >
      <table>
        <tbody>
          <tr>
            <TableHader>correct guesses:</TableHader>
            <TableCell>{statsObj.correct}</TableCell>
          </tr>
          <tr>
            <TableHader>wrong guesses:</TableHader>
            <TableCell>{statsObj.wrong}</TableCell>
          </tr>
          <tr>
            <TableHader>calls for help:</TableHader>
            <TableCell>{statsObj.help}</TableCell>
          </tr>
        </tbody>
      </table>
    </FlexBox>
  );
};

export default Stats;

const TableHader = styled.th`
  font-size: 33px;
  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const TableCell = styled.td`
  font-size: 33px;
  
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

