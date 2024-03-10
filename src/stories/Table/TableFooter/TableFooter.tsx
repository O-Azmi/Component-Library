import styled, {css} from 'styled-components';
import { TableFooterProps } from './TableFooter.types';
import TableCell from '../TableCell/TableCell';
import TableRow from '../TableRow/TableRow';

const StyledTableFooter = styled.tfoot<{disabled?: boolean}>`
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
            <TableRow>
                <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'right'} text={'Skills'} bold={''}/>
                <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Skills'} bold={''}/>
                <TableCell width={'200px'} height={'50px'} backgroundColor={'#f0f0f0'} border={'left'} text={'Skills'} bold={''}/>
            </TableRow>
        </StyledTableFooter>
    );
}

export default TableFooter;
