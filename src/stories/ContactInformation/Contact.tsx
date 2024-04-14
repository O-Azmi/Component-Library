import styled, {css} from 'styled-components';
import type { ContactProps } from "./Contact.types.ts";
import Image from "../Image/Image.tsx"

const Container = styled.div<{disabled?: boolean}>`
    margin-top: 1em;
    display:flex;
    flex-direction: column;
    padding-right: 13em;
    ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`

const TextL = styled.div<{disabled?: boolean}>`
  display: flex;
  align-items: center; 
  justify-content:center;
  font-family: 'Roboto', Times, serif;
  padding: 1em;
  background-color: #e9e9e9;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 1em;
`

const TextContent = styled.span`
  margin-left: 0.5em;
`

export default function Contact({disabled }: ContactProps) {
    return (
        <Container data-testid="myContact" disabled={disabled}>
            <TextL>
                <Image alt={''} width={'30px'} src={'../Images/Phone.png'}/>
                <TextContent>(431)-564-8852</TextContent>
            </TextL>
            <TextL>
                <Image alt={''} width={'30px'} src={'../Images/email.png'}/>
                <TextContent>Azmi@gmail.com</TextContent>
            </TextL>
            <TextL>
                <Image alt={''} width={'30px'} src={'../Images/Location.png'}/>
                <TextContent>Winnipeg, Canada</TextContent>
            </TextL>
            <TextL>
                <Image alt={''} width={'30px'} src={'../Images/Github.png'}/>
                <TextContent>www.github.com/Walid</TextContent>
            </TextL>
        </Container>
    );
}
