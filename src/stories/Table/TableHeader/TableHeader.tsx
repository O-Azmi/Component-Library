import styled, { css } from 'styled-components';

import { TableHeaderProps } from './TableHeader.types';
const StyledTableHeader = styled.th<{disabled?: boolean; border: string,width?: string; height?: string }>`
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
`;

export default function TableHeader({ width, height, disabled, backgroundColor, border, text }: TableHeaderProps) {
    return (
        <StyledTableHeader data-testid="myTableHeader" width={width} height={height}  style={{ backgroundColor: backgroundColor }} border={border} disabled={disabled}>{text}</StyledTableHeader>
    );
}
