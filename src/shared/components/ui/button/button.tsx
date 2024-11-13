import styles from './button.module.css'

interface Props {
  children: React.ReactNode
  type: 'button' | 'submit'
  isRounded?: boolean
  isDisabled?: boolean
}

export const Button = ({
  children,
  type,
  isRounded,
  isDisabled = false,
}: Props) => {
  return (
    <button
      className={`${styles.button} ${isRounded && styles.rounded}`}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
