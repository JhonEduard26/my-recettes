import { CategoryDB } from '@core/types/category'
import styles from './category-list.module.css'

interface Props {
  categories: CategoryDB[]
}

export const CategoryList = ({ categories = [] }: Readonly<Props>) => {
  return (
    <section className={styles.container}>
      <h3>Categorias</h3>
      <ul className={styles.categoryList} role="list">
        {categories.map((category) => (
          <li key={category.id}>
            <a className={styles.ship} href="#">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
