// const loginAction = createAction('login');
// const logoutAction = createAction('logout');

// const userReducers = createReducer({ user: null }, (builder) => {
//   builder.addCase(loginAction, (state, action) => state.user = action.payload)
//   builder.addCase(logoutAction, (state) => state.user = null)
// });

// export const login = loginAction;
// export const logout = logoutAction


import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state,action) => {
     state.user = action.payload;
    },
    logout: state => {
      state.user=null;
    },
    
  },
});

export const {login,logout} = userSlice.actions;
export const selectUser = state => state.user.user;
export default userSlice.reducer;