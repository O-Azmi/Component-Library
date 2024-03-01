import styled, { css } from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';


const RadioInput = styled.input.attrs({ type: 'radio' })<RadioButtonProps>`
  margin: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  appearance: none;

  &:after {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid #3a4556;
    transition: background-color 0.2s ease, border-color 0.2s ease; 
  }

  &:checked:after {
    background-color: #79879c;
    border-color: #030c18;
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};

`;

export default function RadioButton({disabled}: RadioButtonProps) {
  return (
    <>
      <RadioInput  disabled={disabled}/>
    </>
  );
};
