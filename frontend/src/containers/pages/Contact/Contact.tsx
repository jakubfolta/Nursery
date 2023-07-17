import React, { ChangeEvent, useState } from "react"
import { StyledHero } from "./styles"
import { ContactForm } from "../../../components";
import { Form } from "./interface";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<Form>({
    formFields: {
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
      }
    }
  });
  const [isValidForm, setIsValidForm] = useState(false);

  const checkValidity = (value: string, rules: {isEmail: boolean} | {minLength: number}) => {
    let isValid = false;
    
    if ('minLength' in rules) {
      isValid = value.trim().length >= rules.minLength;
    } else {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value);
    }

    return isValid;
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldType = e.target.id as keyof typeof formState.formFields;
    const fieldValue = e.target.value;
    const fieldRules = formState.formFields[fieldType].rules;
    const isValueValid = checkValidity(fieldValue, fieldRules);

    let updatedFormFields = {...formState.formFields};
    const updatedField = updatedFormFields[fieldType];

    updatedField.value = fieldValue;
    updatedField.isValid = isValueValid;
    updatedFormFields = {...updatedFormFields, [fieldType]: updatedField};

    let isFormValid = true;
    for (let el in updatedFormFields) {
      isFormValid = isFormValid && updatedFormFields[el as keyof typeof formState.formFields].isValid;
    }

    setFormState({formFields: updatedFormFields});
    setIsValidForm(isFormValid);
  }

  return (
    <>
      <StyledHero>Contact Page</StyledHero>
      <ContactForm 
        onFieldChange={onChangeHandler}
        nameValue={formState.formFields.name.value}
        isNameValid={formState.formFields.name.isValid}
        isEmailValid={formState.formFields.email.isValid}
        isFormValid={isValidForm}
        emailValue={formState.formFields.email.value} />
    </>
  );
}

export default Contact;