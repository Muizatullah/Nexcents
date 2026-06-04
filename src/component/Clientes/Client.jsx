import styles from "./client.module.css"
import clientLogo1 from "../../assets/client1.png"
import clientLogo2 from "../../assets/client2.png"
import clientLogo3 from "../../assets/client3.png"
import clientLogo4 from "../../assets/client4.png"
import clientLogo5 from "../../assets/client5.png"
import clientLogo7 from "../../assets/client7.png"


const Client = () => {
  return (
   <section className={styles.clientContainer}>
    <h1>Our Clients</h1>
    <p>We have been working with some Fortune 500+ clients</p>

    <div className={styles.clientLogo}>
        <img src={clientLogo1} alt="" />
        <img src={clientLogo2} alt="" />
        <img src={clientLogo3} alt="" />
        <img src={clientLogo4} alt="" />
        <img src={clientLogo5} alt="" />
        <img src={clientLogo7} alt="" />

    </div>
   </section>
  )
}

export default Client

