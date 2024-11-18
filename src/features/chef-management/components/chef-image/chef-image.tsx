import styles from './chef-image.module.css'
import type{ UserDB } from '@core/types/user'

interface Props {
  chef: UserDB
}

export const ChefImage = ({ chef }: Readonly<Props>) => {
  console.log("🚀 ~ ChefImage ~ chef:", chef)
  return (
    <div className={styles.chefItem}>
      <img
        className={styles.chefImg}
        src="https://via.placeholder.com/150"
        alt="chef"
        width={80}
        height={80}
      />
      <span className={styles.chefName}>{chef.name}</span>
    </div>
  )
}
