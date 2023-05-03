import React, { useEffect, useState } from "react";
import styles from "./ClubDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SerieADetails = () => {

  const { teamId } = useParams();

  const [team, setTeam] = useState({ statistics: {} });

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
      params: { league: '135', season: '2022', team: `${teamId}` },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDKEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    }
    axios.request(options).then(async function (response) {
      const data = await response.data.response;
      // console.log(response.data.response);
      setTeam(prevState => ({ ...prevState, statistics: data }));


    }).catch(function (error) {
      console.error(error);
    });
  }, [teamId]);

  return (
    <>
      {console.log(teamId)}
      {team.statistics && team.statistics.team &&
        <div className={styles.detailsContainer}>
          {console.log(team.statistics)}
          <img
            src={team.statistics.team.logo}
            alt={`${team.statistics.team.name} logo`}
            className={styles.logo}
          />
          <h2 className={styles.clubName}>{team.statistics.team.name}</h2>
          <div className={styles.info}>
            <div className={styles.fixtures}>
              <p className={styles.infoLabel}>Played:</p>
              <p className={styles.infoValue}>{team.statistics.fixtures.played.total}</p>
              <p className={styles.infoLabel}>Wins:</p>
              <p className={styles.infoValue}>{team.statistics.fixtures.wins.total}</p>
              <p className={styles.infoLabel}>Loses:</p>
              <p className={styles.infoValue}>{team.statistics.fixtures.loses.total}</p>
              <p className={styles.infoLabel}>Draws:</p>
              <p className={styles.infoValue}>{team.statistics.fixtures.draws.total}</p>
            </div>
            <div className={styles.fixtures}>
              <p className={styles.infoLabel}>Goals for: </p>
              <p className={styles.infoLabel}>Home: </p>
              <p className={styles.infoValue}>{team.statistics.goals.for.total.home}</p>
              <p className={styles.infoLabel}>Away:</p>
              <p className={styles.infoValue}>{team.statistics.goals.for.total.away}</p>
              <p className={styles.infoLabel}>Total:</p>
              <p className={styles.infoValue}>{team.statistics.goals.for.total.total}</p>
            </div>
            <div className={styles.fixtures}>
              <p className={styles.infoLabel}>Goals against: </p>
              <p className={styles.infoLabel}>Home: </p>
              <p className={styles.infoValue}>{team.statistics.goals.against.total.home}</p>
              <p className={styles.infoLabel}>Away:</p>
              <p className={styles.infoValue}>{team.statistics.goals.against.total.away}</p>
              <p className={styles.infoLabel}>Total:</p>
              <p className={styles.infoValue}>{team.statistics.goals.against.total.total}</p>
            </div>
            <div className={styles.form}>
              <p className={styles.infoLabel}>Form:</p>
              <p className={styles.infoValue}>{team.statistics.form} </p>
            </div>
          </div>
        </div>}
    </>

  );
};

