import {axiosInstance} from "../config/axiosInstance";
const useLogout = () => {
  const logout = async () => {
    try {
      const response=await axiosInstance.post("/gw/logout",
        {},
      )
      return response;
    } catch (error) {
  }
  };
  return logout;
};
export default useLogout;
