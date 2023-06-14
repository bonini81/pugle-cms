import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

// eslint-disable-next-line no-restricted-imports
import menuLinks from "../../data/menuLinks.json";

const MenuMobile = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor="right"
        className="test2"
      >
        <div className="close-button-styles">
          <CloseIcon onClick={() => setOpenDrawer(false)} />
        </div>
        <List className="burger-wrapper-styles">
          {menuLinks.map((link, index) => {
            return (
              <ListItem className="li-list-styles">
                <Link href={link.url} className="a-link-item">
                  {link.menu}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className="mobile-menu-wrapper"
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default MenuMobile;
