import { unstable_cache } from 'next/cache'

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

const getPageData = unstable_cache(
  async () => {
    return await Promise.all([
      getAllCategories(),
      getTopChefs(),
      getPopularRecipes(),
    ])
  },
  ['categories', 'chefs', 'recipes'],
  {
    revalidate: 3600,
    tags: ['categories', 'chefs', 'recipes'],
  },
)

export default async function AppPage() {
  const [categories, chefs, recipes] = await getPageData()
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
