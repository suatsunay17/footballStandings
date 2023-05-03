import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../PremierLeague/PremierLeague.module.css'

export const Bundesliga = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get('https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=78', {
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
            <h1 className={styles.tableTitle}>Bundesliga Table</h1>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tableRow}>
                        <th></th>
                        <th className={styles.tableCell + ' ' + styles.tableCellTeam}>Position</th>
                        <th className={styles.tableCell + ' ' + styles.tableCellTeam}>Team</th>
                        <th className={styles.tableCell + ' ' + styles.tableCellPoints}>Points</th>
                        <th className={styles.tableCell + ' ' + styles.tableCellPoints}>GD</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team.team.id} className={styles.tableRow}>
                            <td className={styles.tableCell}><img src={team.team.logo} alt={`${team.team.name} logo`} className={styles.tableCellLogo} /></td>
                            <td className={styles.tableCell + ' ' + styles.tableCellTeam}>{team.rank}</td>
                            <td className={styles.tableCell + ' ' + styles.tableCellTeam}><Link to={`/details/${team.team.id}` } state={team}>{team.team.name}</Link></td>
                            <td className={styles.tableCell + ' ' + styles.tableCellPoints}>{team.points}</td>
                            <td className={styles.tableCell + ' ' + styles.tableCellPoints}>{team.goalsDiff}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
