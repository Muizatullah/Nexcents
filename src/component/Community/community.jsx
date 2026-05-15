import styles from "./community.module.css"
import communityImage from "../../assets/communtityImage.png"
import communityImage2 from "../../assets/communityImage2.png"
import communityImage3 from "../../assets/communityImage3.png"
const community = () => {
  return (
    <section className={styles.communityContainer}>
      <div className={styles.communityContent}>
        <h2>Manage your entire community in a single system</h2>
        <p> Who is Nextcent suitable for?</p>
      </div>

      <div className={styles.communityCards}>
        <div className={styles.card}>
            <img src={communityImage} alt="community Image" />
            <h3>Membership Organisations</h3>
            <p>Our membership management software provides full automation of membership renewals and payments</p>

        </div>
        <div className={styles.card}>
            <img src={communityImage2} alt="community Image" />
            <h3>National Associations</h3>
            <p>Our membership management software provides full automation of membership renewals and payments</p>

        </div>
        <div className={styles.card}>
            <img src={communityImage3} alt="community Image" />
            <h3>Clubs And Groups</h3>
            <p>Our membership management software provides full automation of membership renewals and payments</p>

        </div>


      </div>
    </section>
  );
};

export default community;
