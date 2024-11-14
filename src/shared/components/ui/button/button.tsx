import styles from './button.module.css'

interface Props {
  children: React.ReactNode
  isDisabled?: boolean
  isRounded?: boolean
  type?: 'button' | 'submit'
}

export const Button = ({
  children,
  type = 'button',
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
