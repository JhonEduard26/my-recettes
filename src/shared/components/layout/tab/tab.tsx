'use client'

import { usePathname } from 'next/navigation'

import styles from './tab.module.css'
import Link from 'next/link'

interface Props {
  href: string
  icon: JSX.Element
  label: string
}

export const Tab = ({ href, icon, label }: Props) => {
  const path = usePathname()

  return (
    <div>
      <Link
        className={`${styles.tab} ${path === href && styles.active}`}
        href={href}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </div>
  )
}
