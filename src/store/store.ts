import { configureStore } from "@reduxjs/toolkit";
import { trayectoriaSlice } from "./slices/trayectoria";
import { sectionsSlice } from "./slices/sections";

export const store = configureStore({
    reducer: {
        trayectoria: trayectoriaSlice.reducer,
        section: sectionsSlice.reducer
    }
})