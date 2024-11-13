import styles from './input-text.module.css'

interface Props {
  name: string
  placeholder?: string
  type?: 'text' | 'password'
  //TODO: REMOVE THIS AFTER
  defaultValue?: string
}

export const InputText = ({
  name,
  placeholder = '',
  type = 'text',
  defaultValue,
}: Readonly<Props>) => {
  return (
    <input
      id={name}
      name={name}
      className={styles.input}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  )
}
