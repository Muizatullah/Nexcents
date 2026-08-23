// import React from 'react'

// const People = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default People
import React from "react";
import { FiUsers } from "react-icons/fi";
import styles from "./people.module.css";

const People = () => (
  <div>
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>People</h1>
        <p className={styles.subtitle}>
          Everyone with access to your farms — owners, field managers, and
          seasonal staff.
        </p>
      </div>
    </div>

    <div className={styles.emptyState}>
      <div className={styles.emptyIcon}>
        <FiUsers size={22} />
      </div>
      <h2 className={styles.emptyTitle}>No one's been invited yet</h2>
      <p className={styles.emptyText}>
        Invite your team so they can log field activity and see reports for
        the farms they manage.
      </p>
      <button type="button" className={styles.primaryBtn}>
        Invite someone
      </button>
    </div>
  </div>
);

export default People;