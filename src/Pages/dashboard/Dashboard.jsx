import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />

      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Reports</h1>

          <button>Download</button>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          <select>
            <option>All Time</option>
          </select>

          <select>
            <option>People: All</option>
          </select>

          <select>
            <option>Topic: All</option>
          </select>
        </div>

        {/* Statistics */}
        <div className={styles.stats}>
          <div className={styles.card}>
            <p>Active Users</p>
            <h2>27</h2>
            <span>/80</span>
          </div>

          <div className={styles.card}>
            <p>Questions Answered</p>
            <h2>3,298</h2>
          </div>

          <div className={styles.card}>
            <p>Av. Session Length</p>
            <h2>2m 34s</h2>
          </div>
        </div>

        {/* Analytics */}
        <div className={styles.analytics}>
          <div className={styles.smallCards}>
            <div className={styles.card}>
              <p>Starting Knowledge</p>
              <h2>64%</h2>
            </div>

            <div className={styles.card}>
              <p>Current Knowledge</p>
              <h2>86%</h2>
            </div>

            <div className={styles.card}>
              <p>Knowledge Gain</p>
              <h2>+34%</h2>
            </div>
          </div>

          <div className={styles.chart}>
            Chart Area
          </div>
        </div>

        {/* Topics */}
        <div className={styles.topicSection}>
          <div className={styles.topicCard}>
            <h3>Weakest Topics</h3>
          </div>

          <div className={styles.topicCard}>
            <h3>Strongest Topics</h3>
          </div>
        </div>

        {/* Leaderboards */}
        <div className={styles.leaderboards}>
          <div className={styles.leaderboard}>
            User Leaderboard
          </div>

          <div className={styles.leaderboard}>
            Group Leaderboard
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;