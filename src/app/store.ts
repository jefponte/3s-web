import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import eventReducer from "../features/events/eventSlice";

export const store = configureStore({
  reducer: {
    events: eventReducer
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
