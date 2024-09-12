import { configureStore } from "@reduxjs/toolkit";
import { trayectoriaSlice } from "./slices/trayectoria";

export const store = configureStore({
    reducer: {
        trayectoria: trayectoriaSlice.reducer
    }
})