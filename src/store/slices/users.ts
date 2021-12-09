import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser, IUserPreview, IUsersState } from '../../types/user';

const initialState: IUsersState = {
  items: null,
  isLoading: false,
  error: null
};

export const counterSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    request: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    success: (state, action: PayloadAction<(IUser | IUserPreview)[]>) => {},
    failure: (state, action: PayloadAction<Error>) => {}
  }
});

// Action creators are generated for each case reducer function
export const { request, success, failure } = counterSlice.actions;

export default counterSlice.reducer;
