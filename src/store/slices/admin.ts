import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxJornadasAdmin } from "../../interfaces/IAdmin";

const initialState: ReduxJornadasAdmin = {
    assistantsTable: {
        tablePage: 0,
        totalRows: 0,
        loading: false,
        filters: {
            email: '',
            module: '',
            workshop: ''
        }
    }
}

export const adminSlice = createSlice({
    name: 'Admin',
    initialState,
    reducers: {
        setAssistantsTableAction: (state, action: PayloadAction<any>) => {
            state.assistantsTable = {
                ...state.assistantsTable,
                [action.payload.key]: action.payload.value
            }
        },
        setAssistantsTableActionFilters: (state, action: PayloadAction<any>) => {
            state.assistantsTable.filters = {
                ...state.assistantsTable.filters,
                [action.payload.key]: action.payload.value
            }
        },
        manageAssistantsTableActionFilters: (state, action: PayloadAction<any>) => {
            state.assistantsTable.filters = {
                ...state.assistantsTable.filters,
                ...action.payload
            }
        },
    }
});

export const {
    setAssistantsTableAction,
    setAssistantsTableActionFilters,
    manageAssistantsTableActionFilters
} = adminSlice.actions