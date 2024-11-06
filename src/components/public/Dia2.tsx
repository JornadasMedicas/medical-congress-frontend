import React from 'react';
import Grid from '@mui/material/Grid2';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function createData(
    hour: string,
    description: string,
    color: string,
    fontweight: string,
    description2: string,
    color2: string,
    fontweight2: string
) {
    return { hour, description, color, fontweight, description2, color2, fontweight2 };
}

const rows = [
    createData('', 'ÁREA MEDICINA', 'rgba(59, 167, 248, 0.7)', 'bold', 'ÁREA ESTOMATOLOGÍA', 'rgba(168, 89, 60, 0.6)', 'bold'),
    createData('', 'MEDICINA INTERNA', 'rgba(59, 167, 248, 0.4)', 'bold', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('7:30 - 8:00 AM', 'REGISTRO', 'rgba(59, 167, 248, 0.2)', 'bold', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('8:00 - 8:30 AM', '"TROMBOCITOPENIA INMUNE PRIMARIA RESISTENTE A TRATAMIENTO"', 'rgba(59, 167, 248, 0.2)', 'bold', 'REGISTRO', 'rgba(168, 89, 60, 0.2)', 'bold'),
    createData('', 'DR. HÉCTOR ULISES ONOFRE ESCUTIA', 'rgba(59, 167, 248, 0.2)', '', '', 'rgba(168, 89, 60, 0.2)', ''), 
    createData('', 'MÉDICO INTERNISTA HEMATÓLOGO', 'rgba(59, 167, 248, 0.2)', '', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('8:30 - 9:00 AM', '"EVOLUCIÓN  DEL TRATAMIENTO ARTRITIS REUMATOIDE"', 'rgba(59, 167, 248, 0.2)', 'bold', 'BIENVENIDA', 'rgba(168, 89, 60, 0.2)', 'bold'),
    createData('', 'DR.VÍCTOR MANUEL GIL MARTINEZ', 'rgba(59, 167, 248, 0.2)', '', 'C.D.E.O. VIANEY MORALES ANGUIANO', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'MEDICO INTERNISTA REUMATÓLOGO DEL CAE', 'rgba(59, 167, 248, 0.2)', '', 'JEFA DEL SERVICIO DE ESTOMATOLOGÍA DEL CAE', 'rgba(168, 89, 60, 0.2)', ''),
    createData('9:00 - 9:30 AM', '"URGENCIAS ENDOCRINOLOGICAS"', 'rgba(59, 167, 248, 0.2)', 'bold', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'DR. RAFAEL LÓPEZ CRUZ', 'rgba(59, 167, 248, 0.2)', '', '"FACTORES ASOCIADOS A COMPLICACIONES DE DISTRACCIÓN OSTEOGÉTICA MAXILAR EN PACIENTES CON ANTECEDENTES DE LABIO Y PALADAR HENDIDO"', 'rgba(168, 89, 60, 0.2)', 'bold'),
    createData('', 'MÉDICO INTERNISTA ENDOCRINÓLOGO', 'rgba(59, 167, 248, 0.2)', '', 'HECTOR IVÁN CARRIZALES LLANAS R4', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'EPIDEMIOLOGÍA', 'rgba(59, 167, 248, 0.4)', 'bold', 'C.M.F. DEL CAE', 'rgba(168, 89, 60, 0.2)', ''),
    createData('9:30 - 10:00 AM', '"RESISTENCIA ANTIMICROBIANA: UN DESAFIO CRECIENTE"', 'rgba(59, 167, 248, 0.2)', 'bold', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'DRA. ALEJANDRA DE JESUS CORTES RAMIREZ', 'rgba(59, 167, 248, 0.2)', '', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'JEFA DE LA UNIDAD DE VIGILANCIA EPIDEMILOGICA HOSPITALARIA DEL CAE', 'rgba(59, 167, 248, 0.2)', '', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('10:00 - 10:30 AM', 'RECESO', 'rgba(59, 167, 248, 0.2)', 'bold', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'GENÉTICA', 'rgba(59, 167, 248, 0.4)', 'bold', '"REACCIONES ADVERSAS A MEDICAMENTOS EN CAVIDAD ORAL"', 'rgba(168, 89, 60, 0.2)', 'bold'),
    createData('10:30 - 11:00 AM', '"DE LA INSERTIDUMBRE AL DIAGNÓSTICO: REVOLUCIONANDO EL MANEJO DE ENFERMEDADES RARAS EN EL CAE"', 'rgba(59, 167, 248, 0.2)', 'bold', 'C.D.O. TANIA CHÁVEZ PRIEGO', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'DRA. ELIZABETH ACOSTA FERNANDEZ', 'rgba(59, 167, 248, 0.2)', '', 'JEFA DEL SERVICIO DE PATOLOGÍA DEL CAE', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'MÉDICO ESPECIALISTA EN GENÉTICA', 'rgba(59, 167, 248, 0.2)', '', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'URGENCIAS', 'rgba(59, 167, 248, 0.4)', 'bold', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('11:00 - 11:30 AM', '"DIAGNÓSTICO Y TRATAMIENTO DE ARAÑAS VENENOSAS EN MÉXICO"', 'rgba(59, 167, 248, 0.2)', 'bold', 'COFFE BREAK', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'DR. NATANEL DEL ANGÉL GONZÁLEZ', 'rgba(59, 167, 248, 0.2)', '', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'JEFE DEL CENTRO TOXOLÓGICO, HOSPITAL DE ALTA ESPECIALIDAD BICENTENARIO', 'rgba(59, 167, 248, 0.2)', '', '', 'rgba(168, 89, 60, 0.2)', 'bold'),
    createData('', 'UCI', 'rgba(59, 167, 248, 0.4)', 'bold', '', 'rgba(168, 89, 60, 0.2)', ''),
    createData('11:30 AM - 12:00 PM', '"MANEJO DE LA HEMORRAGIA MASIVA POSPARTO EN LA UCI"', 'rgba(59, 167, 248, 0.2)', 'bold', '"USO DE LA TECNOLOGÍA EN CIRUGÍA MAXILOFACIAL"', 'rgba(168, 89, 60, 0.2)', 'bold'),
    createData('', 'DR. EMMANUEL BETANCOURT VERA', 'rgba(59, 167, 248, 0.2)', '', 'C.M.F. ANTONIO ANGELES VELÁSQUEZ', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', '', 'rgba(59, 167, 248, 0.2)', '', 'ADSCRITO AL CAE', 'rgba(168, 89, 60, 0.2)', ''),
    createData('12:00 - 13:00 PM', 'CONFERENCIA MAGISTRAL "ACTUALIDADES EN MANEJO DE LA HEMORRAGIA CRÍTICA"', 'rgba(59, 167, 248, 0.2)', 'bold', 'PROFESOR ADJUNTO DE LA RESIDENCIA DE CMF Y PROFESOR TITULAR  DE UNIVERSIDAD ANÁHUAC', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'DRA. LESLIAN MEJIA GÓMEZ', 'rgba(59, 167, 248, 0.2)', '', '"DIAGNÓSTICO TEMPRANO EN ORTODONCIA"', 'rgba(168, 89, 60, 0.2)', 'bold'),
    createData('', 'HOSPITAL GENERAL DE LA CDMX', 'rgba(59, 167, 248, 0.2)', '', 'C.D.E.O. ADRIANA TORRES JIMÉNEZ', 'rgba(168, 89, 60, 0.2)', ''),
    createData('13:00 - 13:30 PM', '"FARMACIA HOSPITALARIA COMO SERVICIO CLINICO"', 'rgba(59, 167, 248, 0.2)', 'bold', 'PROFESOR TITULAR DE LA UNIVERIDAD AHÁHUAC', 'rgba(168, 89, 60, 0.2)', ''),
    createData('', 'MFC. PATRICIA MOLINA PRIOR', 'rgba(59, 167, 248, 0.2)', '', '', '', ''),
    createData('', 'JEFA DEL DEPARTAMENTO DE FARMACIA HOSPITALARIA', 'rgba(59, 167, 248, 0.2)', '', '', '', ''),
    //MÓDULO QUÍMICOS
    createData('', 'ÁREA QUÍMICOS', 'rgba(117, 186, 117, 0.9)', 'bold', '', '', ''),
    createData('', 'HEMOSTASIA', 'rgba(117, 186, 117, 0.6)', 'bold', '', '', ''),
    createData('15:00 - 15:45 PM', 'MÁS ALLÁ DE LA RUTINA: CAPACIDADES DE UN LABORATORIO DE HEMOSTASIA', 'rgba(117, 186, 117, 0.2)', 'bold', '', '', ''),
    createData('', 'Q. BRENDA ZUÑIGA ', 'rgba(117, 186, 117, 0.2)', '', '', '', ''),
    createData('15:45 - 16:30 PM', 'SAF COMO PATOLOGÍA TROMBOTICA CASTASTRÓFICA', 'rgba(117, 186, 117, 0.2)', 'bold', '', '', ''),
    createData('', 'DR. FERNANDO HERNÁNDEZ', 'rgba(117, 186, 117, 0.2)', '', '', '', ''),
    createData('16:30 - 17:00 PM', 'PREGUNTAS ', 'rgba(117, 186, 117, 0.2)', 'bold', '', '', ''),
    createData('', 'DR. FERNANDO HERNÁNDEZ', 'rgba(117, 186, 117, 0.2)', '', '', '', ''),
    createData('', 'AID', 'rgba(117, 186, 117, 0.6)', 'bold', '', '', ''),
    createData('17:00 - 17:45 PM', 'INTEGRANDO EL DIAGNÓSTICO DE SAF: EL ROL DE LOS ANTICUERPOS', 'rgba(117, 186, 117, 0.2)', 'bold', '', '', ''),
    createData('', 'DR. RAMIRO VERA', 'rgba(117, 186, 117, 0.2)', '', '', '', ''),
    createData('17:45 - 18:30 PM', 'EL ESTADO DEL ARTE: CAPACIDADES DE UN LABORATORIO INTEGRADO DE AID', 'rgba(117, 186, 117, 0.2)', 'bold', '', '', ''),
    createData('', 'BIÓLOGO VIRGILIO GONZÁLEZ', 'rgba(117, 186, 117, 0.2)', '', '', '', ''),
    createData('18:30 - 19:00 PM', 'PREGUNTAS ', 'rgba(117, 186, 117, 0.2)', 'bold', '', '', ''),
    createData('', 'DR. RAMIRO VERA', 'rgba(117, 186, 117, 0.2)', '', '', '', ''),
    createData('18:20 - 20:10 PM', 'CLAUSURA DR. JUAN GERARDO NEME KURI SUBDIRECTOR ENSEÑANZA CAE. DR. RAFAEL LUCIO', 'rgba(117, 186, 117, 0.2)', 'bold', '', '', ''),
];

export const Dia2 = () => {
    return (
        <Grid container size={12} sx={{}}>
            <TableContainer className={'animate__animated animate__fadeIn'}>
                <Table sx={{ border: 'none' }}>
                    <caption>*EL CONTENIDO DEL PROGRAMA SE ENCUENTRA A EXPENSAS DE CAMBIO SIN PREVIO AVISO</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' colSpan={1} sx={{ width: '140px' }}></TableCell>
                            <TableCell align='center' colSpan={4} sx={{ color: 'background.default', fontWeight: 'bold' }} >VIERNES</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.description}>
                                <TableCell component="th" scope="row" sx={{ padding: '6px', borderTop: 'none', borderBottom: 'none' }}>
                                    {row.hour}
                                </TableCell>
                                <TableCell align="center" sx={{ backgroundColor: row.color, fontWeight: row.fontweight, padding: '6px', margin: 0 }}>{row.description}
                                </TableCell>
                                <TableCell align="center" sx={{ backgroundColor: row.color2, fontWeight: row.fontweight2, padding: '6px', margin: 0 }}>{row.description2}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}
