import React from "react";
import Index from "../../components/MuiIndex";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <Index.Box className="page-body">
      <Header />
      <Index.Box className="dashboard-main">
        <Index.Box className="dashboard-left-main">
          <h1>Sidebar</h1>
        </Index.Box>
        <Index.Box className="dashboard-right-main">
          <Index.Box className="dashboard-containt-main page-scrollbar">
            <h1>Main View</h1>
          </Index.Box>
        </Index.Box>
      </Index.Box>
      <Footer />
    </Index.Box>
  );
};

export default Home;
