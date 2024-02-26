import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return null;
    }
  }, []);
  return children;
};

export default PrivateRoute;
