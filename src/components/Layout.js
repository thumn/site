import logo from "../img/tn-logo.png";
import "../stylesheets/Layout.css";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="Layout-heading">
        <img src={logo} className="Layout-logo" alt="" />
        <Navbar />
      </div>
      <div>{children}</div>
    </>
  );
};
export default Layout;
