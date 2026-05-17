"use strict";
import { configureStore } from "@reduxjs/toolkit";

// Simple slice for theme or other global states if needed later
// For now, it's a placeholder to satisfy the "Redux" requirement
const uiInitialState = {
  theme: "dark",
  isMenuOpen: false,
};

const uiSlice = (state = uiInitialState, action: any) => {
  switch (action.type) {
    case "ui/toggleMenu":
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
