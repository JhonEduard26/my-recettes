'use client'

import { useActionState } from 'react'

import { Button, InputText } from '@shared/components'
import { login } from '@actions/auth'
import styles from './login-form.module.css'

export const LoginForm = () => {
  const [state, action, isPending] = useActionState(login, undefined)

  return (
    <form className={`${styles.form} ${styles.card}`} action={action}>
      <div className={styles.inputContainer}>
        <label htmlFor="email">Correo electrónico</label>
        <InputText name="email" placeholder="ejemplo@gmail.com" />
        {state?.errors?.email && <span>{state.errors.email}</span>}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="password">Contraseña</label>
        <InputText name="password" placeholder="**********" type="password" />
        {state?.errors?.password && (
          <div >
            <span>La contraseña debe contener:</span>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Button type="submit" isRounded isDisabled={isPending}>
        <span>Ingresar</span>
      </Button>
    </form>
  )
}
