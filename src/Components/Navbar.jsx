import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/home"
    },
    {
      text: "Product",
      icon: <InfoIcon />,
      link: "/products"
    }
  ];
  const navigate = useNavigate()
  return (
    <nav>
      <div className="nav-logo-container">
        <h2>STORE</h2>
      </div>
      <div className="navbar-links-container">
        <Link to={"/home"}>Home</Link>
        <Link to={"/products"}>Products</Link>
      </div>
      <div className="navbar-links-container">
        <a href="/products">
          <BsCart2 className="navbar-cart-icon" />
        </a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 style={{color: "white"}} onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding onClick={() => navigate(item.link)}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
