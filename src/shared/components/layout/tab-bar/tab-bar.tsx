import { DiscoverIcon, HeartIcon, HomeIcon, UserIcon } from '@shared/icons'
import styles from './tab-bar.module.css'
import { Tab } from '../tab/tab'

export const TabBar = () => {
  const tabs = [
    {
      icon: <HomeIcon width={32} height={32} />,
      label: 'inicio',
      href: '/app',
    },
    {
      icon: <DiscoverIcon width={32} height={32} />,
      label: 'descubrir',
      href: '/app/descubrir',
    },
    {
      icon: <HeartIcon width={32} height={32} />,
      label: 'favoritas',
      href: '/app/favoritas',
    },
    {
      icon: <UserIcon width={32} height={32} />,
      label: 'perfil',
      href: '/app/perfil',
    },
  ]

  return (
    <div className={styles.tabBar}>
      {tabs.map((tab) => (
        <Tab key={tab.label} {...tab} />
      ))}
    </div>
  )
}
