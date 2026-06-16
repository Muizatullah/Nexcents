import styles from "./cta.module.css";
import { FaArrowRight } from "react-icons/fa";

const Cta = () => {
  return (
 <section className={styles.ctaContainer}>
    <h2>Pellentesque suscipit<br></br> fringilla libero eu.</h2>
    <button className={styles.ctaButton}>Get a Demo <FaArrowRight/> </button>

 </section>
  )
}

export default Cta
