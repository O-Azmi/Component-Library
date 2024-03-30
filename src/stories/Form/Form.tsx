import styled, {css} from 'styled-components';
import type { FormProps } from "./Form.types.ts";
import StyledLabel from '../Label/Label.tsx';
import Button from '../Button/Button.tsx'
import TextArea from '../Textarea/Textarea.tsx'

const StyledForm = styled.form<{$isvalid?: boolean}>`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;

`
const ValidationText = styled.span<{isvalid?: boolean}>`
  display: none;
  color: red;
  margin-bottom: 1em;
  ${props =>
    props.isvalid &&
    css`
      display:block;
    `};
`
export default function Form({ disabled, font, isvalid }: FormProps) {
    return (
        <StyledForm>
            <StyledLabel 
          font={font}
          disabled={disabled}
          isvalid= {isvalid}
          label={'Full Name'}
            />
            <StyledLabel 
          font={font}
          disabled={disabled}
          isvalid= {isvalid}
          label={'Email'}
            />
            <StyledLabel 
          font={font}
          disabled={disabled}
          isvalid= {isvalid}
          label={'Subject'}
            />
          <TextArea disabled={disabled} isvalid={isvalid} label={'Message'} font={''} cols={5} rows={3}/>
          <ValidationText isvalid={isvalid}>Please enter valid form data, and then submit.</ValidationText>
          <Button disabled={disabled} label={'Submit'} backgroundColor='#3a4556'/>
        </StyledForm>
    );
}
