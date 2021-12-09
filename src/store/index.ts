import { configureStore, combineReducers } from '@reduxjs/toolkit';

import users from './slices/users';
// import posts from './slices/posts';
// import comments from './slices/comments';

export const store = configureStore({
  reducer: combineReducers({
    users
    // posts,
    // comments
  })
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
