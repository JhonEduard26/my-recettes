'use client'

import { useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'

import styles from './tabs-info.module.css'
import {
  CategoryList,
  RecipeCard,
} from '@features/recipe-management/components'
import type { CategoryDB } from '@core/types/category'
import type { RecipeWithUserDB } from '@core/types/recipe'

interface Props {
  categories: CategoryDB[]
  recipes: RecipeWithUserDB[]
}

export const TabsInfo = ({
  categories = [],
  recipes = [],
}: Readonly<Props>) => {
  const searchParams = useSearchParams()
  const tab = searchParams.get('tab')

  return (
    <div className={styles.tabsContainer}>
      <ul className={styles.tabsList} role="list">
        <li>
          <Link
            href="/app/perfil"
            className={clsx(styles.tab, {
              [styles.active]: tab === null,
            })}
            aria-current="page"
          >
            Recetas
          </Link>
        </li>
        <li>
          <Link
            href={{ query: { tab: 'biografia' } }}
            className={clsx(styles.tab, {
              [styles.active]: tab === 'biografia',
            })}
          >
            Biografia
          </Link>
        </li>
        <li>
          <Link
            href={{ query: { tab: 'resenas' } }}
            className={clsx(styles.tab, {
              [styles.active]: tab === 'resenas',
            })}
          >
            Reseñas
          </Link>
        </li>
      </ul>

      <div className={styles.tabContent}>
        {tab === null && (
          <div>
            <h3>
              Recetas{' '}
              <span className={styles.accentSpan}>({recipes.length ?? 0})</span>
            </h3>
            <CategoryList categories={categories} />
            <div className={styles.tabRecipes}>
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        )}
        {tab === 'biografia' && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            venenatis, nunc in tincidunt fermentum, nunc odio luctus purus, nec
            vol
          </p>
        )}
        {tab === 'resenas' && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            venenatis, nunc in tincidunt fermentum, nunc odio luctus purus, nec
            vol
          </p>
        )}
      </div>
    </div>
  )
}
