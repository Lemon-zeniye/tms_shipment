import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipmentItems: [],
  pickUpLocations: [],
  dropOffLocations: [],
};

const shipmentSlice = createSlice({
  name: "shipments",
  initialState,
  reducers: {
    addShipmentItem: (state, action) => {
      state.shipmentItems.push(action.payload);
    },
    addPickUpLocation: (state, action) => {
      state.pickUpLocations.push(action.payload);
    },
    addDropOffLocation: (state, action) => {
      state.dropOffLocations.push(action.payload);
    },
  },
});

export const selectShipmentItems = (state) => state.shipments.shipmentItems;
export const selectPickUpLocations = (state) => state.shipments.pickUpLocations;
export const selectDropOffLocations = (state) =>
  state.shipments.dropOffLocations;

// Selector to get pick-ups for a specific item
// export const selectPickUpsByItemId = (itemId) => (state) => {
//   const item = state.shipments.shipmentItems.find((item) => item.id === itemId);
//   return item ? item.pickUps : [];
// };

export const { addShipmentItem, addDropOffLocation, addPickUpLocation } =
  shipmentSlice.actions;
export default shipmentSlice.reducer;
