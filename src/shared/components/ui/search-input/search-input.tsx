import { SearchIcon } from '@shared/icons'
import styles from './search-input.module.css'

export const SearchInput = () => {
  return (
    <div className={styles.container}>
      <SearchIcon width={24} height={24} />
      <input className={styles.input} type="text" placeholder="Busca una receta" />
    </div>
  )
}
