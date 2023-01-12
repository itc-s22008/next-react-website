import styles from 'styles/two-column.module.css'

export function TwoColumn ({ children }) {
  return (
    <div className={styles.fleContainer}>
      {children}
    </div>
  )
}

export function twoColumnMain ({ children }) {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export function TwoColumnSidebar ({ children }) {
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  )
}
