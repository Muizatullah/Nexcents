import styles from "./customer.module.css";
import customer from "../../assets/customer.png";
import logo1 from "../../assets/client1.png";
import logo2 from "../../assets/client2.png";
import logo3 from "../../assets/client3.png";
import logo4 from "../../assets/client4.png";
import logo5 from "../../assets/client5.png";
import logo6 from "../../assets/client6.png";
import { FaArrowRight } from "react-icons/fa";

const Customer = () => {
  return (
   
    <section className={styles.customerContainer}>
        <div className={styles.customerLeft}>
            <img src={customer} alt="customer" />
 </div>

 <div className="styles.customerRight">
   <p className={styles.customerPara}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
   <div className={styles.customerInfo}> 
   <h1>Tim Smith</h1>
   <p>British Dragon Boat Racing Association</p>
   </div>

 

 <div className={styles.customerLogo}>
    <img src={logo1} alt="" />
    <img src={logo2} alt="" />
    <img src={logo3} alt="" />
    <img src={logo4} alt="" />
    <img src={logo5} alt="" />
    <img src={logo6} alt="" />
<a href="#"className={styles.meetLink}>Meet all customers < FaArrowRight/> </a>

 </div>
 </div>

    </section>
  )
}

export default Customer;
