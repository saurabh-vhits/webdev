import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageIndex from "../../assets/imageIndex";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  //** Navigate to home screen */
  const onNavigate = () => {
    navigate("/home");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${imageIndex.loginBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 600,
      }}
    >
      <div style={{ height: 600, backgroundColor: "rgba(0,0,0,0.5)" }}></div>
    </div>
  );
};

export default Login;
