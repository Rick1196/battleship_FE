import React, { createContext } from "react";
import UseSessionListener from "../../hooks/useSessionListener";
export const SessionContext = createContext(null);
const SessionWrapper = ({ children }) => {
  console.log("session wrapper");
  const [session] = UseSessionListener();
  return (
    <SessionContext.Provider value={session.data}>
      {session.loading === false ? children : <div>Loading...</div>}
    </SessionContext.Provider>
  );
};

export default SessionWrapper;
