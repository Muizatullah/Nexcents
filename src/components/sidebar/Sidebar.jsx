
// import styles from "./sidebar.module.css";

// import {
//   HiOutlineChartBar,
//   HiOutlineBolt,
//   HiOutlineUsers,
//   HiOutlineClipboardDocumentList,
//   HiOutlineQuestionMarkCircle,
//   HiOutlineCog6Tooth,
// } from "react-icons/hi2";

// import { NavLink } from "react-router";

// const Sidebar = () => {
//   return (
//     <aside className={styles.sidebar}>
//       <h1 className={styles.logo}>TESLA</h1>

//       <nav>

//         <NavLink
//           to="/dashboard/reports"
//           className={({ isActive }) =>
//             isActive ? styles.active : styles.link
//           }
//         >
//           <HiOutlineChartBar />
//           Reports
//         </NavLink>

//         <NavLink
//           to="/dashboard/library"
//           className={({ isActive }) =>
//             isActive ? styles.active : styles.link
//           }
//         >
//           <HiOutlineBolt />
//           Library
//         </NavLink>

//         <NavLink
//           to="/dashboard/people"
//           className={({ isActive }) =>
//             isActive ? styles.active : styles.link
//           }
//         >
//           <HiOutlineUsers />
//           People
//         </NavLink>

//         <NavLink
//           to="/dashboard/activities"
//           className={({ isActive }) =>
//             isActive ? styles.active : styles.link
//           }
//         >
//           <HiOutlineClipboardDocumentList />
//           Activities
//         </NavLink>

//       </nav>

//       <div className={styles.support}>
//         <p>Support</p>

//         <NavLink
//           to="/dashboard/getstarted"
//           className={({ isActive }) =>
//             isActive ? styles.active : styles.link
//           }
//         >
//           <HiOutlineQuestionMarkCircle />
//           Get Started
//         </NavLink>

//         <NavLink
//           to="/dashboard/settings"
//           className={({ isActive }) =>
//             isActive ? styles.active : styles.link
//           }
//         >
//           <HiOutlineCog6Tooth />
//           Settings
//         </NavLink>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import React from "react";
import { NavLink } from "react-router";
import { FiBarChart2, FiZap, FiUsers, FiClipboard, FiCompass, FiSettings } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import styles from "./sidebar.module.css";

/**
 * Nexcent — Sidebar
 * Standalone nav component used by DashboardLayout. Highlights the
 * active route automatically via NavLink.
 */

const NAV_ITEMS = [
  { to: "reports", label: "Reports", icon: FiBarChart2 },
  { to: "library", label: "Library", icon: FiZap },
  { to: "people", label: "People", icon: FiUsers },
  { to: "activities", label: "Activities", icon: FiClipboard },
];

const FOOTER_ITEMS = [
  { to: "get-started", label: "Get Started", icon: FiCompass },
  { to: "settings", label: "Settings", icon: FiSettings },
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <FaLeaf size={22} className={styles.brandIcon} />
        <span className={styles.brandText}>Nexcent</span>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
          >
            <Icon size={18} className={styles.navIcon} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.sidebarSpacer} />

      <nav className={styles.navFooter}>
        {FOOTER_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
          >
            <Icon size={18} className={styles.navIcon} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;