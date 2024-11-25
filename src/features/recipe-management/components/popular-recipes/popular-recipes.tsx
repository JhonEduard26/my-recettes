import styles from './popular-recipes.module.css'
import { RecipeCard } from '../recipe-card/recipe-card'
import type { RecipeWithUserDB } from '@core/types/recipe'
import Link from 'next/link'

interface Props {
  popular: RecipeWithUserDB[]
}

export const PopularRecipes = ({ popular = [] }: Readonly<Props>) => {
  return (
    <section>
      <div className={styles.titleContainer}>
        <h3>Recetas populares</h3>
        <Link href={'/recipes/popular'}>Ver más</Link>
      </div>

      <div className={styles.popularCarrousel}>
        {popular.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  )
}
