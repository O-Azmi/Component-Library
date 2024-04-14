import styled, {css} from 'styled-components';
import type { FormProps } from "./Form.types.ts";
import StyledLabel from '../Label/Label.tsx';
import Button from '../Button/Button.tsx'
import TextArea from '../Textarea/Textarea.tsx'
import { useState } from 'react';
import { validateEmail, validateFullName, validateMessage, validateSubject } from './Form.lib.ts';

const StyledForm = styled.form<{$isvalid?: boolean}>`
    display:flex;
    flex-direction: column;
    
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


export default function Form({ disabled, font }: FormProps) {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false); 
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const isFullNameValid = validateFullName(fullName);
    const isEmailValid = validateEmail(email);
    const isSubjectValid = validateSubject(subject);
    const isMessageValid = validateMessage(message);

    const isValidForm = isFullNameValid && isEmailValid && isSubjectValid && isMessageValid;

    setIsValid(isValidForm);

    if (!isValidForm) {
        setIsValid(true);
    } 
};

    return (
        <StyledForm onSubmit={handleSubmit}> 
            <StyledLabel 
          font={font}
          disabled={disabled}
          isvalid= {isValid}
          label={'Full Name'}
            />
            <StyledLabel 
          font={font}
          disabled={disabled}
          isvalid= {isValid}
          label={'Email'}
            />
            <StyledLabel 
          font={font}
          disabled={disabled}
          isvalid= {isValid}
          label={'Subject'}
            />
          <TextArea disabled={disabled} isvalid={isValid} label={'Message'} font={''} cols={5} rows={3}/>
          <ValidationText isvalid={isValid}>Please enter valid form data, and then submit.</ValidationText>
          <Button disabled={disabled} label={'Submit'} backgroundColor='#3a4556'/>
        </StyledForm>
    );
}
