import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PropsGlobalModal } from "../../interfaces/IModal";

const initialState: PropsGlobalModal = {
    props: {
        open: false,
        name: '',
        args: null,
        width: ''
    }
}

export const modalSlice = createSlice({
    name: 'Modal',
    initialState,
    reducers: {
        openModalProps: (state, action: PayloadAction<any>) => {
            state.props = action.payload;
        },
        closeModalProps: (state, action: PayloadAction<null>) => {
            state.props = initialState.props;
        }
    }
});

export const {
    openModalProps,
    closeModalProps
} = modalSlice.actions;