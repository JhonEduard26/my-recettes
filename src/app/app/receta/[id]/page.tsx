import { redirect } from 'next/navigation'

import { AlarmIcon, FireIcon, StarIcon } from '@shared/icons'
import { getPopularRecipes, getRecipeById } from '@lib/sqlite/statements'
import styles from './page.module.css'
import Image from 'next/image'

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

  const chefImage = recipe.chef_image ?? 'https://dummyimage.com/100x100'
  const recipeImg = recipe.image_url
    ? `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${recipe.image_url}`
    : 'https://dummyimage.com/320x320'

  return (
    <div>
      <Image
        className={styles.recipeImg}
        src={recipeImg}
        alt={recipe.name}
        width={320}
        height={320}
      />
      <div className={styles.recipeContainer}>
        <div className={styles.tagContainer}>
          <p>{recipe.category_name}</p>
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
