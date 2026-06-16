import styles from "./marketing.module.css";
// import market1 from "../../assets/market1.png"
// import market2 from "../../assets/market2.png"
// import market3 from "../../assets/market3.png"
import { caringData } from "../../data.js";
import { FaArrowRight } from "react-icons/fa";

const Marketing = () => {
  return (
  <section className={styles.marketContainer}>
    <div className={styles.marketContent}>
      <h2>caring is the new marketing</h2>
      <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>

    </div>

    <div className={styles.marketCard}>
      {caringData.map((caring) => (
        <div key= {caring.id} className={styles.card}>
          <img src={caring.image} alt={caring.title} />
          <div className={styles.cardContent}>
            <h3>{ caring.title}</h3>
            <a href="#" className={styles.readMore}>Readmore  <FaArrowRight/></a>
          </div>

        </div>
      ))}

    </div>

  </section>
  );
};

export default Marketing;
