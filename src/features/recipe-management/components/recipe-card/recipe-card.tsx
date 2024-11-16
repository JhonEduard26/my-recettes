import { AlarmIcon, HeartIcon, StarIcon } from '@shared/icons'
import styles from './recipe-card.module.css'
import type { RecipeDB } from '@core/types/recipe'

interface Props {
  recipe: RecipeDB
}

export const RecipeCard = ({ recipe }: Readonly<Props>) => {
  return (
    <div className={styles.popularCard}>
      <img
        className={styles.recipeImg}
        src={recipe.image_url}
        alt={`Receta de ${recipe.name}`}
      />
      <div className={styles.reviews}>
        <StarIcon width={20} height={20} />
        <span className={styles.reviewsText}> 4.8 (1k+ reviews)</span>
      </div>

      <div className={styles.favorite}>
        <HeartIcon width={24} height={24} />
      </div>

      <div className={styles.descriptionContainer}>
        <span className={styles.recipeName}>{recipe.name}</span>
        <div className={styles.recipeContainer}>
          <AlarmIcon width={20} height={20} />
          <span className={styles.recipeInfo}>{recipe.cook_time}min</span>
          <span>{recipe.difficulty}</span>
          <span>Por John Doe</span>
        </div>
      </div>
    </div>
  )
}
