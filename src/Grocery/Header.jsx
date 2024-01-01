import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const pageToTabIndex = {
    Products: 0,
    Services: 1,
    AboutUs: 2,
    ContactUs: 3,
  };

  const tabIndexToPage = {
    0: "Products",
    1: "Services",
    2: "AboutUs",
    3: "ContactUs",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#F5F5F5" }}>
        <Toolbar>
          <img
            src="https://img.freepik.com/premium-vector/ss-logo-design_705304-1070.jpg?w=2000"
            alt=""
            width="50px"
          />
          <Typography
            sx={{ fontSize: "2rem", paddingLeft: "10%", color: "black" }}
          >
            <b>SS GROCERIES</b>
          </Typography>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={handleChange}
            >
              <Link to="/products">
                <Tab label="Products" />
              </Link>
              <Link to="/services">
                <Tab label="Services" />
              </Link>
              <Link to="/aboutus">
                <Tab label="About Us" />
              </Link>
              <Link to="/contact">
                <Tab label="Contact" />
              </Link>
            </Tabs>
            <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
              <Link to="/login">
                <Button variant="contained">Login</Button>
              </Link>
              {/* <Link to="/logout">
                <Button variant="contained">Logout</Button>
              </Link> */}
              <Link to="/signup">
                <Button variant="contained">SignUp</Button>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {!isMatch && (
        <div style={{ padding: "20px" }}>
          <Typography variant="h4">
            {`Content for ${tabIndexToPage[value]} page`}
          </Typography>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
