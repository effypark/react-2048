import {
  combineReducers,
  configureStore,
  PayloadAction,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";

const reducer = (state: any, action: PayloadAction<string>) => {
  return combineReducers({
    // e.g. 게임 보드 슬라이스
    // [boardSlice.name]: boardSlice.reducer,
  })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer,
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
