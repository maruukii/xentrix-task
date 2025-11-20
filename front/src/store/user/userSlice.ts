import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  businessName: string | null;
  email: string | null;
  officeAddress?: string | null;
  postCode?: string | null;
  isLoggedIn: boolean;
  loginError: string | null;
  logoutError: string | null;

}

const initialState: UserState = {
  businessName: null,
  email: null,
  officeAddress: null,
  postCode: null,
  isLoggedIn: false,
  loginError: null,
  logoutError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.businessName = action.payload.businessName;
      state.email = action.payload.email;
      state.officeAddress = action.payload.officeAddress;
      state.postCode = action.payload.postCode;
      state.isLoggedIn = true;
    },
    clearUserData: (state) => {
      state.businessName = null;
      state.email = null;
      state.officeAddress = null;
      state.postCode = null;
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
