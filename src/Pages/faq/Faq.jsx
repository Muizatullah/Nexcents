

import { useState } from 'react';
import styles from "./faq.module.css";
import { faqs }  from "../../data"


function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button className={styles.question} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>
      {open && <p className={styles.answer}>{a}</p>}
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...faqs.map((f) => f.category)];

  const filtered =
    activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Frequently Asked <span className={styles.green}>Questions</span></h1>
          <p>Everything you need to know about Nexcent. Can't find an answer? Talk to our team.</p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className={styles.filterBar}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* FAQ ACCORDION */}
      <section className={styles.section}>
        {filtered.map((group) => (
          <div key={group.category} className={styles.group}>
            <h2 className={styles.groupTitle}>{group.category}</h2>
            <div className={styles.accordion}>
              {group.questions.map((item) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <span className={styles.contactIcon}>💬</span>
          <h2>Still have questions?</h2>
          <p>Our team is happy to help. Reach out and we'll get back to you within 24 hours.</p>
          <button className={styles.contactBtn}>Contact Support</button>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to grow smarter with Nexcent?</h2>
        <p>Join over 2,400 farmers already on the platform.</p>
        <div className={styles.ctaBtns}>
          <button className={styles.btnWhite}>Start Free Trial</button>
          <button className={styles.btnOutline}>Talk to Sales</button>
        </div>
      </section>

    </div>
  );
}
