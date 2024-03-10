import styled, { css } from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<{disabled?: boolean}>`
    color: black;

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `};
`;

export default function TableRow({ disabled, children }: TableRowProps) {
    return (
        <>
        <StyledTableRow  disabled={disabled}>
            {children}
        </StyledTableRow>
  
    </>
    );
}
