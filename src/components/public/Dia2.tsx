import React from 'react';
import Grid from '@mui/material/Grid2';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function createData(
    hour: string,
    description: string,
    color: string,
    fontweight: string
) {
    return { hour, description, color, fontweight };
}

const rows = [
    createData('', 'ÁREA MEDICINA', 'text.secondary', 'bold'),
    createData('', 'MEDICINA INTERNA', 'whitesmoke', 'bold'),
    createData('7:30 - 8:00 AM', 'REGISTRO', 'yellow', ''),
    createData('8:00 - 8:30 AM', '"TROMBOCITOPENIA INMUNE PRIMARIA RESISTENTE A TRATAMIENTO"', '', 'bold'),
    createData('', 'DR. HÉCTOR ULISES ONOFRE ESCUTIA', '', ''),
    createData('', 'MÉDICO INTERNISTA HEMATOLOGO', '', ''),
    createData('8:30 - 9:00 AM', '"EVOLUCIÓN  DEL TRATAMIENTO ARTRITIS REUMATOIDE"', '', 'bold'),
    createData('', 'DR.VÍCTOR MANUEL GIL MARTINEZ', '', ''),
    createData('9:00 - 9:30 AM', '"URGENCIAS ENDOCRINOLOGICAS"', '', 'bold'),
    createData('', 'DR. RAFAEL LÓPEZ CRUZ', '', ''),
    createData('', 'MÉDICO INTERNISTA ENDOCRINÓLOGO', '', ''),
    createData('', 'EPIDEMIOLOGÍA', 'whitesmoke', 'bold'),
    createData('9:30 - 10:00 AM', '"RESISTENCIA ANTIMICROBIANA: UN DESAFIO CRECIENTE"', '', 'bold'),
    createData('', 'DRA. ALEJANDRA DE JESUS CORTES RAMIREZ', '', ''),
    createData('', 'JEFA DE LA UNIDAD DE VIGILANCIA EPIDEMILOGICA HOSPITALARIA DEL CAE', '', ''),
    createData('10:00 - 10:30 AM', 'RECESO', 'yellow', ''),
    createData('', 'GENÉTICA', 'whitesmoke', 'bold'),
    createData('10:30 - 11:00 AM', '"DE LA INSERTIDUMBRE AL DIAGNÓSTICO: REVOLUCIONANDO EL MANEJO DE ENFERMEDADES RARAS EN EL CAE"', '', 'bold'),
    createData('', 'DRA. ELIZABETH ACOSTA FERNANDEZ MÉDICO ESPECIALISTA EN GENÉTICA', '', ''),
    createData('', 'URGENCIAS', 'whitesmoke', 'bold'),
    createData('11:00 - 11:30 AM', '"DIAGNÓSTICO Y TRATAMIENTO DE ARAÑAS VENENOSAS EN MÉXICO"', '', 'bold'),
    createData('', 'DR. NATANEL DEL ANGÉL GONZÁLEZ', '', ''),
    createData('', 'JEFE DEL CENTRO TOXOLÓGICO, HOSPITAL DE ALTA ESPECIALIDAD BICENTENARIO', '', ''),
    createData('', 'UCI', 'whitesmoke', 'bold'),
    createData('11:30 AM - 12:00 PM', '"MANEJO DE LA HEMORRAGIA MASIVA POSPARTO EN LA UCI"', '', 'bold'),
    createData('', 'DR. EMMANUEL BETANCOURT VERA', '', ''),
    createData('12:00 - 13:00 PM', 'CONFERENCIA MAGISTRAL "ACTUALIDADES EN MANEJO DE LA HEMORRAGIA CRÍTICA"', 'rgba(245, 148, 92, 0.55)', 'bold'),
    createData('', 'DRA. LESLIAN MEJIA GÓMEZ', '', ''),
    createData('', 'HOSPITAL GENERAL DE LA CDMX', '', ''),
    createData('13:00 - 13:30 PM', '"FARMACIA HOSPITALARIA COMO SERVICIO CLINICO"', '', 'bold'),
    createData('', 'MFC. PATRICIA MOLINA PRIOR', '', ''),
    createData('', 'JEFA DEL DEPARTAMENTO DE FARMACIA HOSPITALARIA', '', ''),
    createData('', 'ÁREA QUÍMICOS', 'text.secondary', 'bold'),
    //MÓDULO QUÍMICOS
    createData('', 'HEMOSTASIA', 'whitesmoke', 'bold'),
    createData('15:00 - 15:45 PM', 'MÁS ALLÁ DE LA RUTINA: CAPACIDADES DE UN LABORATORIO DE HEMOSTASIA', '', 'bold'),
    createData('', 'PONIENTE PENDIENTE', '', ''),
    createData('15:45 - 16:30 PM', 'SAF COMO PATOLOGÍA TROMBOTICA CASTASTROFICA', '', 'bold'),
    createData('', 'DR. FERNANDO HERNÁNDEZ', '', ''),
    createData('16:30 - 17:00 PM', 'PREGUNTAS ', 'yellow', ''),
    createData('', 'DR. FERNANDO HERNÁNDEZ', '', ''),
    createData('', 'AID', 'whitesmoke', 'bold'),
    createData('17:00 - 17:45 PM', 'INTEGRANDO EL DIAGNÓSTICO DE SAF: EL ROL DE LOS ANTICUERPOS', '', 'bold'),
    createData('', 'DR. RAMIRO VERA', '', ''),
    createData('17:45 - 18:30 PM', 'EL ESTADO DEL ARTE: CAPACIDADES DE UN LABORATORIO INTEGRADO DE AID', '', 'bold'),
    createData('', 'BIÓLOGO VIRGILIO GONZÁLEZ', '', ''),
    createData('18:30 - 19:00 PM', 'PREGUNTAS ', 'yellow', ''),
    createData('', 'DR. RAMIRO VERA', '', ''),
    createData('18:20 - 20:10 PM', 'CLAUSURA DR. JUAN GERARDO NEME KURI SUBDIRECTOR ENSEÑANZA CAE. DR. RAFAEL LUCIO', '', 'bold'),
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
                                <TableCell align="center" sx={{ backgroundColor: row.color, fontWeight: row.fontweight, padding: '6px', margin: 0 }}>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}
