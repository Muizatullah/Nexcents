import styles from "./footer2.module.css"
import Logo from "../../assets/Logo.png"
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer2 = () => {
  return (
<footer className={styles.footerContainer}>
  <div className={styles.footerLeft}>
    <div className={styles.footerLogo}>
<img src={Logo} alt="Nexcent Logo" />
<h3>Nexcent</h3>
    </div>
    <p>Copyright © 2020 Nexcent ltd. <br/>All rights reserved</p>
    <div className={styles.footerIcons}>
      <a href="#"> <FaInstagram /></a>
      <a href="#"> <FaDribbble  /></a>
      <a href="#"> <FaTwitter /></a>
      <a href="#"> <FaYoutube /></a>

    </div>

  </div>

  <div className={styles.footerLinks}>
    <div className={styles.footerContent}>
      <h4>Company</h4>
      <a href="#">About us</a>
      <a href="#">Blog</a>
      <a href="#">Contact us</a>
      <a href="#">Pricing</a>
      <a href="#">Testimonials</a>

    </div>
    <div className={styles.footerContent}>
      <h4>Support</h4>
    <a href="#">Help center</a>
    <a href="#">Terms of services</a>
    <a href="#">Legal</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Status</a>
    </div>
    <div className={styles.footerContent}>
      <h4>Stay up to date</h4>
      <div className={styles.emailInput}>
        <input type="email" placeholder="Your email address" />
        <button><FaTwitter/></button>

      </div>

    </div>

  </div>

</footer>
  )
}

export default Footer2
