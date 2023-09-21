import logo from "../../helper/logo.png";
import navbarStyle from "./navbar.module.scss";
export default function Navbar() {
  return (
    <div className={navbarStyle["container"]}>
      <img className={navbarStyle["navbar-img"]} src={logo} alt="" />
      <div className={navbarStyle["navbar-link"]}>
        <a href="">HOROSCOPE</a>
        <a href="">DAILY</a>
        <a href="">TAROT</a>
        <a href="">ARTICLE</a>
        <a href="">CONTACT</a>
      </div>
    </div>
  );
}
