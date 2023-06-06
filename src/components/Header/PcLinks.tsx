/* eslint-disable no-restricted-imports */
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import "./Header.scss";
import menuLinks from "../../data/menuLinks.json";

const PcLinks = () => {
  return (
    <List className="menu-wrapper-styles">
      {menuLinks.map((link, index) => {
        return <ListItem>{link.menu}</ListItem>;
      })}
    </List>
  );
};

export default PcLinks;
