import { FaChild } from 'react-icons/fa';
import { BsFillEnvelopePaperHeartFill } from 'react-icons/bs';
import { TbMessage2Heart } from 'react-icons/tb';
import { ContactFormContainer, EmailInput, FieldWrapper, Form, FormWrapper, IconWrapper, Label, SubmitButton, TextArea, TextAreaLabel, TextInput } from './styles';
import { Props } from './interfaces';

export const ContactForm: React.FC<Props> = props => (
  <ContactFormContainer>
    <FormWrapper>
      <Form
        method="post"
        // action={`https://www.flexyform.com/f/${formKey}`}
        >
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
            id="message" />
          <TextAreaLabel htmlFor="message">
            Wiadomość do Maluszkowo...
          </TextAreaLabel>
        </FieldWrapper>
        <SubmitButton
          type="submit"
          value="Wyślij"
          isFormValid={props.isFormValid}
          disabled={!props.isFormValid} />
      </Form>
    </FormWrapper>
  </ContactFormContainer>
)