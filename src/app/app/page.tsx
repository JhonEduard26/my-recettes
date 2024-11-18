import {
  CategoryList,
  PopularRecipes,
} from '@features/recipe-management/components'
import {
  getAllCategories,
  getPopularRecipes,
  getTopChefs,
} from '@lib/sqlite/statements'
import { TopChefs } from '@features/chef-management/components'
import styles from './page.module.css'

export default async function AppPage() {
  const categories = await getAllCategories()
  const recipes = await getPopularRecipes()
  const chefs = await getTopChefs()

  return (
    <section className={styles.mainSection}>
      <CategoryList categories={categories} />

      <PopularRecipes popular={recipes} />

      <TopChefs chefs={chefs} />
    </section>
  )
}
