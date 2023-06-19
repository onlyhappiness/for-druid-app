import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// 로그인 회원 정보
export const me = createAsyncThunk('auth/login', () => {});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
  },
  reducers: {
    setPrincipal: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setPrincipal} = authSlice.actions;

export default authSlice.reducer;
