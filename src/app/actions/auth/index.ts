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
import { initializeDb } from '@lib/sqlite/statements'
import db from '@lib/sqlite'
import type { UserDB } from '@core/types/user'

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
  await initializeDb()

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
  const hashedPassword = await bcrypt.hash(password, 10)

  const id = randomUUID()
  const data = db.prepare('INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)')
  data.run(id, name, email, hashedPassword)
  
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(id) as UserDB

  await createSession(user.id)
  redirect('/')

  return undefined
}
