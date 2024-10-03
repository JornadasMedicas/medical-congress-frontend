import { JornadasValuesInterface, RegistFormInterface } from "../interfaces/RegistForm"
import { initValuesFormJornadasErrors } from "./data";

function validateEmail(email: string) {

    // Get our input reference.
    let emailField = email

    // Define our regular expression.
    var validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

    // Using test we can check if the text match the pattern
    if (validEmail.test(emailField)) {
        return true;
    } else {
        return false;
    }
}

export const validateJornadasFields = ({...data} : RegistFormInterface) => {
    let errors: JornadasValuesInterface = initValuesFormJornadasErrors;
    let isOk: boolean = false;

    if (data.acronimo === "") {
        errors = { ...errors, acronimo: { ...errors.acronimo, error: true } }
    } else if (!data.acronimo.trim().endsWith('.')) {
        errors = { ...errors, acronimo: { error: true, msg: 'El acrónimo debe terminar en punto (.)' } }
    }

    if (data.nombre === "") {
        errors = { ...errors, nombre: { ...errors.nombre, error: true } }
    }

    if (data.apellidos === "") {
        errors = { ...errors, apellidos: { ...errors.apellidos, error: true } }
    }

    if (!validateEmail(data.correo)) {
        errors = { ...errors, correo: { ...errors.correo, error: true, msg: "El correo electrónico no es válido" } }
    }

    if (data.tel === '') {
        errors = { ...errors, tel: { ...errors.tel, error: true } }
    } else if (data.tel.length !== 10) {
        errors = { ...errors, tel: { ...errors.tel, error: true, msg: "El numero telefónico es incorrecto (ej. 228XXXXXXX)" } }
    } else if (isNaN(parseInt(data.tel))) {
        errors = { ...errors, tel: { ...errors.tel, error: true, msg: "El numero telefónico debe ser numérico" } }
    }

    if (data.ciudad === '') {
        errors = { ...errors, ciudad: { ...errors.ciudad, error: true } }
    }

    let isOK: boolean = true;
    for (const [key, value] of Object.entries(errors)) {
        if (value.error) {
            isOK = false;
        }
    }

    return {
        isOk,
        errors
    }
}