import React from 'react'
import styles from './Available.module.css'
import { Link } from 'react-router-dom'

export const Available = () => {
    return (
        <div>
            <h1 className={styles.header}>Available Leagues</h1>

            <div className={styles.row}>
                <div className={styles.columnPrem}>
                    <div className={styles.card} >
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png" alt="" />
                        <h3><Link to={'/premier-league'}>Premier League</Link></h3>
                    </div>
                </div>
                <div className={styles.columnLaLiga}>
                    <div className={styles.card}>
                        <img src="https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg" alt="" />
                        <h3><Link to={'/la-liga'}>La Liga</Link></h3>
                    </div>
                </div>
                <div className={styles.columnBundesliga}>
                    <div className={styles.card}>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" alt="" />
                        <h3><Link to={'/bundesliga'}>Bundesliga</Link></h3>
                    </div>
                </div>
                <div className={styles.columnSerieA}>
                    <div className={styles.card}>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png" alt="" />
                        <h3><Link to={'/serie-a'}>Serie A</Link></h3>
                    </div>
                </div>
                <div className={styles.columnLigue1}>
                    <div className={styles.card}>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png" alt="" />
                        <h3><Link to={'/ligue-1'}>Ligue 1</Link></h3>
                    </div>
                </div>
            </div>

        </div>
    )
}
