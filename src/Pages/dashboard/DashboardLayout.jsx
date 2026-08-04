import { Link, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <>
      <div>
        {/* <h1>Dashboard</h1>
        <div>
          
          <Link to="/dashboard">Dashboard</Link>
          <Link to="reports">Reports</Link>
          <Link to="library">Library</Link>
          <Link to="people">People</Link>
          <Link to="activities">Activities</Link>
          <Link to="getstarted">Get Started</Link>
          <Link to="settings">Settings</Link>

        </div> */}
        <Outlet />
      </div>
      <Link to="/login">Logout</Link>
    </>
  );
};

export default DashboardLayout;