import { data } from '@/data'
import styles from './page.module.css'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrap}>
        <div className={styles.footerCopyright}>copyright</div>
        <div className={styles.footerSocials}>socials</div>
        <div className={styles.footerLinks}>
          {data.links.map((item)=><Link href={item.href} className='link'>{item.name}</Link>)}
        </div>
      </div>
    </div>
  )
}
