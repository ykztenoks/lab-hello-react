import IronLogo from "../assets/images/ironhack-logo-xs.png";
import MenuIcon from "../assets/images/menu-top-xs.png";
import style from "./navbarstyle.module.css";
function NavBar() {
  return (
    <div className={style.navbar}>
      <img src={IronLogo} alt="IronhackLogo" />
      <img src={MenuIcon} alt="menuIcon" />
    </div>
  );
}

export default NavBar;
