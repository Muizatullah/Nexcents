import { Navbar, Footer2 } from "../../components/index";
const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer2 />
    </div>
  );
};
export default MainLayout;
