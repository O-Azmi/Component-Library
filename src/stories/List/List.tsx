import styled, {css} from 'styled-components';
import type { ListProps } from "./List.types.ts";


const StyledList = styled.li<{disabled?: boolean, isvalid?: boolean, text:string}>`
  list-style: none;
  padding-right: 1.3em;
  font-weight: bold;
  color: #3a4556;

  ${props =>
    !props.disabled &&
    css`
      ;&:hover {
   text-decoration: 1px solid underline;
  }
    `}
  
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`;

export default function List({disabled, text }: ListProps) {
    return (
        <StyledList disabled={disabled} text={text} data-testid="myList">
          {text}
        </StyledList>
    );
}
