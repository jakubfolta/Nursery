import { ChangeEvent, FormEvent } from "react";

export interface Props {
  nameValue: string;
  emailValue: string;
  messageValue: string;
  isNameValid: boolean;
  isNameTouched: boolean;
  isEmailValid: boolean;
  isEmailTouched: boolean;
  isFormValid: boolean;
  isLoading: boolean;
  showMessage: boolean;
  message: string;
  isMessageSent: boolean;
  onFieldChange: (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void;
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
}