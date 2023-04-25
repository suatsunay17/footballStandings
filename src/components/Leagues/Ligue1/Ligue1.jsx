import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../PremierLeague/PremerLeague.module.css'

export const Ligue1 = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get('https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=61', {
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPIDKEY,
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
        })
            .then(response => {
                const teamsData = response.data.response[0].league.standings[0];
                console.log(teamsData);
                setTeams(teamsData);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className={styles.tableContainer}>
            <h1 className={styles.tableTitle}>Ligue 1 Table</h1>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tableRow}>
                        <th></th>
                        <th className={styles.tableCell + ' ' + styles.tableCellTeam}>Position</th>
                        <th className={styles.tableCell + ' ' + styles.tableCellTeam}>Team</th>
                        <th className={styles.tableCell + ' ' + styles.tableCellPoints}>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team.team.id} className={styles.tableRow}>
                            <td className={styles.tableCell}><img src={team.team.logo} alt={`${team.team.name} logo`} className={styles.tableCellLogo} /></td>
                            <td className={styles.tableCell + ' ' + styles.tableCellTeam}>{team.rank}</td>
                            <td className={styles.tableCell + ' ' + styles.tableCellTeam}><Link to={`/ligue-1/${team.team.id}`}>{team.team.name}</Link></td>
                            <td className={styles.tableCell + ' ' + styles.tableCellPoints}>{team.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
