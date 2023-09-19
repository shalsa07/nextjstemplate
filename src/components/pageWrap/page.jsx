import styles from './page.module.css'

export const PageWrap = ({children}) => {
  return (
    <div className={styles.pageWrap}>{children}</div>
  )
}
