import styles from 'styles/post-header.module.css'
import { FontArticleIcon } frpm '@fortawesome/react-fontawesome'
import { faClock } from'@fortawesome/free-regular-svg-icons'

export default function PostHeader ({ title, subtitle, publish = '' }) {
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h1 className={styles.publish}>{title}</h1>
      {publish && (
        <div className={styles.publish}>
          <FontAsesomeIcon icon{faClock} size='lg' color='var(--gray-25)' />
          {publish}
        </div>
      )} 
    </div>
  )
}
