import { Button, InputText } from '@shared/components'
import styles from './login-form.module.css'

export const LoginForm = () => {
  return (
    <form className={`${styles.form} ${styles.card}`} action="">
      <div className={styles.titleContent}>
        <h2>Iniciar sesión</h2>
        <p>Bienvenido de vuelta</p>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="">Email</label>
        <InputText placeholder="ejemplo@gmail.com" />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="">Contraseña</label>
        <InputText placeholder="**********" type="password" />
      </div>

      <Button type="submit" isRounded>
        <span>Ingresar</span>
      </Button>
    </form>
  )
}
