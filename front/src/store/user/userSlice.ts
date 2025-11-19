import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName: string | null;
  isLoggedIn: boolean;
  loginError: string | null;
  logoutError: string | null;

}

const initialState: UserState = {
  userName: null,
  isLoggedIn: false,
  loginError: null,
  logoutError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    clearUserData: (state) => {
      state.userName = null;
      state.isLoggedIn = false;
    },
    setIsLoggedIn:(state)=>{
      state.isLoggedIn=true;
    },
clearIsLoggedIn:(state)=>{
      state.isLoggedIn=false;
    },
    setLoginError: (state, action: PayloadAction<string>) => {
        state.loginError = action.payload;
    },
    clearLoginError: (state) => {
        state.loginError = null;
    },
    setLogoutError: (state, action: PayloadAction<string>) => {
        state.logoutError = action.payload;
    },
    clearLogoutError: (state) => {
        state.logoutError = null;
    },
  },
});

export const { setUserData,clearUserData,setLoginError,clearLoginError,setLogoutError,clearLogoutError,setIsLoggedIn,clearIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;
