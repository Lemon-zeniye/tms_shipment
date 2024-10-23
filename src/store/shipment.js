import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // Import uuid for unique ID generation

const initialState = {
  shipmentItems: [],
  pickUpLocations: [],
  dropOffLocations: [],
};

const shipmentSlice = createSlice({
  name: "shipments",
  initialState,
  reducers: {
    // CREATE
    addShipmentItem: (state, action) => {
      state.shipmentItems.push({ ...action.payload, id: uuidv4() });
    },
    addPickUpLocation: (state, action) => {
      state.pickUpLocations.push({ ...action.payload, id: uuidv4() });
    },
    addDropOffLocation: (state, action) => {
      state.dropOffLocations.push({ ...action.payload, id: uuidv4() });
    },

    // READ
    getShipmentItems: (state) => state.shipmentItems,
    getPickUpLocations: (state) => state.pickUpLocations,
    getDropOffLocations: (state) => state.dropOffLocations,

    // UPDATE
    updateShipmentItem: (state, action) => {
      const index = state.shipmentItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.shipmentItems[index] = {
          ...state.shipmentItems[index],
          ...action.payload,
        };
      }
    },
    updatePickUpLocation: (state, action) => {
      const index = state.pickUpLocations.findIndex(
        (location) => location.id === action.payload.id
      );
      if (index !== -1) {
        state.pickUpLocations[index] = {
          ...state.pickUpLocations[index],
          ...action.payload,
        };
      }
    },
    updateDropOffLocation: (state, action) => {
      const index = state.dropOffLocations.findIndex(
        (location) => location.id === action.payload.id
      );
      if (index !== -1) {
        state.dropOffLocations[index] = {
          ...state.dropOffLocations[index],
          ...action.payload,
        };
      }
    },

    // DELETE
    deleteShipmentItem: (state, action) => {
      state.shipmentItems = state.shipmentItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    deletePickUpLocation: (state, action) => {
      state.pickUpLocations = state.pickUpLocations.filter(
        (location) => location.id !== action.payload.id
      );
    },
    deleteDropOffLocation: (state, action) => {
      state.dropOffLocations = state.dropOffLocations.filter(
        (location) => location.id !== action.payload.id
      );
    },
  },
});

export const selectShipmentItems = (state) => state.shipments.shipmentItems;
export const selectPickUpLocations = (state) => state.shipments.pickUpLocations;
export const selectDropOffLocations = (state) =>
  state.shipments.dropOffLocations;

export const {
  addShipmentItem,
  addPickUpLocation,
  addDropOffLocation,
  getShipmentItems,
  getPickUpLocations,
  getDropOffLocations,
  updateShipmentItem,
  updatePickUpLocation,
  updateDropOffLocation,
  deleteShipmentItem,
  deletePickUpLocation,
  deleteDropOffLocation,
} = shipmentSlice.actions;
export default shipmentSlice.reducer;
