import Link from 'next/link'

import { AlarmIcon, HeartIcon, StarIcon } from '@shared/icons'
import styles from './recipe-card.module.css'
import type { RecipeWithUserDB } from '@core/types/recipe'

interface Props {
  recipe: RecipeWithUserDB
}

export const RecipeCard = ({ recipe }: Readonly<Props>) => {
  return (
    <Link className={styles.popularCard} href={`/app/receta/${recipe.id}`}>
      <img
        className={styles.recipeImg}
        src={recipe.image_url}
        alt={`Receta de ${recipe.name}`}
      />
      <div className={styles.reviews}>
        <StarIcon width={20} height={20} />
        <span className={styles.reviewsText}>
          {recipe.review_avg}{' '}
          {recipe.review_count === 0
            ? '(sin reseñas)'
            : recipe.review_count > 1
              ? `(${recipe.review_count} reseñas)`
              : `(${recipe.review_count} reseña)`}
        </span>
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
          <span>Por {recipe.chef_name}</span>
        </div>
      </div>
    </Link>
  )
}
