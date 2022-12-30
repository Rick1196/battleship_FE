import { useEffect, useState } from "react";
import io from "socket.io-client";
import global from "../config/globlal";
const useConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    const socket = io(global.backendUrl, { transports: ["websocket"] });
    socket.on("connect", () => {
      setIsConnected(true);
    });
    return () => {
      socket.off("connect");
    };
  }, []);
  return [isConnected];
};

export default useConnection;
