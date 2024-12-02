'use client'

import { PlusIcon } from '@shared/icons'
import styles from './fab.module.css'

export const Fab = () => {
  const onClick = () => {
    const dialog = document.getElementById('dialog') as HTMLDialogElement
    dialog?.showModal()
  }

  return (
    <button className={styles.fabButton} onClick={() => onClick()}>
      <PlusIcon width={24} height={24} />
    </button>
  )
}
