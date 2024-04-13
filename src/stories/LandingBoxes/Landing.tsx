import styled, {css} from 'styled-components';
import type { LandingProps } from "./Landing.types.ts";
import Text from "../Text/Text.tsx"

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 5em;
`
const StyledTextBox = styled.div<{disabled?: boolean, isvalid?: boolean}>`
  display: flex;
  flex-direction: column;
  padding-bottom: 3em;
  width: 100%;
  max-width: 35em; 
  margin-left: 12%;
  letter-spacing: .3em;
  line-height: 2em;
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`;

export default function LandingBox({disabled }: LandingProps) {
    return (
      <Container>
        <StyledTextBox disabled={disabled} data-testid="myLandingDiv">
          <Text label={'<h1>'} size={'medium'} bold={'bold'} color={'#0037ff'}/>
          <Text label={'Hey!'} size={'medium'} bold={'bold'} color={'white'}/>
          <Text label={"I'm Oualid,"} size={'medium'} bold={'bold'} color={'#0037ff'}/>
          <Text label={"Full-Stack Web Developer>"} size={'medium'} bold={'bold'} color={'white'}/>
          <Text label={"</h1>"} size={'medium'} bold={'bold'} color={'#0037ff'}/>
        </StyledTextBox>
        <StyledTextBox disabled={disabled}>
        <Text label={'<p>'} size={'medium'} bold={'bold'} color={'#0037ff'}/>
        <Text label={'I am a Full-Stack Web Developer based in Winnipeg, Manitoba, Canada. I have made several projects using clean, reusable code. I love creating eye-catching, accessible, and user-friendly websites.'} size={'medium'} bold={'bold'} color={'white'}/>
        <Text label={'</p>'} size={'medium'} bold={'bold'} color={'#0037ff'}/>
        </StyledTextBox>
      </Container>
    );
}
