'use client'

import { useActionState } from 'react'

import { Button, InputText } from '@shared/components'
import { signup } from '@actions/auth'
import styles from './register-form.module.css'

export const RegisterForm = () => {
  const [state, action, isPending] = useActionState(signup, undefined)

  return (
    <form className={styles.form} action={action}>
      <div className={styles.inputContainer}>
        <label htmlFor="names">Nombre completo</label>
        <InputText name="names" placeholder="Ej. Juan Rodríguez" />
        {state?.errors?.name && <span>{state.errors.name}</span>}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="email">Correo electrónico</label>
        <InputText name="email" placeholder="ejemplo@gmail.com" />
        {state?.errors?.email && <span>{state.errors.email}</span>}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="password">Contraseña</label>
        <InputText name="password" placeholder="**********" type="password" defaultValue="Cebolla26*" />
        {state?.errors?.password && (
          <div>
            <span>La contraseña debe contener:</span>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className={styles.checkboxContainer}>
        <label className={styles.labelContainer}>
          <input id="terms" name="terms" type="checkbox" className="" />
          Acepto los términos y condiciones
        </label>
        {state?.errors?.terms && <span>{state.errors.terms}</span>}
      </div>

      <Button type="submit" isRounded isDisabled={isPending}>
        <span>Registrarse</span>
      </Button>
    </form>
  )
}
