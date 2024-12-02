import { DishCoverIcon, PlusIcon } from '@shared/icons'
import styles from './dialog-new-recipe.module.css'
import Link from 'next/link'

export const DialogNewRecipe = () => {
  return (
    <dialog className={styles.dialog} id="dialog" modal-mode="mega">
      <form className={styles.form} method="dialog">
        <Link href="/app/crear" className={styles.itemContainer}>
          Crear receta
          <span>
            <DishCoverIcon width={24} height={24} />
          </span>
        </Link>
        <button className={styles.buttonDialog}>
          <PlusIcon width={24} height={24} />
        </button>
      </form>
    </dialog>
  )
}
