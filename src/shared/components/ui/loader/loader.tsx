import LogoIcon from '@shared/icons/Logo'
import styles from './loader.module.css'

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderContainer}>
        <div>
          <LogoIcon />
          <span className={styles.loaderTitle}>My Recettes</span>
        </div>
        <span className={styles.loaderSpinner}></span>
      </div>
    </div>
  )
}
