import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseLogout from "../../../components/firebaseAuthentication/firebaseLogout";
import { SessionContext } from "../../../components/sessionWrapper/sessionWrapper";
const Menu = () => {
  const user = useContext(SessionContext);
  const navigate = useNavigate();
  return (
    <div>
      {user ? <FirebaseLogout /> : null}
      Menu
      <ol>
        <li>
          <button onClick={() => navigate("/play")}>Play</button>
        </li>
      </ol>
    </div>
  );
};
export default Menu;
