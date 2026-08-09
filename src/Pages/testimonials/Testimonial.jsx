

import { useState } from 'react';
import styles from "./testimonial.module.css";
import { testimonials, stats } from '../../data';



function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= count ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  );
}

export default function Testimonial() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>What Farmers <span className={styles.green}>Say About Us</span></h1>
          <p>Real stories from real farmers who've grown with Nexcent.</p>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        {stats.map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* FEATURED SLIDER */}
      <section className={styles.sliderSection}>
        <h2 className={styles.sectionTitle}>Featured Review</h2>
        <div className={styles.slider}>
          <button className={styles.arrow} onClick={prev}>‹</button>
          <div className={styles.sliderCard}>
            <span className={styles.sliderAvatar}>{testimonials[active].avatar}</span>
            <Stars count={testimonials[active].rating} />
            <p className={styles.sliderText}>"{testimonials[active].text}"</p>
            <span className={styles.sliderName}>{testimonials[active].name}</span>
            <span className={styles.sliderRole}>{testimonials[active].role}</span>
          </div>
          <button className={styles.arrow} onClick={next}>›</button>
        </div>

        {/* DOTS */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </section>

      {/* ALL CARDS GRID */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>All Reviews</h2>
        <p className={styles.sectionSub}>Every story matters — here's what our community says.</p>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.avatar}>{t.avatar}</span>
                <div>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
              <Stars count={t.rating} />
              <p className={styles.cardText}>"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Join thousands of farmers growing with Nexcent</h2>
        <p>Start your free trial today — no credit card required.</p>
        <div className={styles.ctaBtns}>
          <button className={styles.btnWhite}>Get Started Free</button>
          <button className={styles.btnOutline}>Read More Stories</button>
        </div>
      </section>

    </div>
  );
}