import { data } from '@/data'
import styles from './page.module.css'
import Link from 'next/link'
import { UserDetails } from '../userDetails/page'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarWrap}>
        <div className={styles.navbarSearch}>
          <input className={styles.navbarSearchInput} type="serach" placeholder='search'/>
        </div>
        <div className={styles.navbarLogo}>luyaridesigns</div>
        <div className={styles.navbarUserSettings}>
          <div className={styles.navbarLinks}>{data.links.map((item)=><Link href={item.href} className='link'>{item.name}</Link>)}</div>
          <div className={styles.navbarUserSettings}>
            <div></div>
            <UserDetails/>
          </div>
        </div>
      </div>
    </div>
  )
}
