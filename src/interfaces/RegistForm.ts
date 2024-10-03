export interface RegistFormInterface {
    categoria: string;
    acronimo: string;
    nombre: string;
    apellidos: string;
    rfc: string | null;
    correo: string;
    tel: string;
    ciudad: string;
    dependencia: string | null;
    modulo: string | null;
}

export interface JornadasGeneralErrorsInterface {
    error: boolean;
    msg: string;
}

export interface JornadasValuesInterface {
    categoria: JornadasGeneralErrorsInterface;
    acronimo: JornadasGeneralErrorsInterface;
    nombre: JornadasGeneralErrorsInterface;
    apellidos: JornadasGeneralErrorsInterface;
    rfc: JornadasGeneralErrorsInterface;
    correo: JornadasGeneralErrorsInterface;
    tel: JornadasGeneralErrorsInterface;
    ciudad: JornadasGeneralErrorsInterface;
    dependencia: JornadasGeneralErrorsInterface;
    modulo: JornadasGeneralErrorsInterface;
}