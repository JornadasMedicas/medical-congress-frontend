export interface PropsGetAssistants {
    limit: string;
    page: string;
    email: string;
    module: string;
    workshop: string;
}
export interface PropsGetAssistantInfo {
    id: number;
    acronimo: string;
    categoria: string;
    ciudad: string;
    correo: string;
    nombre: string;
    tel: string;
    jrn_evento: PropsJrnEventoTable[]
}

export interface PropsJrnEventoTable {
    modulo: string;
    isRegisteredT1: boolean;
    isRegisteredT2: boolean;
    isRegisteredT3: boolean;
    isRegisteredT4: boolean;
    isAssistDay1: boolean;
    isAssistDay2: boolean;
    isAssistDay3: boolean;
    isAssistT1: boolean;
    isAssistT2: boolean;
    isAssistT3: boolean;
    isAssistT4: boolean;
}

export interface ReqAssistantInfo {
    msg: string;
    ok: boolean;
    data: PropsGetAssistantInfo;
}

export interface ReqAssistants {
    msg: string;
    ok: boolean;
    data: PropsGetAssistantsInterface[];
}

export interface PropsGetAssistantsInterface {
    id: number;
    acronimo: string;
    nombre: string;
    correo: string;
    tel: string;
    created_at: string;
}

export interface ReduxJornadasAdmin {
    assistantsTable: PropsReduxAssistantsTable;
}

export interface PropsReduxAssistantsTable {
    tablePage: number;
    totalRows: number;
    loading: boolean;
    filters: PropsReduxAssistantsFilters;
}

export interface PropsGetAssistantsFilters {
    limit: string;
    page: number;
    email: string;
    module: string;
    workshop: string;
}

export interface PropsGetCountAssistantsFilters {
    email: string;
    module: string;
    workshop: string;
}

export interface PropsReduxAssistantsFilters {
    email: string;
    module: string;
    workshop: string;
}

export interface ReqAssistantsAutocompleteInterface {
    id: number | null;
    nombre: string;
    correo: string | null;
}

export interface ReqAssistantsAutocomplete {
    ok: boolean;
    msg: string;
    data: ReqAssistantsAutocompleteInterface[]
}