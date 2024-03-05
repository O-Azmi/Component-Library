import styled, { css } from 'styled-components';
import { TableRowProps } from './TableRow.types';
import TableCell from '../TableCell/TableCell';

const StyledTableRow = styled.tr<{disabled?: boolean}>`
    color: black;

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `};
`;

export default function TableRow({ disabled }: TableRowProps) {
    return (
        <StyledTableRow disabled={disabled}>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#d9d9d9'} border={'around'} text={'Skills'} bold={'bold'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#d9d9d9'} border={'around'} text={'Skills'} bold={'default'}/>
            <TableCell width={'200px'} height={'50px'} backgroundColor={'#d9d9d9'} border={'around'} text={'Skills'} bold={'default'}/>
        </StyledTableRow>
    );
}
