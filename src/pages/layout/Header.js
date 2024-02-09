import React from "react";
import Index from "../../components/MuiIndex";

const Header = () => {
  return (
    <Index.AppBar position="static">
      <Index.Toolbar>
        <Index.Typography variant="h6">Your App Name</Index.Typography>
      </Index.Toolbar>
    </Index.AppBar>
  );
};

export default Header;
