import styles from './button-outline.module.css'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit'
  isRounded?: boolean
  isDisabled?: boolean
}

export const ButtonOutline = ({
  children,
  isDisabled = false,
  isRounded = false,
  type = 'button',
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
