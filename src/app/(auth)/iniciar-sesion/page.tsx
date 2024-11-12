import Link from 'next/link'

import { LoginForm, SocialMediaButtons } from '@features/authentication/components'
import styles from './login.module.css'

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.title}>
        <h2>Iniciar sesión</h2>
        <p>Bienvenido de vuelta</p>
      </div>
      <LoginForm />
      <SocialMediaButtons />
      <span className={styles.ancle}>
        ¿No tienes cuenta? <Link href="/registrarse">Registrate</Link>
      </span>
    </div>
  )
}
