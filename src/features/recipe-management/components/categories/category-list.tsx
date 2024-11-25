import { CategoryDB } from '@core/types/category'
import styles from './category-list.module.css'
import Link from 'next/link'

interface Props {
  categories: CategoryDB[]
}

export const CategoryList = ({ categories = [] }: Readonly<Props>) => {
  return (
    <section>
      <div className={styles.titleContainer}>
        <h3>Categorias</h3>
        <Link href={'/categorias'}>Ver más</Link>
      </div>
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
