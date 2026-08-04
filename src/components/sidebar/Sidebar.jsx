
import styles from "./sidebar.module.css";

import {
  HiOutlineChartBar,
  HiOutlineBolt,
  HiOutlineUsers,
  HiOutlineClipboardDocumentList,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.logo}>TESLA</h1>

      <nav>

        <NavLink
          to="/dashboard/reports"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          <HiOutlineChartBar />
          Reports
        </NavLink>

        <NavLink
          to="/dashboard/library"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          <HiOutlineBolt />
          Library
        </NavLink>

        <NavLink
          to="/dashboard/people"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          <HiOutlineUsers />
          People
        </NavLink>

        <NavLink
          to="/dashboard/activities"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          <HiOutlineClipboardDocumentList />
          Activities
        </NavLink>

      </nav>

      <div className={styles.support}>
        <p>Support</p>

        <NavLink
          to="/dashboard/getstarted"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          <HiOutlineQuestionMarkCircle />
          Get Started
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          <HiOutlineCog6Tooth />
          Settings
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;