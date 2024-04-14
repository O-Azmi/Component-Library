import styled, {css} from 'styled-components';
import type { UnorderedListProps } from "./UnorderedList.types.ts";
import List from "../List/List.tsx"
import { Link} from 'react-scroll';

const StyledUnorderedList = styled.ul<{disabled?: boolean, isvalid?: boolean}>`
  display:flex;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`;

export default function UnorderedList({ disabled }: UnorderedListProps) {
    return (
        <StyledUnorderedList disabled ={disabled}  data-testid="myUnorderedList">
         <Link to="LandingPage" spy={true} smooth={true} offset={50} duration={500}><List disabled ={disabled} text={'Home'}/></Link>
         <Link to="ProjectPage" spy={true} smooth={true} offset={50} duration={500}><List disabled ={disabled} text={'Projects'}/></Link>
         <Link to="SkillsPage"  spy={true} smooth={true} offset={0} duration={500}><List disabled ={disabled} text={'Skills'}/></Link>
         <Link to="ContactPage" spy={true} smooth={true} offset={50} duration={500}><List disabled ={disabled} text={'Contact Me'}/></Link>
        </StyledUnorderedList>
    );
}

