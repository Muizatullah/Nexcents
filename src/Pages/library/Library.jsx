// import React from 'react'

// const Library = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Library

import React from "react";
import { FiZap } from "react-icons/fi";
// import styles from "./placeholder.module.css";
import styles from "./library.module.css"

const Library = () => (
  <div>
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>Library</h1>
        <p className={styles.subtitle}>
          Guides, crop profiles, and irrigation playbooks your team can reuse across farms.
        </p>
      </div>
    </div>

    <div className={styles.emptyState}>
      <div className={styles.emptyIcon}>
        <FiZap size={22} />
      </div>
      <h2 className={styles.emptyTitle}>Your library is empty</h2>
      <p className={styles.emptyText}>
        Add your first resource — a guide, template, or crop profile — to start
        building a reference your whole team can use.
      </p>
      <button type="button" className={styles.primaryBtn}>
        Add resource
      </button>
    </div>
  </div>
);

export default Library;
