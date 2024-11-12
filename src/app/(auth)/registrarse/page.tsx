import Link from 'next/link'

import {
  RegisterForm,
  SocialMediaButtons,
} from '@features/authentication/components'
import styles from './register.module.css'

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Crea una cuenta</h2>
        <p>
          Completa el siguiente formulario o registrate con tu red social
          preferida
        </p>
      </div>
      <RegisterForm />

      <SocialMediaButtons />

      <span className={styles.ancle}>
        ¿Ya tienes cuenta? <Link href="/iniciar-sesion">Iniciar sesión</Link>
      </span>
    </div>
  )
}
