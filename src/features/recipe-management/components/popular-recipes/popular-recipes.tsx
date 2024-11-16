import styles from './popular-recipes.module.css'
import { RecipeCard } from '../recipe-card/recipe-card'
import type { RecipeDB } from '@core/types/recipe'

interface Props {
  popular: RecipeDB[]
}

export const PopularRecipes = ({ popular = [] }: Readonly<Props>) => {
  return (
    <section className={styles.container}>
      <h3>Recetas populares</h3>

      <div className={styles.popularCarrousel}>
        {popular.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  )
}
