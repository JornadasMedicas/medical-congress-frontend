import { chemicalsModule, medicineModule, nursingModule, stomatologyModule } from "./moduleImages2023"
import { jornadas2023, jornadas2024, medicImg, medicImg3 } from "./images"
import { bioeticWorkshop, stomatologyWorkshop } from "./workshopImages2023"
import { JornadasValuesInterface, RegistFormInterface } from "../interfaces/IRegistForm"

//Begin homepage data
export const workshops: string[] = ['Cirugía Maxilofacial', 'Paladar Hendido', 'Cuidados Paliativos', 'Restauración Interproximales']

export const bannersTrayectoria = [
    { img: jornadas2023 }
    /* { img: jornadas2024 } */
]

export const infoTrayectoria = [
    {
        year: '2023',
        title: 'Primeras Jornadas Postpandemia ¿Qué aprendimos y hacia dónde vamos?',
        host: 'Hotel Gamma Nubara',
        location: 'Av. Adolfo Ruiz Cortines 912 Col, U.H. del Bosque, 91017 Xalapa-Enríquez, Ver',
        date: 'Del 23 al 25 de Noviembre',
        modules: ['Medicina', 'Químicos', 'Enfermería', 'Estomatología'],
        workshops: ['Cirugía Maxilofacial', 'Paladar Hendido', 'Cuidados Paliativos', 'Restauración Interproximales'],
        image: medicImg,
        index: 0
    }
    /* {
        year: '2024',
        title: 'Logros y Retos del CAE a sus 35 Años de su Fundación',
        host: 'Auditorio "La Calera"',
        location: 'Av. Libertad, Esquina Adalberto Tejada, 91300 Banderilla, Ver',
        date: 'Del 21 al 23 de Noviembre',
        modules: ['Medicina', 'Químicos', 'Enfermería', 'Estomatología'],
        workshops: ['Por definir'],
        image: medicImg3,
        index: 1
    } */
]

type EventsInfo = {
    name: string;
    img: string;
    responsiveWidth: string;
    width: string;
}[];

export const infoModules: { [key: string]: EventsInfo } = {
    '2023': [
        {
            name: 'Medicina',
            img: medicineModule,
            responsiveWidth: '100%',
            width: '55%'
        },
        {
            name: 'Químicos',
            img: chemicalsModule,
            responsiveWidth: '100%',
            width: '55%'
        },
        {
            name: 'Enfermería',
            img: nursingModule,
            responsiveWidth: '100%',
            width: '55%'
        },
        {
            name: 'Estomatología',
            img: stomatologyModule,
            responsiveWidth: '100%',
            width: '55%'
        }
    ]
}

export const infoWorkshops: { [key: string]: EventsInfo } = {
    '2023': [
        {
            name: 'Cirugía Maxilofacial',
            img: stomatologyWorkshop,
            responsiveWidth: '75%',
            width: '28%'
        },
        {
            name: 'Paladar Hendido',
            img: stomatologyWorkshop,
            responsiveWidth: '75%',
            width: '28%'
        },
        {
            name: 'Cuidados Paliativos',
            img: bioeticWorkshop,
            responsiveWidth: '100%',
            width: '28%'
        },
        {
            name: 'Restauración Interproximales',
            img: stomatologyWorkshop,
            responsiveWidth: '75%',
            width: '28%'
        }
    ]
}

//Begin registry page data
export const categorias = [
    'Estudiante (Anahuac)',
    'Estudiante (UV)',
    'Estudiante (otras universidades)',
    'Profesionista Independiente',
    'Profesionista CAE',
    'Profesionista SESVER',
    'Profesionista IMSS',
    'Profesionista ISSTE',
    'Profesionista PEMEX',
    'Profesionista SEDENA',
    'Médico Residente CAE',
    'Médico Residente SESVER',
    'Médico Residente IMSS',
    'Médico Residente ISSSTE'
]

export const modulos = [ //!IMPORTANT update every year
    'Medicina',
    'Enfermería',
    'Químicos',
    'Estomatología'
]

export const text: any = (values: RegistFormInterface) => {
    return {
        title: 'IMPORTANTE',
        html: '<div style="text-align: left;"><b>Verifique sus datos antes de enviar el formulario. Su constancia de participación será enviada a su correo electrónico con los datos proporcionados al finalizar el evento.</b></div><hr>' +
            '<div style="text-align: left;">' +
            '<b>Categoría:</b> ' + values.categoria + '<br>' +
            '<b>Acrónimo:</b> ' + values.acronimo + '<br>' +
            '<b>Nombre:</b> ' + values.nombre + ' ' + values.apellidos + '<br>' +
            `<b>RFC:</b> ${values.rfc === '' ? '<b style="color: red;">No aplica</b>' : values.rfc}` + '<br>' +
            '<b>Correo Electrónico:</b> ' + values.correo + '<br>' +
            '<b>Teléfono:</b> ' + values.tel + '<br>' +
            '<b>Ciudad:</b> ' + values.ciudad + '<br>' +
            `<b>Dependencia:</b> ${values.dependencia === '' ? '<b style="color: red;">No aplica</b>' : values.dependencia}` + '<br>' +
            `<b>Módulo:</b> ${values.modulo !== '' ? `<b style="color: red;">${values.modulo}</b>` : '<b style="color: red;">No aplica</b>'}` + '<br>' +
            `<b>Talleres:</b>
            <br>${values.t1.checked === false && values.t2.checked === false && values.t3.checked === false && values.t4.checked === false ? '<b style="color: red;">No aplica</b>' : ''}
            <br>${values.t1.checked === true ? values.t1.name : ''}
            <br>${values.t2.checked ? values.t2.name : ''}
            <br>${values.t3.checked === true ? values.t3.name : ''}
            <br>${values.t4.checked === true ? values.t4.name : ''}` + '<br>' +
            '</div>' +
            '<hr><b>¡El Centro de Alta Especialidad Dr. Rafael Lucio no se hace responsable por datos mal proporcionados!</b>',
        icon: 'warning',
        confirmButtonColor: '#fbb373',
        confirmButtonText: 'Entendido',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar'
    }
}

export const initValuesFormJornadas: RegistFormInterface = { //!IMPORTANT CHANGE WORKSHOPS INFO EVERY EDITION
    categoria: 'Estudiante (Anahuac)',
    acronimo: '',
    nombre: '',
    apellidos: '',
    rfc: '',
    correo: '',
    tel: '',
    ciudad: '',
    dependencia: '',
    modulo: '',
    t1: {
        checked: false,
        name: 'Estrategias Integradas'
    },
    t2: {
        checked: false,
        name: 'taller2'
    },
    t3: {
        checked: false,
        name: 'taller3'
    },
    t4: {
        checked: false,
        name: 'taller4'
    }
}

export const initValuesFormJornadasErrors: JornadasValuesInterface = {
    categoria: {
        error: false,
        msg: 'Este campo es necesario'
    },
    acronimo: {
        error: false,
        msg: 'Este campo es necesario'
    },
    nombre: {
        error: false,
        msg: 'Este campo es necesario'
    },
    apellidos: {
        error: false,
        msg: 'Este campo es necesario'
    },
    rfc: {
        error: false,
        msg: 'Este campo es necesario'
    },
    correo: {
        error: false,
        msg: 'Este campo es necesario'
    },
    tel: {
        error: false,
        msg: 'Este campo es necesario'
    },
    ciudad: {
        error: false,
        msg: 'Este campo es necesario'
    },
    dependencia: {
        error: false,
        msg: 'Este campo es necesario'
    },
    modulo: {
        error: false,
        msg: 'Este campo es necesario'
    }
}

//Begin adminPage data
export const talleresFiltros = [ //!IMPORTANT update every year - doesn't affect backend
    {
        id: 1,
        nombre: 'Estrategias Integradas'
    }
]

export const modulosFiltros = [ //!IMPORTANT update every year - doesn't affect backend
    {
        id: 5,
        nombre: 'Medicina'
    },
    {
        id: 6,
        nombre: 'Enfermería'
    },
    {
        id: 7,
        nombre: 'Químicos'
    },
    {
        id: 8,
        nombre: 'Estomatología'
    }
]