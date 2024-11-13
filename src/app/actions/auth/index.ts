'use server'


import {
  LoginFormSchema,
  LoginFormState,
  SignupFormSchema,
  SignupFormState,
} from '@lib/definitions'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const login = async (state: LoginFormState, formData: FormData) => {
  await sleep(1500)

  const validateFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    }
  }

  return undefined
}

export const signup = async (state: SignupFormState, formData: FormData) => {
  await sleep(1500)

  const validateFields = SignupFormSchema.safeParse({
    name: formData.get('names'),
    email: formData.get('email'),
    password: formData.get('password'),
    terms: formData.get('terms'),
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    }
  }

  return undefined
}
