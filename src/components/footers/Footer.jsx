import footer from "../../assets/footer.png";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
        <div className={styles.footerLeft}>
            <img src={footer} alt="footer" />
        </div>
        <div className={styles.footerRight}>
          <h2>How to design your site footer like we did</h2>
          <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          <button className={styles.footerButton}>Learn More

          </button>

        </div>

    </section>
  )
}

export default Footer;
