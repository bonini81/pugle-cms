import "./Header.scss";
import MenuMobile from "./MenuMobile";
import PcLinks from "./PcLinks";

const HeaderMenu = () => {
  return (
    <nav className="orientation-menu-desktop">
      <PcLinks />
      <MenuMobile />
    </nav>
  );
};

export default HeaderMenu;
