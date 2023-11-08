import { CSSProperties } from 'react';
import { FaChild } from 'react-icons/fa';
import { BsFillEnvelopePaperHeartFill } from 'react-icons/bs';
import { TbMessage2Heart } from 'react-icons/tb';
import { ButtonText, ContactFormContainer, EmailInput, FieldWrapper, Form, FormWrapper, IconWrapper, Label, ResultMessage, SubmitButton, TextArea, TextAreaLabel, TextInput } from './styles';
import DotLoader from "react-spinners/DotLoader";
import { Props } from './interfaces';

const override: CSSProperties = { position: "absolute" }

export const ContactForm: React.FC<Props> = props => (
  <ContactFormContainer>
    <FormWrapper>
      <Form onSubmit={props.onFormSubmit}>
        <FieldWrapper>
          <IconWrapper>
            <FaChild />
          </IconWrapper>
          <TextInput
            type="text"
            name="name"
            placeholder="Imię i nazwisko"
            id="name"
            autoComplete="off"
            textValid={props.isNameValid}
            value={props.nameValue}
            onChange={props.onFieldChange} />
          <Label htmlFor="name">
            Imię i nazwisko
          </Label>
        </FieldWrapper>

        <FieldWrapper>
          <IconWrapper>
            <BsFillEnvelopePaperHeartFill />
          </IconWrapper>
          <EmailInput
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            autoComplete="off"
            emailValid={props.isEmailValid}
            value={props.emailValue}
            onChange={props.onFieldChange} />
          <Label htmlFor="email">
            Email
          </Label>
        </FieldWrapper>

        <FieldWrapper>
          <IconWrapper>
            <TbMessage2Heart />
          </IconWrapper>
          <TextArea
            name="message"
            placeholder="Wiadomość do Maluszkowo..."
            id="message"
            value={props.messageValue}
            onChange={props.onFieldChange} />
          <TextAreaLabel htmlFor="message">
            Wiadomość do Maluszkowo...
          </TextAreaLabel>
        </FieldWrapper>
        {props.showMessage
          && <ResultMessage isMessageSent={props.isMessageSent}>
               {props.message}
             </ResultMessage>
        }
        <SubmitButton
          type="submit"
          isFormValid={props.isFormValid}
          disabled={!props.isFormValid || props.isLoading}>
          <DotLoader
            loading={props.isLoading}
            cssOverride={override}
            color="#fcfdfd"
            size={35}
            aria-label="Loading Spinner"
            data-testid="loader" />
          <ButtonText isLoading={props.isLoading}>
            Wyślij
          </ButtonText>
        </SubmitButton>
      </Form>
    </FormWrapper>
  </ContactFormContainer>
)