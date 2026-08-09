

import styles from "./products.module.css";
import { products, categories } from "../../data"


import { useState } from 'react';

export default function Products() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Our <span className={styles.green}>Products</span></h1>
          <p>Smart tools built for modern farmers — simple to use, powerful in the field.</p>
          <button className={styles.btn}>View All Products</button>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className={styles.filterBar}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* PRODUCTS GRID */}
      <section className={styles.section}>
        <div className={styles.grid}>
          {filtered.map((p) => (
            <div key={p.name} className={styles.card}>
              {p.badge && (
                <span className={`${styles.badge} ${p.badge === 'New' ? styles.badgeNew : ''}`}>
                  {p.badge}
                </span>
              )}
              <span className={styles.icon}>{p.icon}</span>
              <span className={styles.category}>{p.category}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{p.price}</span>
                <button className={styles.cardBtn}>Get Started</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Not sure which product fits?</h2>
        <p>Talk to our team and we'll match you with the right solution for your farm.</p>
        <div className={styles.ctaBtns}>
          <button className={styles.btnWhite}>Talk to Sales</button>
          <button className={styles.btnOutline}>Compare Products</button>
        </div>
      </section>

    </div>
  );
}
