import { createSlice } from "@reduxjs/toolkit";

const BranchSlice = createSlice({
  name: "branch",
  initialState: {
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwMDU5ODI5NCwiZXhwIjoxNzAwNjg0Njk0fQ.tFylx0SSzrjsA8Y0Zg2R8o6d1fzFrP4NH-zpXBAM11M",
    branchId: null,
    role: null,
    branchIdSelectedByHeadAdmin: null,
    adminName:null,
    branchName:null
  },
  reducers: {
    setAuthData: (state, action) => {
      state.token = action.payload.Token;
      state.role = action.payload.Role;
      state.branchId = action.payload.BranchId;
    },
    setBranchIdSelectedByHeadAdmin: (state, action) => {
      state.branchIdSelectedByHeadAdmin = action.payload.id;
    },
    clearAuthData: (state) => {
      state.token = null;
      state.role = null;
      state.branchId = null;
      state.branchIdSelectedByHeadAdmin = null;
      state.adminName=null;
      state.branchName=null;
    },
    setAdminName:(state,action)=>{
      state.adminName=action.payload;
    },
    setBranchName:(state,action)=>{
      state.branchName=action.payload;
    }
  },
});

export const {setAdminName,setBranchName, clearAuthData, setAuthData, setBranchIdSelectedByHeadAdmin } =
  BranchSlice.actions;

export default BranchSlice.reducer;
