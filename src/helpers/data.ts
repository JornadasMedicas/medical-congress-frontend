import { medicineModule } from "./careerImages"
import { chemicals, jornadas2023 } from "./images"

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

type ModuleInfo = {
    name: string;
    img: string;
}[];

export const infoModules: { [key: string]: ModuleInfo } = {
    '2023': [
        { 
            name: 'Medicina', 
            img: medicineModule 
        },
        { 
            name: 'Químicos', 
            img: 'asdada' 
        },
    ]
}