import styles from 'styles/post-header.module.css'
import ConvertDAte from 'components/convarto-date'
import { FontArticleIcon } from '@fortawesome/react-fontawesome'
import { faClock } from'@fortawesome/free-regular-svg-icons'

export default function PostHeader ({ title, subtitle, publish = '' }) {
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h1 className={styles.publish}>{title}</h1>
      {publish && (
        <div className={styles.publish}>
          <FontAwesomeIcon icon{faClock} size='lg' color='var(--gray-25)' />
          <convertDate dateISO={publish} />
          {publish}
        </div>
      )} 
    </div>
  )
}
