import styles from "./navbar.module.css";
import Logo from "../../assets/Logo.png";
import { navBarData } from "../../data.js";

const navbar = () => {


  return (
    <header>
      <nav className={`${styles.headerContainer} container`}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <img src={Logo} alt="logo Image" className={styles.logoImage} />
            <h3>Nexcent</h3>
          </div>

          <ul className={styles.navLinks}>
            {navBarData.map((item) => (
              <li key={item.id}>
                <a href={item.pathUrl} className={`${styles.navLink}`}>
                  {item.pathName}
                </a>
              </li> 
            ))}
          </ul>

          <div className={styles.navButton}>
            <button>Login</button>
            <button>Sign-up</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
