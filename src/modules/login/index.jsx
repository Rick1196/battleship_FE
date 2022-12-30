import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import GoogleAuthentication from "../../components/firebaseAuthentication/googleAuthentication";
import { SessionContext } from "../../components/sessionWrapper/sessionWrapper";

export const MustBeAnonimus = ({ children }) => {
  const user = useContext(SessionContext);
  if (user) {
    return <Navigate to="/menu" replace />;
  } else {
    return children;
  }
};

const Login = () => {
  return (
    <div>
      <GoogleAuthentication />
    </div>
  );
};

export default Login;
