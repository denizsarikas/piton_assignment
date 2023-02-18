import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    rememberMe: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setToken: (state, action) => {
        state.token = action.payload;
      },
      setRememberMe: (state, action) => {
        state.rememberMe = action.payload;
      },
    },
  });

  export const selectToken = state => state.auth.token;
  export const selectRemember = state => state.auth.rememberMe;

  export const { setToken, setRememberMe } = authSlice.actions

  export default authSlice.reducer;