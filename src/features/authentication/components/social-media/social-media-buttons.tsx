import Link from 'next/link'
import styles from './social-media.module.css'
import { FacebookIcon, GithubIcon, GoogleIcon } from '@shared/icons'

export const SocialMediaButtons = () => {
  return (
    <div className={styles.AppsContainer}>
      <div className={styles.AppTitleContainer}>
        <div></div>
        <span className={styles.AppTitle}>O ingresa con</span>
        <div></div>
      </div>
      <div className={styles.AppContainer}>
        <Link className={styles.App} href={'#'}>
          <FacebookIcon width={48} height={48} />
        </Link>
        <Link className={styles.App} href={'#'}>
          <GoogleIcon width={48} height={48} />
        </Link>
        <Link className={styles.App} href={'#'}>
          <GithubIcon width={48} height={48} />
        </Link>
      </div>
    </div>
  )
}
