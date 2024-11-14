import { CategoryList } from '@features/recipe-management/components'
import styles from './page.module.css'
import { getAllCategories } from '@lib/sqlite/statements'

export default async function AppPage() {
  const categories = await getAllCategories()

  return (
    <section className={styles.mainSection}>
      <CategoryList categories={categories} />
    </section>
  )
}
