import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PropsActiveSection } from "../../interfaces/ReduxTrayectoria";

const initialState: PropsActiveSection = {
    activeSection: ''
}

export const sectionsSlice = createSlice({
    name: 'Secciones',
    initialState,
    reducers: {
        setActiveSection: (state, action: PayloadAction<any>) => {
            state.activeSection = action.payload;
        }
    }
});

export const {
    setActiveSection
} = sectionsSlice.actions;