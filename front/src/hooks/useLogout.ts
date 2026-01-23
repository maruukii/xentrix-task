import { axiosInstance } from "../config/axiosInstance";
import { setAccessToken } from "@/config/tokenStore";
import type { AppDispatch } from "@/store/store";
import { clearUserData } from "@/store/user/userSlice";

export const useLogout = (dispatch: AppDispatch) => {
  const logout = async () => {
    try {
     await axiosInstance.post("/auth/logout", {});

      dispatch(clearUserData());
      setAccessToken("");



    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return logout;
};
