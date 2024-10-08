import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxJornadasSlides } from "../../interfaces/IReduxTrayectoria";

const initialState: ReduxJornadasSlides = { //ajustar al año inicial que se quiere mostrar en el slider de las jornadas
    slide: {
        year: '2023',
        title: 'Primeras Jornadas Postpandemia ¿Qué aprendimos y hacia donde vamos?',
        host: 'Hotel Gamma Nubara',
        location: 'Av. Adolfo Ruiz Cortines 912 Col, U.H. del Bosque, 91017 Xalapa-Enríquez, Ver.',
        date: 'Del 23 al 25 de Noviembre',
        modules: ['Medicina', 'Químicos', 'Enfermería', 'Estomatología'],
        workshops: ['Cirugía Maxilofacial', 'Paladar Hendido', 'Cuidados Paliativos', 'Restauración Interproximales'],
        index: 0
    }
}

export const trayectoriaSlice = createSlice({
    name: 'Trayectoria',
    initialState,
    reducers: {
        setJornadasSlide: (state, action: PayloadAction<any>) => {
            state.slide = action.payload;
        }
    }
});

export const {
    setJornadasSlide
} = trayectoriaSlice.actions;