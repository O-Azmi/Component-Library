import styled, { css } from 'styled-components';
import type { TextProps } from "./Text.types.ts";

const StyledText = styled.text<{disabled?: boolean, size: string, bold: string, underline?: boolean}>`
 font-family: 'Times New Roman', Times, serif;
 color: #3a4556;

 ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 1em;
    `};

  ${({ size }) =>
    size === 'medium' &&
    css`
    font-size: 2em;    
    `};

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 4em;
    `};

  ${({ bold }) =>
    bold === 'default' &&
    css`
      font-weight: 500;
    `};

  ${({ bold }) =>
    bold === 'bold' &&
    css`
      font-weight: 800;
    `};

    ${props =>
    props.underline &&
    css`
      border-bottom: 1px solid black;
    `};
    ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};

`;


export default function Text({ label, disabled, size, bold, underline }: TextProps) {
    return (
            <StyledText
                size={size}
                disabled={disabled}
                bold={bold}
                underline={underline}
            >
              {label}
            </StyledText>
 
    );
}
