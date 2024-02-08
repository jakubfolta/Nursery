import styled, { css } from "styled-components"

export const ContactFormContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: center;
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-contact-text);
  width: 100%;
  max-width: 640px;
  padding: 1rem 0;
`

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;

  & > *:not(:first-child) { margin-top: 3rem; }
`

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: var(--big-font-size);
  font-weight: 600;
`

export const IconWrapper = styled.span`
  position: absolute;
  left: .5rem;
  font-size: var(--xl-font-size);
`

const textEmailInput = css`
  border: none;
  border-bottom: 3px solid var(--color-contact-text);
  transition: border-color .3s;

  &:placeholder-shown + label { opacity: 0; }
  &:not(:placeholder-shown) + label {
    font-size: var(--default-font-size);
    font-weight: normal;
    transform: translateY(3.3rem);
    opacity: 1;
  }
`

const input = css`
  width: 100%;
  background-color: transparent;
  font-family: inherit;
  font-size: var(--big-font-size);
  font-weight: 600;
  color: var(--color-contact-text);
  padding: 1rem 4rem;
  cursor: pointer;

  &:focus { outline: none; }
  &::placeholder { color: var(--color-form-placeholder); }
`

export const TextInput = styled.input<{textValid: boolean, textTouched: boolean}>`
  ${input}
  ${textEmailInput}
  border-color: ${props => !props.textTouched ? '' : props.textValid ? 'var(--color-accent)' : 'var(--color-warning)'};
`

export const EmailInput = styled.input<{emailValid: boolean, emailTouched: boolean}>`
  ${input}
  ${textEmailInput}
  border-color: ${props => !props.emailTouched ? '' : props.emailValid ? 'var(--color-accent)' : 'var(--color-warning)'};
`

export const TextArea = styled.textarea`
  ${input}
  border: 3px solid var(--color-contact-text);
  border-radius: 5px;
  height: 12rem;
  resize: none;
`

export const Label = styled.label`
  position: absolute;
  left: 4rem;
  color: var(--color-form-placeholder);
  cursor: pointer;
  transition: all .3s;
`

export const TextAreaLabel = styled.label`
  position: absolute;
  left: 4rem;
  font-size: var(--default-font-size);
  transform: translateY(7.3rem);
  opacity: 0;
`

export const SubmitButton = styled.button<{isFormValid: boolean}>`
  position: relative;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 1rem 2rem;
  background-color: var(--color-accent-4);
  border: 3px solid;
  border-color: ${props => props.isFormValid ? 'var(--color-accent)' : 'var(--color-contact-invalid)'};
  border-radius: 5px;
  font-size: var(--xl-font-size);
  letter-spacing: 3px;
  font-weight: bold;
  color: ${props => props.isFormValid ? 'var(--color-contact-text)' : 'var(--color-contact-invalid)'};
  cursor: ${props => props.isFormValid ? 'pointer' : 'not-allowed'};
  transition: all .3s;

  @media only screen and (min-width: 1024px) { width: 60%; }
`

export const ButtonText = styled.span<{isLoading: boolean}>`
  opacity: ${props => props.isLoading ? 0 : 1};
`

export const ResultMessage = styled.span<{isMessageSent: boolean}>`
  position: absolute;
  bottom: 6rem;
  align-self: center;
  font-size: var(--small-font-size);
  font-weight: bold;
  letter-spacing: 1px;
  color: ${props => props.isMessageSent ? 'var(--color-accent)' : 'var(--color-warning)'};
`