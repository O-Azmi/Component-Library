import styled, {css} from 'styled-components';
import type { ProjectPageProps } from "./ProjectPage.types.ts";
import Text from "../Text/Text.tsx"
import ProjectsGrid from '../ProjectsGrid/ProjectsGrid.tsx';

const StyledSection = styled.section<{disabled?: boolean}>`
margin-bottom: 2em;
    ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`
const Wrapper = styled.div`
    text-align: center;
    padding-top: 5em;
    padding-bottom: 2em;
`

export default function ProjectPage({ disabled }: ProjectPageProps) {
    return (
    <StyledSection id= "ProjectPage" disabled={disabled} data-testid="myProjectPage">
        <Wrapper>
       <Text label={'My Projects'} size={'medium'} bold={'bold'} color={''}/>
       </Wrapper>
       <ProjectsGrid/>
    </StyledSection>
    );
}
