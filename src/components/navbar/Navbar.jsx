import { Link } from "react-router";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";

import { useState } from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/Logo.png";
import { navBarData } from "../../data.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className={`${styles.headerContainer} container`}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <img src={Logo} alt="logo Image" className={styles.logoImage} />
            <h3>Nexcent</h3>
          </div>

          <ul className={`${styles.navLinks}${isOpen ? styles.showMenu : ""}`}>
            {navBarData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.pathUrl}
                  className={`${styles.navLink}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.pathName}
                </Link>
              </li>
            ))}
            <div className={styles.mobileBtn}>
              <Link
                to="/Login"
                className={styles.loginBtn}
                onClick={() => setIsOpen(false)}
              >Login</Link>

              <Link
                to="/SignUp"
                className={styles.SignupBtn}
                onClick={() => setIsOpen(false)}
              >Sign-up</Link>
            </div>
          </ul>



          <div className={styles.navButton}>
            <Link to="/Login" className={styles.loginBtn}>Login</Link>
            <Link to="/Sign-up" className={styles.SignupBtn}>Sign-up</Link>
          </div>
          <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaXmark /> : <FiMenu />}

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
