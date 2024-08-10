"use client";

import { useEffect, useState } from "react";
import styles from "./CricketStats.module.css";

export default function CricketStats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/fetchStats');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setStats(data.values || []);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      {stats.map((stat, index) => (
        <div className={styles.card} key={index}>
          <h3 className={styles.rank}>Rank: {stat.values[0]}</h3>
          <p className={styles.player}>Player: {stat.values[1]}</p>
          <p className={styles.details}>Matches: {stat.values[2]}</p>
          <p className={styles.details}>Innings: {stat.values[3]}</p>
          <p className={styles.details}>Runs: {stat.values[4]}</p>
          <p className={styles.details}>Average: {stat.values[5]}</p>
        </div>
      ))}
    </div>
  );
}
