import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "constants/definitions";

export interface Member {
  rotaractID: string;
  firstname: string;
  lastname: string;
  type: string;
  profilePicture: string;
}

interface MemberState {
  data: Member;
  loading: boolean;
  error: string;
}

const initialState: MemberState = {
  data: {
    rotaractID: "",
    firstname: "",
    lastname: "",
    type: "",
    profilePicture: "",
  },
  loading: false,
  error: "",
};

export const MemberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action: PayloadAction<Member>) => {
      state.data = action.payload;
    },
    clearMember: (state) => {
      state.data = {
        rotaractID: "",
        firstname: "",
        lastname: "",
        type: "",
        profilePicture: "",
      };
    },
  },
});

export const { setMember, clearMember } = MemberSlice.actions;
export default MemberSlice.reducer;
