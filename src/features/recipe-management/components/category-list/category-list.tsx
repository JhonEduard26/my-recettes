import styles from './category-list.module.css'
import type { CategoryDB } from '@core/types/category'

interface Props {
  categories: CategoryDB[]
}

export const CategoryList = ({ categories = [] }: Readonly<Props>) => {
  return (
    <ul className={styles.categoryList} role="list">
      {categories.map((category) => (
        <li key={category.id}>
          <a className={styles.ship} href="#">
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
