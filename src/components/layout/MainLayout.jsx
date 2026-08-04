import { Navbar, Footer2 } from "../../components/index";
import { useLocation } from "react-router";

const MainLayout = ({ children }) => {
  const location = useLocation();
  
  
  const dashboardRoutes = [
    "/dashboard",
    "reports",
    "library",
    "people",
    "activities",
    "getstarted",
    "settings"
  ];

  
  const hideNavFooter = dashboardRoutes.includes(location.pathname);
 

  return (
    <div>
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer2 />}
    </div>
  );
};

export default MainLayout;