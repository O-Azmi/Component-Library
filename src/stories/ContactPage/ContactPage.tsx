import styled, {css} from 'styled-components';
import type { ContactPageProps } from "./ContactPage.types.ts";
import Text from "../Text/Text.tsx"
import Form from '../Form/Form.tsx';
import Contact from "../ContactInformation/Contact.tsx"

const StyledSection = styled.footer<{disabled?: boolean}>`
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
const WrapperTwo = styled.div`
    text-align: center;
    margin-bottom: 7em;
`

export default function ContactPage({ disabled }: ContactPageProps) {
    return (
    <StyledSection disabled={disabled} data-testid="myContactPage">
        <Wrapper>
       <Text label={'Contact Me'} size={'medium'} bold={'bold'} color={''}/>
       </Wrapper>
       <WrapperTwo>
       <Text label={'Get in Touch with me'} size={'medium'} bold={'bold'} color={''}/>
       </WrapperTwo>
       <Container>
        <Contact/>
        <Form disabled={disabled} label={''} font={''}/>
        </Container>
    </StyledSection>
    );
}
