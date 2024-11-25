'use server'


import { randomUUID } from 'crypto'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'

import {
  LoginFormSchema,
  LoginFormState,
  SignupFormSchema,
  SignupFormState,
} from '@lib/definitions'
import { createSession } from '@lib/session'
import { createUser, getUserByEmail } from '@lib/sqlite/statements'
import type { UserDB } from '@core/types/user'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const login = async (state: LoginFormState, formData: FormData) => {
  await sleep(1000)

  const validateFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    }
  }

  const { email, password } = validateFields.data

  const user = await getUserByEmail(email)

  if (!user) {
    return {
      errorMessage: 'Credenciales incorrectas',
    }
  }

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) {
    return {
      errorMessage: 'Credenciales incorrectas',
    }
  }

  await createSession(user.id)
  redirect('/app')
}

export const signup = async (state: SignupFormState, formData: FormData) => {
  await sleep(1000)

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

  const { name, email, password } = validateFields.data

  const user: UserDB = {
    id: randomUUID(),
    name,
    email,
    password: await bcrypt.hash(password, 10),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  await createUser(user)
  await createSession(user.id)
  redirect('/app')
}
