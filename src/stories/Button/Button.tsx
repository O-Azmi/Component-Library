import styled, { css } from 'styled-components';
import type { ButtonProps } from "./Button.types.ts";

const StyledButton = styled.button<{ size?: string, disabled?: boolean, secondary?: boolean }>`
  width: 8em;
  color: white;
  padding: 1em;
  border: 1px solid white;
  border-radius: 20px;
  margin-left: 1em;
  font-weight: 500;
  
  ${({ size }) =>
    size === 'small' &&
    css`
      width: 6em;
    `};

  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 8em;
    `};

  ${({ size }) =>
    size === 'large' &&
    css`
      width: 10em;
    `};

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};

    ${props =>
    props.secondary &&
    css`
      color: black;
    `};
`;

export default function Button({ backgroundColor, label, size, disabled, onClick, secondary }: ButtonProps) {
  return (
    <StyledButton
      size={size}
      style={{ backgroundColor: backgroundColor }}
      disabled={disabled}
      onClick={onClick}
      secondary={secondary}
    >
      {label}
    </StyledButton>
  );
}

