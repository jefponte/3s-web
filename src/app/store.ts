import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import serviceSlice from "../features/services/serviceSlice";

export const store = configureStore({
  reducer: {
    services: serviceSlice
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
