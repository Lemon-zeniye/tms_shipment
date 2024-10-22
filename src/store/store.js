import { configureStore } from "@reduxjs/toolkit";
import { sampleApi } from "./api/sample-api";
import shipmentReducer from "./shipment";

export const store = configureStore({
  reducer: {
    [sampleApi.reducerPath]: sampleApi.reducer,
    shipments: shipmentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sampleApi.middleware),
});
