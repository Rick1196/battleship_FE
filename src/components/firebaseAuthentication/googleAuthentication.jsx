import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebaseConfig";
import axios from "../../utils/axios";
const GoogleAuthentication = () => {
  const handleGoogleAuthentication = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const idToken = await auth.currentUser.getIdToken();
        await axios.post("authentication/login", { token: idToken });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return <button onClick={handleGoogleAuthentication}>Google login</button>;
};
export default GoogleAuthentication;
