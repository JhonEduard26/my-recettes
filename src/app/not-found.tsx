import Image from 'next/image'
import Link from 'next/link'

import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/not-found-img.webp"
        alt="Not found"
        width={300}
        height={300}
      />
      <h2>Error 404</h2>
      <p>No encontramos lo que buscabas</p>
      <Link href="/" className={styles.link}>
        Volver al inicio
      </Link>
    </div>
  )
}
