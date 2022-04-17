import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface IUser {
  member_id: number;
  member_firstname: string;
  member_lastname: string;
  member_username: string;
  member_password: string;
  member_email: string;
  member_date: string;
  member_status: string;
  member_profile: string;
}

const initialState: IUser = {
  member_id: -1,
  member_firstname: "",
  member_lastname: "",
  member_username: "",
  member_password: "",
  member_email: "",
  member_date: "",
  member_status: "",
  member_profile: "",
};

const userSlice = createSlice({
  name: "UserInfo",
  initialState: initialState,
  reducers: {
    isUserInfo: (state, action: PayloadAction<IUser>) => {
      state.member_id = action.payload.member_id;
      state.member_firstname = action.payload.member_firstname;
      state.member_lastname = action.payload.member_lastname;
      state.member_username = action.payload.member_username;
      state.member_password = action.payload.member_password;
      state.member_email = action.payload.member_email;
      state.member_date = action.payload.member_date;
      state.member_status = action.payload.member_status;
      state.member_profile = action.payload.member_profile;
    },
  },
});

export const { isUserInfo } = userSlice.actions;

export default userSlice.reducer;
