import "./Header.scss";
import MenuMobile from "./MenuMobile";
import PcLinks from "./PcLinks";

interface HeaderMenuProps {
  HeaderMenuLinks?: MenuLinksObject[];
}

interface MenuLinksObject {
  menu: string;
  url: string;
}

const HeaderMenu = ({ HeaderMenuLinks }: HeaderMenuProps) => {
  return (
    <nav className="orientation-menu-desktop">
      <PcLinks HeaderMenuLinksList={HeaderMenuLinks} />
      <MenuMobile HeaderMenuLinksList={HeaderMenuLinks} />
    </nav>
  );
};

export default HeaderMenu;
