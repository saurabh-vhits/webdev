import React from "react";
import Index from "../MuiIndex";

const PageNotFound = () => {
  return (
    <Index.Box className="page-not-found-main">
      <Index.Box className="page-not-found-text">
        <Index.Typography className="pagenotfound-text-heading">
          Page Not Found{" "}
        </Index.Typography>
        <Index.Typography className="pagenotfound-text">
          We couldn't find page you are looking for
        </Index.Typography>
      </Index.Box>
      <Index.Box className="pagenotfound-img-box">
        <img
          alt="img"
          className="pagenotfound-img"
          src={Index.Png.pagenotfound}
        />
      </Index.Box>
    </Index.Box>
  );
};

export default PageNotFound;
