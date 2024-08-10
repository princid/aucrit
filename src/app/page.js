// /src/app/page.js

import CricketStats from "./components/CricketStats";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Top Cricket Stats</h1>
      <CricketStats />
    </main>
  );
}
