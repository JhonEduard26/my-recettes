import styles from './input-text.module.css'

interface Props {
  name: string
  placeholder?: string
  type?: 'text' | 'password'
}

export const InputText = ({
  name,
  placeholder = '',
  type = 'text',
}: Readonly<Props>) => {
  return (
    <input
      id={name}
      name={name}
      className={styles.input}
      type={type}
      placeholder={placeholder}
    />
  )
}
