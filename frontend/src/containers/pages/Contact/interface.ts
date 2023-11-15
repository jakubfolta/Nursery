export interface Form {
  formFields: {
    name: {
      value: string,
      isValid: boolean,
      isTouched: boolean,
      rules: {
        minLength: number
      }
    },
    email: {
      value: string,
      isValid: boolean,
      isTouched: boolean,
      rules: {
        isEmail: boolean
      }
    },
    message: {
      value: string,
      isValid: boolean,
      rules: {}
    }
  }
}