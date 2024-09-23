import { configureStore } from "@reduxjs/toolkit";
import { trayectoriaSlice } from "./slices/trayectoria";
import { sectionsSlice } from "./slices/sections";
import { modalSlice } from "./slices/modal";

export const store = configureStore({
    reducer: {
        trayectoria: trayectoriaSlice.reducer,
        section: sectionsSlice.reducer,
        modal: modalSlice.reducer
    }
})