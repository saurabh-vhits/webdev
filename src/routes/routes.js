import { createBrowserHistory } from "history";
import React from "react";
import { BrowserRouter, Route, Routes as Routess } from "react-router-dom";
import { PageNotFound } from "../components";
import { FogotPassword, Home, Login, Signup } from "../pages";

const history = createBrowserHistory();
const Routes = () => {
  return (
    <BrowserRouter history={history}>
      <Routess>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<FogotPassword />} />
        <Route path="/home" element={<Home />} />
      </Routess>
    </BrowserRouter>
  );
};

export default Routes;
