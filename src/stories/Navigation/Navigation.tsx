import styled, {css} from 'styled-components';
import type { NavigationProps } from "./Navigation.types.ts";
import Text from "../Text/Text.tsx"
import UnorderedList from '../UnorderedList/UnorderedList.tsx';
import { Link} from 'react-scroll';

const StyledNavigation = styled.nav<{disabled?: boolean, isvalid?: boolean}>`
  display:flex;
  width: 100%;
  height: 4em;
  align-items:center;
  padding-left: 2em;
  background-color: #d9d9d9;
  justify-content: space-between ;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box; 

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`;

export default function Navigation({disabled }: NavigationProps) {
    return (
        <StyledNavigation disabled={disabled} data-testid="myNavigation">
          <Text label={'<o/>OualidAzmi'} size={'1em'} bold={'bold'} color={''}/>
          <UnorderedList disabled={disabled}/>
        </StyledNavigation>
    );
}
