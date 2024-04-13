import styled, {css} from 'styled-components';
import type { UnorderedListProps } from "./UnorderedList.types.ts";
import List from "../List/List.tsx"

const StyledUnorderedList = styled.ul<{disabled?: boolean, isvalid?: boolean}>`
  display:flex;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`;
const Anchor = styled.a <{disabled?: boolean, isvalid?: boolean}>`
text-decoration: none;
${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`
export default function UnorderedList({ disabled }: UnorderedListProps) {
    return (
        <StyledUnorderedList disabled ={disabled}  data-testid="myUnorderedList">
         <Anchor href="#"><List disabled ={disabled} text={'Home'}/></Anchor>
         <Anchor href="#"><List disabled ={disabled} text={'Projects'}/></Anchor>
         <Anchor href="#"><List disabled ={disabled} text={'Skills'}/></Anchor>
         <Anchor href="#"><List disabled ={disabled} text={'Contact Me'}/></Anchor>
        </StyledUnorderedList>
    );
}
