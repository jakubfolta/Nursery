import React, { ChangeEvent, FormEvent, useState } from "react"
import { StyledHero } from "./styles"
import { ContactForm } from "../../../components";
import { Form } from "./interface";
import axios from "axios";

const defaultFormState = {
  name: {
    value: '',
    isValid: false,
    rules: {
      minLength: 2
    }
  },
  email: {
    value: '',
    isValid: false,
    rules: {
      isEmail: true
    }
  },
  message: {
    value: '',
    isValid: true,
    rules: {}
  }
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<Form>({formFields: defaultFormState});
  const [isValidForm, setIsValidForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [message, setMessage] = useState('');
  
  const checkValidity = (value: string, rules: {isEmail: boolean} | {minLength: number} | {}) => {
    let isValid = false;
    
    if ('minLength' in rules) {
      isValid = value.trim().length >= rules.minLength;
    } else {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value);
    }

    return isValid;
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const fieldType = e.target.id as keyof typeof formState.formFields;
    const fieldValue = e.target.value;
    const fieldRules = formState.formFields[fieldType].rules;
    
    let updatedFormFields = JSON.parse(JSON.stringify(formState.formFields));
    const updatedField = updatedFormFields[fieldType];
    
    if (Object.keys(fieldRules).length) {
      const isValueValid = checkValidity(fieldValue, fieldRules);
      updatedField.isValid = isValueValid;
    }
    updatedField.value = fieldValue;
    updatedFormFields = {...updatedFormFields, [fieldType]: updatedField};

    let isFormValid = true;
    for (let el in updatedFormFields) {
      isFormValid = isFormValid && updatedFormFields[el as keyof typeof formState.formFields].isValid;
    }

    setFormState({formFields: updatedFormFields});
    setIsValidForm(isFormValid);
  };

  const setSendingMessageResult = (message: string, messageSent: boolean) => {
    setIsLoading(false);
    setIsMessageSent(messageSent);
    setMessage(message);
    setShowMessage(true);
  }

  const onSubmitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowMessage(false);
    setIsLoading(true);

    const formData = {
      email: formState.formFields.email.value,
      name: formState.formFields.name.value,
      message: formState.formFields.message.value
    };

    axios.post("http://localhost:8000/send-message", formData)
      .then(result => {
        setSendingMessageResult('Wiadomość wysłana.', true);
        setFormState({formFields: defaultFormState});
        setIsValidForm(false);

        setTimeout(() => {
          setShowMessage(false);
        }, 5000);
      })
      .catch(error => {
        console.log('ERROR', error);
        setSendingMessageResult('Wystąpił błąd. Spróbuj ponownie później.', false);
      })
  }

  return (
    <>
      <StyledHero>Contact Page</StyledHero>
      <ContactForm 
        onFieldChange={onChangeHandler}
        onFormSubmit={onSubmitFormHandler}
        nameValue={formState.formFields.name.value}
        emailValue={formState.formFields.email.value}
        messageValue={formState.formFields.message.value}
        isNameValid={formState.formFields.name.isValid}
        isEmailValid={formState.formFields.email.isValid}
        isFormValid={isValidForm}
        isLoading={isLoading}
        showMessage={showMessage}
        isMessageSent={isMessageSent}
        message={message} />
    </>
  );
}

export default Contact;