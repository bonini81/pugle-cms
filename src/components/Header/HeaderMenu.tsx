import "./Header.scss";
import MenuMobile from "./MenuMobile";
import PcLinks from "./PcLinks";

interface HeaderMenuProps {
  HeaderMenuLinks?: MenuLinksObject[];
  handleClick?: () => void;
}

interface MenuLinksObject {
  menu: string;
  url: string;
}

const HeaderMenu = ({ HeaderMenuLinks, handleClick }: HeaderMenuProps) => {
  return (
    <nav className="orientation-menu-desktop">
      <PcLinks
        HeaderMenuLinksList={HeaderMenuLinks}
        handleClick={handleClick}
      />
      <MenuMobile HeaderMenuLinksList={HeaderMenuLinks} />
    </nav>
  );
};

export default HeaderMenu;
