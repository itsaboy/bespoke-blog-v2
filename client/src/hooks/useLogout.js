import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await fetch("/api/user/logout", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { logout };
};
