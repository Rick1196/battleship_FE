import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../sessionWrapper/sessionWrapper";

const ProtectedRoute = ({ children }) => {
  const session = useContext(SessionContext);
  return session ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
