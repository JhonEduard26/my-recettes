import Link from 'next/link'

import { CategoryDB } from '@core/types/category'
import { CategoryList } from '@features/recipe-management/components'
import styles from './categories.module.css'

interface Props {
  categories: CategoryDB[]
}

export const CategorySection = ({ categories = [] }: Readonly<Props>) => {
  return (
    <section>
      <div className={styles.titleContainer}>
        <h3>Categorias</h3>
        <Link href={'/categorias'}>Ver más</Link>
      </div>

      <CategoryList categories={categories} />
    </section>
  )
}
