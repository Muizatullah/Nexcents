import styles from "./busines.module.css";
import business1 from "../../assets/business1.png";
import business2 from "../../assets/business2.png";
import business3 from "../../assets/business3.png";
import business4 from "../../assets/business4.png";

const Busines = () => {
  return (
    <section className={styles.businessContainer}>
      <div className={styles.businessContent}>
        <h1>
          Helping a local <br /><span> business reinvent itself</span>
        </h1>
        <p>We reached here with our hard work and dedication</p>
      </div>

      <div className={styles.businessCards}>
        <div className={styles.card}>
          <img src={business1} alt="business Icon" />
          <div className={styles.cardText}>
            <h3>2,245,341</h3>
            <p>Members</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={business2} alt="business Icon" />
          <div className={styles.cardText}>
            <h3>46,328</h3>
            <p>Clubs</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={business3} alt="business Icon" />
          <div className={styles.cardText}>
            <h3>828,867</h3>
            <p>Event Bookings</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={business4} alt="business Icon" />
          <div className={styles.cardText}>
            <h3>1,926,436</h3>
            <p>payement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Busines;
