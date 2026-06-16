import hero2 from "../../assets/hero2.png";
import styles from "./hero2.module.css";

const Hero2 = () => {
  return (
  <section className={styles.heroContainer}>
    <div className={styles.heroLeft}>
        <img src={hero2} alt="hero2" />
 </div>
 <div className={styles.heroRight}>
    <h2>The unseen of spending three years at Pixelgrade</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
    <button className={styles.heroButton}>Learn More</button>

 </div>

  </section>
  )
}

export default Hero2;
