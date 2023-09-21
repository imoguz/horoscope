import Navbar from "../navbar/navbar";
import headerStyle from "./header.module.scss";

const Header = () => {
  return (
    <div className={headerStyle["container"]}>
      <Navbar />
    </div>
  );
};
export default Header;
