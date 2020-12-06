import logo from "../img/tn-logo.png";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="heading">
        <img src={logo} className="logo" alt="" />
        <Navbar />
      </div>
      <div>{children}</div>
    </>
  );
};
export default Layout;
