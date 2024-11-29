import styles from './chef-image.module.css'
import type{ UserDB } from '@core/types/user'

interface Props {
  chef: UserDB
}

export const ChefImage = ({ chef }: Readonly<Props>) => {
  return (
    <div className={styles.chefItem}>
      <img
        className={styles.chefImg}
        src="https://dummyimage.com/150x150"
        alt="chef"
        width={80}
        height={80}
      />
      <span className={styles.chefName}>{chef.name}</span>
    </div>
  )
}
