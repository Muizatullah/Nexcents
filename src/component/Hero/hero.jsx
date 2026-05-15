import styles from "./hero.module.css";
import heroImage from "../../assets/heroImage.png";

const hero = () => {
  return (
  <section className={styles.heroContainer}>
    <div className={styles.heroLeft}>
      <h2>Lessons and insights <span>from 8 years</span></h2>
      <p>Where to grow your business as a photographer: site or social media?</p>
      
       <div className={styles.heroButton}>Register Now 
    </div>
    </div>
    <div className={styles.heroRight}>
      <img src={heroImage} alt="hero Image" />
    </div>
  </section>
  )
}

export default hero


