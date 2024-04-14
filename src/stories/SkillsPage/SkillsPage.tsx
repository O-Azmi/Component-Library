import styled, {css} from 'styled-components';
import type { SkillsPageProps } from "./SkillsPage.types.ts";
import Text from "../Text/Text.tsx"
import Table from "../Table/Table.tsx"

const StyledSection = styled.section<{disabled?: boolean}>`
height: 100vh;
background-color: #e2e2e2;
    ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3em;
`
const Wrapper = styled.div`
    text-align: center;
    padding-top: 5em;
    padding-bottom: 2em;
`

export default function SkillsPage({ disabled }: SkillsPageProps) {
    return (
    <StyledSection disabled={disabled} data-testid="mySkillsPage">
        <Wrapper>
       <Text label={'Skills'} size={'medium'} bold={'bold'} color={''}/>
       </Wrapper>
       <Container>
        <Table backgroundColor={''}/>
        </Container>
    </StyledSection>
    );
}
