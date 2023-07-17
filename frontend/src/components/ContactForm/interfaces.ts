import { ChangeEvent } from "react";

export interface Props {
  nameValue: string;
  emailValue: string;
  isNameValid: boolean;
  isEmailValid: boolean;
  isFormValid: boolean;
  onFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
}