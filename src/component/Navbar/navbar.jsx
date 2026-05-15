import styles from "./navbar.module.css";
import Logo from "../../assets/Logo.png";
const navbar = () => {
  return (
<header>
  <nav className={`${styles.headerContainer} container`}>
    <div className={styles.navContainer}>

      <div className={styles.logo}>
        <img src={Logo} alt="logo Image" className={styles.logoImage} />
        <h3>Nexcent</h3>
      </div>

      <div className={styles.navLinks}>
        <a href="Home">Home</a>
        <a href="Services">Services</a>
        <a href="Features">Features</a>
        <a href="Testimonial">Testimonial</a>
        <a href="FAQ">FAQ</a>
      </div>

      <div className={styles.navButton}>
        <button >Login</button>
        <button >Sign-up</button>
      </div>

    </div>
  </nav>
</header>
  );
};

export default navbar;
