import { BellIcon } from '@shared/icons'
import styles from './header.module.css'
import { SearchInput } from '@shared/components'

export const Header = () => {
  return (
    <section className={styles.headerBg}>
      <div className={styles.headerInfoContainer}>
        <img
          className={styles.headerProfileImg}
          src="https://cdn.pixabay.com/photo/2024/02/23/23/58/dog-8593014_1280.jpg"
          alt="logo"
          width={52}
          height={52}
        />
        <div className={styles.headerWelcomeText}>
          <span className={styles.headerName}>Hola, user!</span>
          <span className={styles.headerDescription}>
            ¿Qué deseas hacer hoy?
          </span>
        </div>

        <button className={styles.headerButton}>
          <BellIcon width={24} height={24} />
        </button>
        {/* Icon bell */}
      </div>

      <SearchInput />
    </section>
  )
}
