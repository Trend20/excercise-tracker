import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:null,
  email:'',
  username:'',
  password:'',
  isLoggedIn: false
}

// create slice
const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    checkUserStatus:(state, action) =>{
      state.isLoggedIn = action.payload;
    },
    login: (state, action) =>{
      state.user = action.payload;
    }, 
    signup: (state, action) =>{
      state.email = action.payload;
      state.username = action.payload;
      state.password = action.payload;
    },
    logout: (state, action) =>{
      state.user = null;
    }
  }
})

export const {checkUserStatus, login, signup, logout} = userSlice.actions;
export default userSlice.reducer;