import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { axiosInstance } from "../config/axiosInstance";
import { setUserData, clearUserData } from "../store/user/userSlice";
import {  setAccessToken } from "@/config/tokenStore";

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const verifyUser = async () => {
    try {      
      console.log("ran refresh")
      const refreshRes = await axiosInstance.get("/auth/refresh");
      setAccessToken(refreshRes.data.data.accessToken);
      const meResponse = await axiosInstance.get("/auth/me");
      dispatch(setUserData(meResponse.data.data.user));
    } catch (error) {
      dispatch(clearUserData());
    } finally {
      setLoading(false);
    }
  };

  if (!user.email ) verifyUser();
  else setLoading(false);
}, [user.email]);

  return {
    user,
    loading,
    isAuthenticated: user.isLoggedIn,
  };
};

export default useAuth;
