
import { authSlice } from './../features/auth/authSlice';
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { servicesApiSlice } from "../features/services/serviceSlice";
import { apiSlice } from "../features/api/apiSlice";
import polyglotSlice from '../features/polyglot/polyglotSlice';


export const store = configureStore({
  reducer: {
    polyglot: polyglotSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }

})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>



// Template Version
// import type { Action, ThunkAction } from "@reduxjs/toolkit"
// import { combineSlices, configureStore } from "@reduxjs/toolkit"
// import { setupListeners } from "@reduxjs/toolkit/query"
// import { counterSlice } from "../features/counter/counterSlice"
// import { quotesApiSlice } from "../features/quotes/quotesApiSlice"


// const rootReducer = combineSlices(counterSlice, quotesApiSlice)

// export type RootState = ReturnType<typeof rootReducer>
// export const makeStore = (preloadedState?: Partial<RootState>) => {
//   const store = configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware => {
//       return getDefaultMiddleware().concat(quotesApiSlice.middleware)
//     },
//     preloadedState,
//   })
//   setupListeners(store.dispatch)
//   return store
// }

// export const store = makeStore()
// export type AppStore = typeof store
// export type AppDispatch = AppStore["dispatch"]
// export type AppThunk<ThunkReturnType = void> = ThunkAction<
//   ThunkReturnType,
//   RootState,
//   unknown,
//   Action
// >
