import { InputText } from '@shared/components'
import styles from './register-form.module.css'

export const RegisterForm = () => {
  return (
    <form action="" className={styles.form}>
      <div  className={styles.inputContainer}>
        <label htmlFor="">Nombre completo</label>
        <InputText placeholder="Ej. Juan Rodriguez" />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="">Correo electronico</label>
        <InputText placeholder="ejemplo@gmail.com" />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="">Contraseña</label>
        <InputText placeholder="**********" type="password" />
      </div>
    </form>
  )
}
