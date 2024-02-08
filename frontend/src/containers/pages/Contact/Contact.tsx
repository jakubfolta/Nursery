import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { ContactForm } from "../../../components";
import { Form } from "./interface";
import axios from "axios";
import Hero from "../../../components/Hero/Hero";
import mobileMonkey from "../../../assets/images/monkey-mobile.png";
import desktopMonkey from "../../../assets/images/monkey-desktop.png";
import { WebpageContext } from "../../../store/webpage-context";
import { ContactFormContainer, ContactFormSection, ContactFormWaveTop, StyledImage, StyledImageContainer } from "./styles";
import { ContactSection } from "./ContactSection/ContactSection";

const defaultFormState = {
  name: {
    value: '',
    isValid: false,
    isTouched: false,
    rules: {
      minLength: 2
    }
  },
  email: {
    value: '',
    isValid: false,
    isTouched: false,
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

const Contact: React.FC<{theme: string}> = props => {
  const [formState, setFormState] = useState<Form>({formFields: defaultFormState});
  const [isValidForm, setIsValidForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [message, setMessage] = useState('');
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [officeSectionHeading, setOfficeSectionHeading] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contactFormSectionHeading, setContactFormSectionHeading] = useState('');

  const contactPageContent = useContext(WebpageContext).pages['Contact'];
  const contactDetails = useContext(WebpageContext).nurseryDetails;

  useEffect(() => {
    if (contactPageContent) {
      setHeroHeading(contactPageContent.heading_1);
      setHeroDescription(contactPageContent.text_1);
      if (contactPageContent.heading_2) {
        setOfficeSectionHeading(contactPageContent.heading_2);
      }
      if (contactPageContent.heading_3) {
        setContactFormSectionHeading(contactPageContent.heading_3);
      }
    }
  }, [contactPageContent]);

  useEffect(() => {
    if (Object.keys(contactDetails).length) {
      setPhone(contactDetails.phone);
      setAddress(contactDetails.address);
      setEmail(contactDetails.email);
    }
  }, [contactDetails]);
  
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
    updatedField.isTouched = true;
    
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
      <Hero 
        theme={props.theme}
        heading={heroHeading}
        description={heroDescription}>
        <StyledImageContainer>
          <StyledImage 
            srcSet={`${mobileMonkey} 520w, ${desktopMonkey} 700w`}
            sizes="(max-width: 767px) 520px, 700px"
            src={desktopMonkey}
            alt="Malpka"
          />
        </StyledImageContainer>
      </Hero>

      {officeSectionHeading &&
        <ContactSection 
          sectionHeading={officeSectionHeading}
          phone={phone}
          address={address}
          email={email}
        />
      }

      {contactFormSectionHeading &&
        <ContactFormSection data-full>
          <ContactFormWaveTop />
          <ContactFormContainer>
            <h2>{contactFormSectionHeading}</h2>
            <ContactForm 
              onFieldChange={onChangeHandler}
              onFormSubmit={onSubmitFormHandler}
              nameValue={formState.formFields.name.value}
              emailValue={formState.formFields.email.value}
              messageValue={formState.formFields.message.value}
              isNameValid={formState.formFields.name.isValid}
              isNameTouched={formState.formFields.name.isTouched}
              isEmailValid={formState.formFields.email.isValid}
              isEmailTouched={formState.formFields.email.isTouched}
              isFormValid={isValidForm}
              isLoading={isLoading}
              showMessage={showMessage}
              isMessageSent={isMessageSent}
              message={message} 
            />
          </ContactFormContainer>
        </ContactFormSection>
      }
    </>
  );
}

export default Contact;