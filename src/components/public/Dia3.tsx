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
    createData('', 'ÁREA MEDICINA', 'rgba(59, 167, 248, 0.7)', 'bold'),
    createData('', 'CIRUGÍA', 'rgba(59, 167, 248, 0.4)', 'bold'),
    createData('7:30 - 8:00 AM', 'REGISTRO', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('8:00 - 8:30 AM', '"EXPERIENCIA QUIRÚRGICA INICIAL EN PACIENTES CON COVID 19"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DRA. ELIZBETH DURÁN JUNCO', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'MÉDICO RESIDENTE DEL CAE 4 GRADO', 'rgba(59, 167, 248, 0.2)', ''),
    createData('8:30 - 9:00 AM', '"PANORAMA ACTUAL EN EL DIAGNÓSTICO Y TRATAMIENTO DEL CANCER DE PROSTATA"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DR. HUMBERTO OLMEDO PÉREZ', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'MÉDICO URÓLOGO DEL CAE', 'rgba(59, 167, 248, 0.2)', ''),
    createData('9:00 - 9:30 AM', '"EL ARTE DE REPARAR CORAZONES: BREVE HISTORIA DE LA CIRUGÍA CARDIOTORÁCICA"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DR. GUILLERMO GASTELUM CONDE', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'MÉDICO CIRUJANO CARDIOTORÁCICO', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'TRAUMATOLOGÍA', 'rgba(59, 167, 248, 0.4)', 'bold'),
    createData('9:30 - 10:00 AM', '"SINDROME DE GOLDENHAR CON LUXACION UNIFACETARIA C3 C4"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DR. FERNANDO MONTES ESCOBEDO', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'MÉDICO RESIDENTE DEL CAE 4 GRADO', 'rgba(59, 167, 248, 0.2)', ''),
    createData('10:00 - 10:30 AM', 'RECESO', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('10:30 - 11:00 AM', '"DESACONDICIONAMIENTO FISICO-ASOCIADO A LA HOSPITALIZACIÓN"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DRA. LARISSA RÍOS MENDOZA', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'DRA. MARIA GUADALUPE CANO MARÍN', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', '"MEDICINA FÍSICA Y REHABILITACIÓN DEL ÁREA DE TRAUMATOLOGÍA DEL CAE"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('11:00 - 11:30 AM', '"PERSPECTIVA HISTÓRICA DEL CÁNCER DE MAMA EN MEXICO"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DR.ENRIQUE GUZMÁN GARCÍA', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'COORDINADOR CENTRO DE EVALUACIÓN DIAGNÓSTICA DE CANCER DE MAMA', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'NEFROLOGÍA', 'rgba(59, 167, 248, 0.4)', 'bold'),
    createData('11:30 - 12:00 AM', '"NEFROPATIA DIABÉTICA UNA ENTIDAD CADA VEZ MAS FRECUENTE"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DR. BENJAMIN CASTRO MIRANDA', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'JEFE DE NEFROLOGÍA DEL CAE', 'rgba(59, 167, 248, 0.2)', ''),
    createData('12:00 - 13:00 PM', 'CONFERENCIA MAGISTRAL: "PBM COMO ESTANDAR DE CALIDAD SALUD PÚBLICA Y ATENCIÓN CLÍNICA"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DR. ANGEL AUGUSTO PÉREZ CALATAYUD', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'CARDIOLOGÍA', 'rgba(59, 167, 248, 0.4)', 'bold'),
    createData('13:00 - 13:30 PM', '"HIPERTENSIÓN ARTERIAL LO QUE NO SE DEBE HACER"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DRA. LOURDES FIGUERAS GRAILLET', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'CARDIÓLOGA INTERVENCIONISTA DEL CECAN', 'rgba(59, 167, 248, 0.2)', ''),
    createData('13:30 PM', 'CLAUSURA', 'rgba(59, 167, 248, 0.2)', 'bold'),
];

export const Dia3 = () => {
    return (
        <Grid container size={12} sx={{}}>
            <TableContainer className={'animate__animated animate__fadeIn'}>
                <Table sx={{ border: 'none' }}>
                    <caption>*EL CONTENIDO DEL PROGRAMA SE ENCUENTRA A EXPENSAS DE CAMBIO SIN PREVIO AVISO</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' colSpan={1} sx={{ width: '140px' }}></TableCell>
                            <TableCell align='center' colSpan={4} sx={{ color: 'background.default', fontWeight: 'bold' }} >SÁBADO</TableCell>
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

