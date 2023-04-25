import React from 'react'
import styles from './Home.module.css'
import { Available } from './Available'

export const Home = () => {
  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.title}>Stay up-to-date with the latest football standings</h1>
        <h2 className={styles.subtitle}>Never miss a match or a goal with our comprehensive standings app</h2>
      </div>
      <Available/>
    </div>
  )
}
