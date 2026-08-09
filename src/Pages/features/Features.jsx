

import styles from './Features.module.css';
import { features, highlights } from "../../data"





export default function Features() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Powerful <span className={styles.green}>Features</span></h1>
          <p>Everything you need to build, grow, and scale — all in one place.</p>
          <button className={styles.btn}>Explore All Features</button>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        {highlights.map((h) => (
          <div key={h.label} className={styles.statItem}>
            <span className={styles.statValue}>{h.value}</span>
            <span className={styles.statLabel}>{h.label}</span>
          </div>
        ))}
      </section>

      {/* FEATURES GRID */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why teams choose Nexcent</h2>
        <p className={styles.sectionSub}>Built with the tools modern teams actually need.</p>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <span className={styles.icon}>{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Start using Nexcent today</h2>
        <p>Join thousands of teams already growing with us.</p>
        <div className={styles.ctaBtns}>
          <button className={styles.btnWhite}>Sign Up Free</button>
          <button className={styles.btnOutline}>See Pricing</button>
        </div>
      </section>

    </div>
  );
}
