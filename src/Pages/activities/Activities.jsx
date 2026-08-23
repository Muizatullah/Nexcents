// import React from 'react'

// const Activities = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Activities

import React from "react";
import { FiClipboard } from "react-icons/fi";
import styles from "./activities.module.css";

const Activities = () => (
  <div>
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>Activities</h1>
        <p className={styles.subtitle}>
          A timeline of what's happened across your farms — irrigation runs,
          field notes, and alerts.
        </p>
      </div>
    </div>

    <div className={styles.emptyState}>
      <div className={styles.emptyIcon}>
        <FiClipboard size={22} />
      </div>
      <h2 className={styles.emptyTitle}>Nothing logged yet</h2>
      <p className={styles.emptyText}>
        Activity from your fields — sensor alerts, irrigation cycles, and
        manual notes — will show up here as it happens.
      </p>
    </div>
  </div>
);

export default Activities;
