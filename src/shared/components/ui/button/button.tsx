import styles from './button.module.css'

interface Props {
  children: React.ReactNode
  type: 'button' | 'submit'
  isRounded?: boolean
}

export const Button = ({ children, type, isRounded }: Props) => {
  return (
    <button className={`${styles.button} ${isRounded && styles.rounded}`} type={type}>
      {children}
    </button>
  )
}
