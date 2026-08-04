import styles from "./filterbar.module.css"
import { IoChevronDown } from "react-icons/io5";

const FilterBar = () => {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filter}>
        <span>Timeframe: All-time</span>
        <IoChevronDown />
      </div>

      <div className={styles.filter}>
        <span>People: All</span>
        <IoChevronDown />
      </div>

      <div className={styles.filter}>
        <span>Topic: All</span>
        <IoChevronDown />
      </div>
    </div>
  );
};

export default FilterBar;