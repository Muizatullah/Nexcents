// import React from 'react'

// const Settings = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Settings
import React from "react";
import styles from "./settings.module.css";

const SECTIONS = ["Account", "Notifications", "Billing", "Integrations"];

const Settings = () => (
  <div>
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>Settings</h1>
        <p className={styles.subtitle}>Manage your account, notifications, and workspace preferences.</p>
      </div>
    </div>

    <div className={styles.sectionList}>
      {SECTIONS.map((section) => (
        <div key={section} className={styles.sectionRow}>
          <span className={styles.sectionLabel}>{section}</span>
          <span className={styles.sectionAction}>Manage</span>
        </div>
      ))}
    </div>
  </div>
);

export default Settings;