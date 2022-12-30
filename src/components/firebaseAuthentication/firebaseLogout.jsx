import { useCookies } from "react-cookie";
import { auth } from "../../config/firebaseConfig";
import axios from "../../utils/axios";

const FirebaseLogout = () => {
  const [cookies] = useCookies([]);
  const logout = () => {
    auth.signOut().then(async () => {
      await axios.post("/authentication/logout", {});
    });
  };
  return <button onClick={logout}>Logout</button>;
};

export default FirebaseLogout;
