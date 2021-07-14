import styled from "styled-components"

interface Props{
    statsObj:{
        correct:number;
        wrong:number;
        help:number;
    }
}

const Stats:React.FC<Props> = ({statsObj})=>{

    return <>
        <table>
        <tbody>
                <tr>
                    <TableHader>
                        correct guesses:
                    </TableHader>
                    <TableCell>
                        {statsObj.correct}
                    </TableCell>
                </tr>
                <tr>
                    <TableHader>
                        worng guesses:
                    </TableHader>
                    <TableCell>
                        {statsObj.wrong}
                    </TableCell>
                </tr>
                <tr>
                    <TableHader>
                        calls for help:
                    </TableHader>
                    <TableCell>
                        {statsObj.help}
                    </TableCell>
                </tr>
            </tbody>
        </table>
    </>
}

export default Stats


const TableHader = styled.th`
    font-size:33px;
    @media (max-width: 800px) {
        font-size:22px;

      }

`
const TableCell = styled.td`
    font-size:33px;
    @media (max-width: 800px) {
        font-size:22px;

      }

`


// const CreditIcon = styled.div`
//     background:url(${CreditPoint}) center center/cover;
//     height:3rem;
//     width:3rem;
//     @media (max-width: 800px) {
//         height:2rem;
//         width:2rem;
//       }
// `