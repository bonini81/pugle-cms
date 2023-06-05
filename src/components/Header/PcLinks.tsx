import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import "./Header.scss";

const PcLinks = () => {
  return (
    <List className="menu-wrapper-styles">
      <ListItem>Profile</ListItem>
      <ListItem>My account</ListItem>
      <ListItem>Logout</ListItem>
    </List>
  );
};

export default PcLinks;
