import styles from './input-text.module.css'

interface Props {
  placeholder?: string
  type?: 'text' | 'password'
}

export const InputText = ({ placeholder = '', type = 'text' }: Props) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  )
}
