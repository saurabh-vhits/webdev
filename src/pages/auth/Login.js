import React from "react";
import Index from "../../components/MuiIndex";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  //** Navigate to home screen */
  const onNavigate = () => {
    navigate("/home");
  };

  return (
    <Index.Box>
      <h1>Login page</h1>
      <Index.Button variant="contained" onClick={onNavigate}>
        Home Page
      </Index.Button>
    </Index.Box>
  );
};

export default Login;
