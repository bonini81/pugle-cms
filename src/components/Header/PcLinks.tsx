/* eslint-disable no-restricted-imports */
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import "./Header.scss";
import menuLinks from "../../data/menuLinks.json";

const PcLinks = () => {
  return (
    <List className="menu-wrapper-styles">
      {menuLinks.map((link, index) => {
        return (
          <ListItem key={index} className="li-list-styles">
            <Link href={link.url} className="a-link-item">
              {link.menu}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default PcLinks;
