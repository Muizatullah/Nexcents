// import React from 'react'

// const GetStarted = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default GetStarted
import React from "react";
import styles from "./getstarted.module.css";

const STEPS = [
  "Add your first farm",
  "Invite your team",
  "Connect a sensor or upload field data",
  "Set up your first report",
];

const GetStarted = () => (
  <div>
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>Get Started</h1>
        <p className={styles.subtitle}>A quick checklist to get your farms up and running on Nexcent.</p>
      </div>
    </div>

    <div className={styles.stepList}>
      {STEPS.map((step, i) => (
        <div key={step} className={styles.stepRow}>
          <span className={styles.stepNumber}>{i + 1}</span>
          <span className={styles.stepLabel}>{step}</span>
        </div>
      ))}
    </div>
  </div>
);

export default GetStarted;