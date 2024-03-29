import styled, { css } from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<{disabled?: boolean; border: string,width?: string; height?: string, bold: string }>`
    text-align:center;
    vertical-align: middle;
    color: black;

    ${({ border }) =>
        border === 'left' &&
        css`
            border-left: 1px solid black;
        `};

    ${({ border }) =>
        border === 'right' &&
        css`
            border-right: 1px solid black;
        `};

    ${({ border }) =>
        border === 'bottom' &&
        css`
            border-bottom: 1px solid black;
        `};
    
    ${({ border }) =>
        border === 'top' &&
        css`
            border-top: 1px solid black;
        `};
    
    ${({ border }) =>
        border === 'around' &&
        css`
            border: 1px solid black;
        `};

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `};

        ${({ bold }) =>
        bold === 'bold' &&
        css`
            font-weight: bold;
        `};

    ${({ bold }) =>
        bold === 'default' &&
        css`
            font-weight: 500;
        `};
`;

export default function TableCell({ width, height, disabled, backgroundColor, border, text, bold }: TableCellProps) {
    return (
        <StyledTableCell data-testid="myTableCell" width={width} height={height}  style={{ backgroundColor: backgroundColor }} border={border} disabled={disabled} bold={bold}>{text}</StyledTableCell>
    );
}
