import { data } from '@/data'
import styles from './page.module.css'
import Image from 'next/image'

export const UserDetails = () => {
  return (
    <div className={styles.userDetails}>
      <div className={styles.userIcons}>
        <Image fill alt='' src={data.pageUi.menu.icons}/>
      </div>
      <div className={`${styles.userIcons} ${styles.userProfile}`}>
        <Image fill alt='' src={data.pageUi.userName.icons}/>
      </div>
    </div>
  )
}
