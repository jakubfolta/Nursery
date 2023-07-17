export interface Form {
  formFields: {
    name: {
      value: string,
      isValid: boolean,
      rules: {
        minLength: number
      }
    },
    email: {
      value: string,
      isValid: boolean,
      rules: {
        isEmail: boolean
      }
    }
  }
}