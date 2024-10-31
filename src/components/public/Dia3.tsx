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
    createData('', 'CIRUGÍA', 'whitesmoke', 'bold'),
    createData('7:30 - 8:00 AM', 'REGISTRO', 'yellow', ''),
    createData('8:00 - 8:30 AM', '"EXPERIENCIA QUIRÚRGICA INICIAL EN PACIENTES CON COVID 19"', '', 'bold'),
    createData('', 'DRA. ELIZBETH DURÁN JUNCO', '', ''),
    createData('', 'MÉDICO RESIDENTE DEL CAE 4 GRADO', '', ''),
    createData('8:30 - 9:00 AM', '"PANORAMA ACTUAL EN EL DIAGNÓSTICO Y TRATAMIENTO DEL CANCER DE PROSTATA"', '', 'bold'),
    createData('', 'DR. HUMBERTO OLMEDO PÉREZ', '', ''),
    createData('', 'MÉDICO URÓLOGO DEL CAE', '', ''),
    createData('9:00 - 9:30 AM', '"EL ARTE DE REPARAR CORAZONES: BREVE HISTORIA DE LA CIRUGÍA CARDIOTORÁCICA"', '', 'bold'),
    createData('', 'DR. GUILLERMO GASTELUM CONDE', '', ''),
    createData('', 'MÉDICO CIRUJANO CARDIOTORÁCICO', '', ''),
    createData('', 'TRAUMATOLOGÍA', 'whitesmoke', 'bold'),
    createData('9:30 - 10:00 AM', '"SINDROME DE GOLDENHAR CON LUXACION UNIFACETARIA C3 C4"', '', 'bold'),
    createData('', 'DR. FERNANDO MONTES ESCOBEDO', '', ''),
    createData('', 'MÉDICO RESIDENTE DEL CAE 4 GRADO', '', ''),
    createData('10:00 - 10:30 AM', 'RECESO', 'yellow', ''),
    createData('10:30 - 11:00 AM', '"DESACONDICIONAMIENTO FISICO-ASOCIADO A LA HOSPITALIZACIÓN"', '', 'bold'),
    createData('', 'DRA. LARISSA RÍOS MENDOZA', '', ''),
    createData('', 'DRA. MARIA GUADALUPE CANO MARÍN', '', ''),
    createData('11:00 - 11:30 AM', '"MEDICINA FÍSICA Y REHABILITACIÓN DEL AREA DE TRAUMATOLOGÍA DEL CAE"', '', 'bold'),
    createData('', '"PERSPECTIVA HISTÓRICA DEL CANCER DE MAMA EN MEXICO"', '', 'bold'),
    createData('', 'DR.ENRIQUE GUZMÁN GARCÍA', '', ''),
    createData('', 'COORDINADOR CENTRO DE EVALUACIÓN DIAGNÓSTICA DE CANCER DE MAMA', '', ''),
    createData('', 'NEFROLOGÍA', 'whitesmoke', 'bold'),
    createData('11:30 - 12:00 AM', '"NEFROPATIA DIABÉTICA UNA ENTIDAD CADA VEZ MAS FRECUENTE"', '', 'bold'),
    createData('', 'DR. BENJAMIN CASTRO MIRANDA', '', ''),
    createData('', 'JEFE DE NEFROLOGÍA DEL CAE', '', ''),
    createData('12:00 - 13:00 PM', 'CONFERENCIA MAGISTRAL: USO DE ROTEM', 'rgba(245, 148, 92, 0.55)', 'bold'),
    createData('', 'CARDIOLOGÍA', 'whitesmoke', 'bold'),
    createData('13:00 - 13:30 PM', '"HIPERTENSIÓN ARTERIAL LO QUE NO SE DEBE HACER"', '', 'bold'),
    createData('', 'DRA. LOURDES FIGUERAS GRAILLET', '', ''),
    createData('', 'CARDIÓLOGA INTERVENCIONISTA DEL CECAN', '', ''),
    createData('13:30 PM', 'CLAUSURA', 'yellow', ''),
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

