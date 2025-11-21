import {axiosInstance} from "../config/axiosInstance";
import {setAccessToken} from "@/config/tokenStore";
import type { AppDispatch } from "@/store/store";
import { clearUserData } from "@/store/user/userSlice";
const useLogout = (dispatch:AppDispatch) => {
  const logout = async () => {
    try {
      const response=await axiosInstance.post("/auth/logout",
        {},
      ).then(() => { window.location.href = "/" });  
      dispatch(clearUserData());
      setAccessToken("");
      return response;
    } catch (error) {
  }
  };
  return logout;
};
export default useLogout;
