import { LoginForm } from '@features/authentication/components'
import styles from './login.module.css'

export default function LoginPage() {
  return (
    <section className={`sectionContainer ${styles.loginContainer}`}>
      <LoginForm />
    </section>
  )
}
