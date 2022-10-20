import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { token: localStorage.getItem("token") ? true : false };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
