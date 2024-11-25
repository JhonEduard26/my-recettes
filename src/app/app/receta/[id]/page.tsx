import { redirect } from 'next/navigation'

import { AlarmIcon, FireIcon, StarIcon } from '@shared/icons'
import { getPopularRecipes, getRecipeById } from '@lib/sqlite/statements'
import styles from './page.module.css'

export async function generateStaticParams() {
  const recipes = await getPopularRecipes()

  return recipes.map((recipe) => ({
    id: recipe.id,
  }))
}

export default async function RecetaPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const recipe = await getRecipeById(id)

  if (!recipe) {
    redirect('/404')
  }

  const chefImage = recipe.chef_image ?? 'https://via.placeholder.com/100'

  return (
    <div>
      <img className={styles.recipeImg} src={recipe.image_url} alt={recipe.name} />
      <div className={styles.recipeContainer}>
        <div className={styles.tagContainer}>
          <p>Categoria</p>
          <div className={styles.iconContainer}>
            <StarIcon width={20} height={20} /> <span>{recipe.review_avg}</span>
          </div>
        </div>

        <div className={styles.infoContainer}>
          <h1>{recipe.name}</h1>
          <p className={styles.infoCreated}>Creado por:</p>

          <div className={styles.userInfoContainer}>
            <img
              className={styles.userImage}
              src={chefImage}
              alt={recipe.chef_name}
              width={72}
              height={72}
            />
            <div className={styles.userInfo}>
              <h2>{recipe.chef_name}</h2>
              <span>Role</span>
            </div>
          </div>

          <div>
            <h3>Descripción</h3>
            <p>{recipe.description}</p>

            <div className={styles.iconsContainer}>
              <div className={styles.iconItem}>
                <AlarmIcon width={24} height={24} />
                <div className={styles.iconText}>
                  <span className={styles.timeText}>Tiempo de cocción</span>
                  <span>{recipe.cook_time}min</span>
                </div>
              </div>
              <div className={styles.iconItem}>
                <FireIcon width={24} height={24} />
                <div className={styles.iconText}>
                  <span className={styles.timeText}>Dificultad</span>
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
