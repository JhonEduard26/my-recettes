import { TabsInfo } from '@features/chef-management/components'
import styles from './page.module.css'
import { getAllCategories, getPopularRecipes } from '@lib/sqlite/statements'

const categories = await getAllCategories()
const recipes = await getPopularRecipes()

export default async function PerfilPage() {
  return (
    <section className={styles.mainContainer}>
      <img
        className={styles.portraitImg}
        src="https://dummyimage.com/500x250"
        alt="Imagen de portada del chef"
        width={500}
      />

      <div className={styles.container}>
        <img
          className={styles.profileImg}
          src="https://dummyimage.com/100x100"
          alt="Imagen de perfil del chef"
          width={100}
          height={100}
        />
        <h2>Jane Doe</h2>
        <span className={styles.role}>Chef</span>
        <div className={styles.counterInfo}>
          <div className={styles.counterItem}>
            <span className={styles.counterNumber}>24</span>
            <span>Recetas</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.counterItem}>
            <span className={styles.counterNumber}>22.5K</span>
            <span>Seguidores</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.counterItem}>
            <span className={styles.counterNumber}>132</span>
            <span>Siguiendo</span>
          </div>
        </div>
      </div>

      <TabsInfo categories={categories} recipes={recipes} />
    </section>
  )
}
