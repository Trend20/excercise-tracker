import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:'',
  isLoggedIn: false
}

// create slice
const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    checkUserStatus:(state, action) =>{
      state.isLoggedIn = action.payload;
    }
  }
})

export const {checkUserStatus} = userSlice.actions;
export default userSlice.reducer;