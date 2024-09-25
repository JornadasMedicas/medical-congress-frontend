import { chemicalsModule, medicineModule, nursingModule, stomatologyModule } from "./moduleImages2023"
import { chemicals, jornadas2023 } from "./images"
import { bioeticWorkshop, stomatologyWorkshop } from "./workshopImages2023"

export const workshops: string[] = ['Cirugía Maxilofacial', 'Paladar Hendido', 'Cuidados Paliativos', 'Restauración Interproximales']

export const bannersTrayectoria = [
    { img: jornadas2023 },
    { img: chemicals }
]

export const infoTrayectoria = [
    {
        year: '2023',
        title: 'Primeras Jornadas Postpandemia ¿Qué aprendimos y hacia donde vamos?',
        host: 'Hotel Gamma Nubara',
        location: 'Av. Adolfo Ruiz Cortines 912 Col, U.H. del Bosque, 91017 Xalapa-Enríquez, Ver.',
        date: 'Del 23 al 25 de Noviembre',
        modules: ['Medicina', 'Químicos', 'Enfermería', 'Estomatología'],
        workshops: ['Cirugía Maxilofacial', 'Paladar Hendido', 'Cuidados Paliativos', 'Restauración Interproximales'],
        index: 0
    },
    {
        year: '2024',
        title: 'Por definir...',
        host: 'Por definir...',
        location: 'Por definir...',
        date: 'Por definir...',
        modules: ['Por definir'],
        workshops: ['Por definir'],
        index: 1
    }
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