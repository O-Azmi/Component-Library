import styled, { css } from 'styled-components';
import { useState } from 'react';
import type { DropDownProps } from "./DropDown.types.ts";

const StyledDropDownWrapper = styled.div`
  position:relative;
`;
const Anchor = styled.a`
  text-decoration: none;
`
const StyledDropDown = styled.button<{ disabled?: boolean }>`
  padding: 1em;
  background-color: #D9D9D9;
  color: rgb(0, 0, 0);
  width: 5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    background-color: #cfcfcf;
  }
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};

`;
const DropDownMenu = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  right: 0;
  width: 10em;
  background-color: #D9D9D9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'block' : 'none'};
  text-align: center;
`;

const DropDownItem = styled.li`
  color: black;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    box-shadow: 5px 5px 5px 0px #552d2d, inset 4px 4px 15px 0px #6a6a6a, -1px 1px 15px 2px rgba(0,0,0,0);
  }
`;

export default function DropDown({ disabled, text }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledDropDownWrapper>
      <StyledDropDown
        disabled={disabled}
        onClick={toggleMenu}
        data-testid="myDropDown"
      >
        {text}
      </StyledDropDown>
      <DropDownMenu isOpen={isOpen}>
        <Anchor><DropDownItem data-testid="myItem1">Home</DropDownItem></Anchor>
        <Anchor><DropDownItem data-testid="myItem2">Projects</DropDownItem></Anchor>
        <Anchor><DropDownItem data-testid="myItem3">Skills</DropDownItem></Anchor>
        <Anchor><DropDownItem data-testid="myItem4">Contact Us</DropDownItem></Anchor>        
      </DropDownMenu>
    </StyledDropDownWrapper>
  );
}
