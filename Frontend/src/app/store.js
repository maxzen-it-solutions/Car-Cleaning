// // ✅ Correct: store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { apiService } from '../services/apiService';
// import { setupListeners } from '@reduxjs/toolkit/query'
// export const store = configureStore({
//   reducer: {
//     [apiService.reducerPath]: apiService.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiService.middleware),
// });
// setupListeners(store.dispatch)


// ✅ store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "../services/apiService";
import { forgotApi } from "../services/forgotApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    [forgotApi.reducerPath]: forgotApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiService.middleware)
      .concat(forgotApi.middleware),
});

// Enable refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);
