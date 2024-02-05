/* eslint-disable no-restricted-imports */
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import "./Header.scss";

interface PcLinksProps {
  HeaderMenuLinksList?: MenuLinks[];
  handleClick?: () => void;
}
interface MenuLinks {
  menu: string;
  url: string;
}

const PcLinks = ({ HeaderMenuLinksList, handleClick }: PcLinksProps) => {
  return (
    <List className="menu-wrapper-styles">
      {HeaderMenuLinksList &&
        HeaderMenuLinksList.map((link, index) => {
          return (
            <ListItem key={index} className="li-list-styles">
              {!handleClick ? (
                <Link href={link.url} className="a-link-item">
                  {link.menu}
                </Link>
              ) : (
                <Link
                  href={link.url}
                  className="a-link-item"
                  onClick={handleClick}
                >
                  {link.menu}
                </Link>
              )}
            </ListItem>
          );
        })}
    </List>
  );
};

export default PcLinks;
