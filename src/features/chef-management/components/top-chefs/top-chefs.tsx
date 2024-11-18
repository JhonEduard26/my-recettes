import { UserDB } from '@core/types/user'
import { ChefImage } from '../chef-image/chef-image'
import styles from './top-chefs.module.css'

interface Props {
  chefs: UserDB[]
}

export const TopChefs = ({ chefs = [] }: Readonly<Props>) => {
  return (
    <section className={styles.container}>
      <h3>Top Chefs</h3>
      <div className={styles.chefContainer}>
        {chefs.map((chef) => (
          <ChefImage key={chef.id} chef={chef} />
        ))}
      </div>
    </section>
  )
}
