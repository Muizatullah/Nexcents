import  Sidebar from "../../components/sidebar/Sidebar"
// import styles from "./dashboard.module.css";

// const Dashboard = () => {
//   return (
//     <div className={styles.dashboard}>
//       <Sidebar />

//       <div className={styles.content}>
//         <div className={styles.header}>
//           <h1>Reports</h1>

//           <button>Download</button>
//         </div>

//         {/* Filters */}
//         <div className={styles.filters}>
//           <select>
//             <option>All Time</option>
//           </select>

//           <select>
//             <option>People: All</option>
//           </select>

//           <select>
//             <option>Topic: All</option>
//           </select>
//         </div>

//         {/* Statistics */}
//         <div className={styles.stats}>
//           <div className={styles.card}>
//             <p>Active Users</p>
//             <h2>27</h2>
//             <span>/80</span>
//           </div>

//           <div className={styles.card}>
//             <p>Questions Answered</p>
//             <h2>3,298</h2>
//           </div>

//           <div className={styles.card}>
//             <p>Av. Session Length</p>
//             <h2>2m 34s</h2>
//           </div>
//         </div>

//         {/* Analytics */}
//         <div className={styles.analytics}>
//           <div className={styles.smallCards}>
//             <div className={styles.card}>
//               <p>Starting Knowledge</p>
//               <h2>64%</h2>
//             </div>

//             <div className={styles.card}>
//               <p>Current Knowledge</p>
//               <h2>86%</h2>
//             </div>

//             <div className={styles.card}>
//               <p>Knowledge Gain</p>
//               <h2>+34%</h2>
//             </div>
//           </div>

//           <div className={styles.chart}>
//             Chart Area
//           </div>
//         </div>

//         {/* Topics */}
//         <div className={styles.topicSection}>
//           <div className={styles.topicCard}>
//             <h3>Weakest Topics</h3>
//           </div>

//           <div className={styles.topicCard}>
//             <h3>Strongest Topics</h3>
//           </div>
//         </div>

//         {/* Leaderboards */}
//         <div className={styles.leaderboards}>
//           <div className={styles.leaderboard}>
//             User Leaderboard
//           </div>

//           <div className={styles.leaderboard}>
//             Group Leaderboard
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { NavLink, Outlet } from "react-router";
import { FiBarChart2, FiZap, FiUsers, FiClipboard, FiCompass, FiSettings } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import styles from "./dashboard.module.css";

/**
 * Nexcent — Dashboard Layout
 * Renders the sidebar + an <Outlet /> for nested routes:
 * /dashboard/reports, /dashboard/library, /dashboard/people,
 * /dashboard/activities, /dashboard/get-started, /dashboard/settings
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

const Dashboard = () => {
  return (
    <div className={styles.page}>
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

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;