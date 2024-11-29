import {
  CategoryList,
  PopularRecipes,
} from '@features/recipe-management/components'
import {
  getAllCategories,
  getCurrentUser,
  getPopularRecipes,
  getTopChefs,
} from '@lib/sqlite/statements'
import { Header } from '@shared/components'
import { TopChefs } from '@features/chef-management/components'
import styles from './page.module.css'

const promiseCategories = getAllCategories()
const promiseChefs = getTopChefs()
const promiseRecipes = getPopularRecipes()

const [categories, chefs, recipes] = await Promise.all([
  promiseCategories,
  promiseChefs,
  promiseRecipes,
])

export default async function AppPage() {
  const currentUser = await getCurrentUser()

  return (
    <>
      <Header currentUser={currentUser} />

      <section className={styles.mainSection}>
        <CategoryList categories={categories} />
        <PopularRecipes popular={recipes} />
        <TopChefs chefs={chefs} />
      </section>
    </>
  )
}
