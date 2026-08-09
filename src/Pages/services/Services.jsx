

import styles from './Services.module.css';
import {services} from "../../data"



export default function Services() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Our <span className={styles.green}>Services</span></h1>
          <p>Everything your farm needs — from soil to supply chain.</p>
          <button className={styles.btn}>Get Started</button>
        </div>
      </section>

      {/* CARDS */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What We Offer</h2>
        <p className={styles.sectionSub}>Six focused services, each solving a real farming challenge.</p>
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <span className={styles.icon}>{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#" className={styles.link}>Learn more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to grow smarter?</h2>
        <p>Book a free consultation with one of our agronomists.</p>
        <button className={styles.btnWhite}>Book Free Call</button>
      </section>

    </div>
  );
}
