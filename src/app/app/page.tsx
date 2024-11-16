import { CategoryList, PopularRecipes } from '@features/recipe-management/components'
import { getAllCategories, getPopularRecipes } from '@lib/sqlite/statements'
import styles from './page.module.css'

export default async function AppPage() {
  const categories = await getAllCategories()
  const recipes = await getPopularRecipes()

  return (
    <section className={styles.mainSection}>
      <CategoryList categories={categories} />

      <PopularRecipes popular={recipes}/>
    </section>
  )
}
