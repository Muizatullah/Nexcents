import styles from "./navbar.module.css";
import Logo from "../../assets/Logo.png";
import { navBarData } from "../../data.js";
import { Link } from "react-router"

const Navbar = () => {
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
                <Link to={item.pathUrl} className={`${styles.navLink}`}>
                  {item.pathName}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.navButton}>
            <button  >Login</button>
            <button >Sign-up</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

