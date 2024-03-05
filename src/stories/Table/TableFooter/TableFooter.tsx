import styled, {css} from 'styled-components';
import { TableFooterProps } from './TableFooter.types';
import TableCell from '../TableCell/TableCell';
import TableRow from '../TableRow/TableRow';

const StyledTableFooter = styled.tfoot<{disabled?: boolean}>`
    display:flex;
   ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `};
`;

const TableFooter = ({ disabled }: TableFooterProps) => {
    return (
        <StyledTableFooter disabled={disabled}>
            <TableRow >
                <TableCell width={'300px'} height={'50px'} backgroundColor={'#d9d9d9'} border={'around'} text={'Skills'} bold={''}/>
                <TableCell width={'300px'} height={'50px'} backgroundColor={'d9d9d9'} border={'around'} text={'Skills'} bold={''}/>
            </TableRow>
        </StyledTableFooter>
    );
}

export default TableFooter;
