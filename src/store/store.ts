import { configureStore } from "@reduxjs/toolkit";
import { trayectoriaSlice } from "./slices/trayectoria";
import { sectionsSlice } from "./slices/sections";
import { modalSlice } from "./slices/modal";
import { adminSlice } from "./slices/admin";

export const store = configureStore({
    reducer: {
        admin: adminSlice.reducer,
        trayectoria: trayectoriaSlice.reducer,
        section: sectionsSlice.reducer,
        modal: modalSlice.reducer
    }
})