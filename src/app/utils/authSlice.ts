import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState { 
  isAuthenticated: boolean;
  token: string | null;
  permissions: any[];
  role_id: number | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  permissions: [],
  role_id: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ 
      isAuthenticated: boolean;  
      token: string; 
      permissions: string[]; 
      role_id?: number | null; 
    }>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
      state.permissions = action.payload.permissions;
      state.role_id = action.payload.role_id || null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.permissions = [];
      state.role_id = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;