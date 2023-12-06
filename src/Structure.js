import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Structure = () => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/signin");
  }, []);

  return <Outlet />;
};

export default Structure;
