
import styles from "./StatCard.module.css";

const StatCard = ({ title, value, subtitle, children }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>

      <div className={styles.content}>
        <h2>{value}</h2>

        {subtitle && (
          <span className={styles.subtitle}>
            {subtitle}
          </span>
        )}
      </div>

      {children}
    </div>
  );
};

export default StatCard;