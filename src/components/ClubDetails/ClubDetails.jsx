import React from "react";
import styles from "./ClubDetails.module.css";
import { useParams, useLocation } from "react-router-dom";

export const ClubDetails = (props) => {

    const location = useLocation();
    const propsData = location.state

    return (
        <>
            <div className={styles.detailsContainer}>
                <div className={styles.basicInfo}>
                    <img
                        src={propsData.team.logo}
                        alt={`${propsData.team.name} logo`}
                        className={styles.logo}
                    />
                    <h2 className={styles.clubName}>{propsData.team.name}</h2>
                    <h4>{propsData.points} points</h4>
                    <h4>{propsData.description} </h4>
                </div>

                <div className={styles.advInfo}>
                    <div className={styles.container}>
                        <h3 className={styles.infoLabel}>Played:</h3>
                        <p className={styles.infoValue}>{propsData.all.played}</p>
                        <h3 className={styles.infoLabel}>Wins:</h3>
                        <p className={styles.infoValue}>{propsData.all.win}</p>
                        <h3 className={styles.infoLabel}>Lose:</h3>
                        <p className={styles.infoValue}>{propsData.all.lose}</p>
                        <h3 className={styles.infoLabel}>Draw:</h3>
                        <p className={styles.infoValue}>{propsData.all.draw}</p>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.infoLabel}>Goals for: </h3>
                        <p className={styles.infoValue}>{propsData.all.goals.for}</p>
                        <h3 className={styles.infoLabel}>Goals against: </h3>
                        <p className={styles.infoValue}>{propsData.all.goals.against}</p>
                        <h3 className={styles.infoLabel}>Goal Difference: </h3>
                        <p className={styles.infoValue}>{propsData.goalsDiff}</p>
                    </div>
                    <div className={styles.container}>
                        <h3 className={styles.infoLabel}>Last 5 matches: </h3>
                        <p className={styles.infoValue}>{propsData.form}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

