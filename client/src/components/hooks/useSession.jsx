import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect } from "react";

export const useSession = () => {
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/success`,
          { withCredentials: true },
        );
        console.log(response.data);
        if (response.data.user) {
          login(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [login]);
  const { state, login, logout } = useContext(AuthContext);
  const isAuthenticated = state.isAuthenticated;

  return { isAuthenticated, login, logout };
};
