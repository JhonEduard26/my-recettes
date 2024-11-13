import { z } from 'zod'

export const LoginFormSchema = z.object({
  email: z.string().email('El correo electrónico no es válido').trim(),
  password: z
    .string()
    .min(8, 'Al menos 8 caracteres')
    .regex(/[a-zA-Z]/, { message: 'Al menos una letra.' })
    .regex(/[0-9]/, { message: 'Al menos un número.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Al menos un caracter especial.',
    })
    .trim(),
})

export type LoginFormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .trim(),
  email: z.string().email('El correo electrónico no es válido').trim(),
  password: z
    .string()
    .min(8, 'Al menos 8 caracteres')
    .regex(/[a-zA-Z]/, { message: 'Al menos una letra.' })
    .regex(/[0-9]/, { message: 'Al menos un número.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Al menos un caracter especial.',
    })
    .trim(),
  terms: z
    .string({ message: 'Debes aceptar los términos y condiciones' })
    .transform((val) => val === 'on'),
})

export type SignupFormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
        terms?: string[]
      }
      message?: string
    }
  | undefined

export type SessionPayload = {
  userId: string
  expiresAt: Date
}
