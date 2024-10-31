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
    createData('', 'GINECOLOGÍA', 'whitesmoke', 'bold'),
    createData('7:30 - 8:00 AM', 'REGISTRO', 'yellow', ''),
    createData('8:00 - 8:45 AM', '"LINEAMIENTO DE EQUIPO DE RESPUESTA INMEDIATA OBSTÉTRICA"', '', 'bold'),
    createData('', 'DRA. SARAÍ GONZÁLEZ BONILLA', '', ''),
    createData('', 'HOSPITAL DE GINECOLOGIA Y OSTETRICIA DEL IMIEM', '', ''),
    createData('09:00 - 9:45 AM', '"PUNTOS CLAVES EN EL DIAGNÓSTICO Y MANEJO DE SEPSSIS EN LA PACIENTE OBSTÉTRICA"', '', 'bold'),
    createData('', 'DRA. DULCE ALEJANDRA MEDINA CALDERÓN', '', ''),
    createData('', 'MÉDICO RESIDENTE DEL HOSPITAL DE GINECOLOGÍA Y OBSTETRICIA DEL IMIEM', '', ''),
    createData('09:45 - 10:00 AM', 'RECESO', 'yellow', ''),
    createData('10:00 - 10:30 AM', 'INAUGURACIÓN', 'yellow', ''),
    createData('', 'PEDIATRÍA', 'whitesmoke', 'bold'),
    createData('10:30 - 11:00 AM', ' "MODELO EXITOSO EN LA SOBREVIDA DE LA GASTROSQUISIS"', '', 'bold'),
    createData('', 'DR. PASTOR ESCARCEGA FUJIGAKI', '', ''),
    createData('', 'MEDICO CIRUJANO PEDIATRA DEL CAE', '', ''),
    createData('11:00 - 11:30 AM', '"MODULO PREVENTIVO PARA ANOMALIAS CONGENITAS EN DESENDIENTES DE PADRES CONSANGUINEOS" ', '', 'bold'),
    createData('', 'DR. RAMÓN MORALES MARTINEZ', '', ''),
    createData('', 'MÉDICO GENTISTA DEL CAE', '', ''),
    createData('11:30 AM - 12:00 PM', '"DENGUE CAMBIOS IMPORTANTES EN SU EVOLUCIÓN Y MANEJO"', '', 'bold'),
    createData('', 'DR. JOSE LUIS DÍAZ LUNA', '', ''),
    createData('', 'MÉDICO INFECTÓLOGO PEDIATRA DEL CAE ', '', ''),
    createData('12:00 - 13:00 PM', '"CONFERENCIA MAGISTRAL EL ACTO MÉDICO, LA BIOÉTICA Y LAS RESPONSABILIDADES EN EL AMBITO CLÍNICO"', 'rgba(245, 148, 92, 0.55)', 'bold'),
    createData('', 'LIC. ALFONSO LEONARDO GIL BALLESTEROS', '', ''),
    createData('', 'TITULAR Y SOCIO COORDINADOR DEL ÁREA DE DERECHO SANITARIO', '', ''),
    createData('', 'REGULATORIO Y ADMINISTRATIVO DE DIVERSAS FIRMAS JURÍDICAS', '', ''),
    createData('13:00 - 13:30 PM', '"SOBREVIDA DE LA PREMATUREZ EN EL CAE"', '', 'bold'),
    createData('', 'DRA. NAIDE VELES BLANCO', '', ''),
    createData('', 'MÉDICO NEONATÓLOGO PEDIATRA DEL CAE', '', ''),
    //MÓDULO ENFERMERÍA
    createData('', 'ÁREA ENFERMERÍA', 'text.secondary', 'bold'),
    createData('15:00 - 15:30 PM', 'REGISTRO', 'yellow', ''),
    createData('15:30 - 15:45 PM', 'PALABRAS DE BIENVENIDA POR PARTE DE MTRA. ARELI BLANCO PÉREZ', '', 'bold'),
    createData('', 'COORDINADORA DE ENSEÑANZA EN ENFERMERÍA', '', ''),
    createData('15:45 - 16:45 PM', '"LOGROS Y RETOS DE INVESTIGACIÓN EN ENFERMERÍA"', '', 'bold'),
    createData('', 'DR. JAHAZIEL DÍAZ VALLEJO', '', ''),
    createData('', 'COORDINADOR DE INVESTIGACIÓN', '', ''),
    createData('16:45 - 17:45 PM', 'RESEÑA DEL CAE PALABRAS POR PARTE DE LA MTRA. YOLANDA ADRIANO FABRE', '', 'bold'),
    createData('', 'COORDINADORA DE CAPACITACIÓN Y EDUCACIÓN CONTINUA DEL CAE', '', ''),
    createData('17:45 - 18:45 PM', 'RECONOCIMIENTO A EX JEFAS DE ENFERMERIA', '', 'bold'),
    createData('18:45 - 19:00 PM', 'PALABRAS DE DESPEDIDA DE PARTE DEL DR. JUAN GERARDO NEME KURI', '', 'bold'),
    createData('19:00 PM', 'BRINDIS', '', 'bold'),
];

export const Dia1 = () => {
    return (
        <Grid container size={12} sx={{}}>
            <TableContainer className={'animate__animated animate__fadeIn'}>
                <Table sx={{ border: 'none' }}>
                    <caption>*EL CONTENIDO DEL PROGRAMA SE ENCUENTRA A EXPENSAS DE CAMBIO SIN PREVIO AVISO</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' colSpan={1} sx={{ width: '140px' }}></TableCell>
                            <TableCell align='center' colSpan={4} sx={{ color: 'background.default', fontWeight: 'bold' }} >JUEVES</TableCell>
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
