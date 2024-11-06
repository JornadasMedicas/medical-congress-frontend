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
    createData('', 'GINECOLOGÍA', 'rgba(59, 167, 248, 0.4)', 'bold'),
    createData('7:30 - 8:00 AM', 'REGISTRO', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('8:00 - 8:45 AM', '"LINEAMIENTO DE EQUIPO DE RESPUESTA INMEDIATA OBSTÉTRICA"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DRA. SARAÍ GONZÁLEZ BONILLA', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'HOSPITAL DE GINECOLOGIA Y OSTETRICIA DEL IMIEM', 'rgba(59, 167, 248, 0.2)', ''),
    createData('09:00 - 9:45 AM', '"PUNTOS CLAVES EN EL DIAGNÓSTICO Y MANEJO DE SEPSSIS EN LA PACIENTE OBSTÉTRICA"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DRA. DULCE ALEJANDRA MEDINA CALDERÓN', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'MÉDICO RESIDENTE DEL HOSPITAL DE GINECOLOGÍA Y OBSTETRICIA DEL IMIEM', 'rgba(59, 167, 248, 0.2)', ''),
    createData('09:45 - 10:00 AM', 'RECESO', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('10:00 - 10:30 AM', 'INAUGURACIÓN', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'PEDIATRÍA', 'rgba(59, 167, 248, 0.4)', 'bold'),
    createData('10:30 - 11:00 AM', ' "MODELO EXITOSO EN LA SOBREVIDA DE LA GASTROSQUISIS"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DR. PASTOR ESCARCEGA FUJIGAKI', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'MEDICO CIRUJANO PEDIATRA DEL CAE', 'rgba(59, 167, 248, 0.2)', ''),
    createData('11:00 - 11:30 AM', '"MODULO PREVENTIVO PARA ANOMALIAS CONGENITAS EN DESENDIENTES DE PADRES CONSANGUINEOS" ', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DR. RAMÓN MORALES MARTINEZ', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'MÉDICO GENTISTA DEL CAE', 'rgba(59, 167, 248, 0.2)', ''),
    createData('11:30 AM - 12:00 PM', '"DENGUE CAMBIOS IMPORTANTES EN SU EVOLUCIÓN Y MANEJO"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DR. JOSE LUIS DÍAZ LUNA', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'MÉDICO INFECTÓLOGO PEDIATRA DEL CAE ', 'rgba(59, 167, 248, 0.2)', ''),
    createData('12:00 - 13:00 PM', '"CONFERENCIA MAGISTRAL EL ACTO MÉDICO, LA BIOÉTICA Y LAS RESPONSABILIDADES EN EL AMBITO CLÍNICO"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DR. ALFONSO LEONARDO GIL BALLESTEROS', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'TITULAR Y SOCIO COORDINADOR DEL ÁREA DE DERECHO SANITARIO', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'REGULATORIO Y ADMINISTRATIVO DE DIVERSAS FIRMAS JURÍDICAS', 'rgba(59, 167, 248, 0.2)', ''),
    createData('13:00 - 13:30 PM', '"SOBREVIDA DE LA PREMATUREZ EN EL CAE"', 'rgba(59, 167, 248, 0.2)', 'bold'),
    createData('', 'DRA. NAIDE VELES BLANCO', 'rgba(59, 167, 248, 0.2)', ''),
    createData('', 'MÉDICO NEONATÓLOGO PEDIATRA DEL CAE', 'rgba(59, 167, 248, 0.2)', ''),
    //MÓDULO ENFERMERÍA
    createData('', 'ÁREA ENFERMERÍA', 'rgba(245, 148, 92, 0.7)', 'bold'),
    createData('15:00 - 15:30 PM', 'REGISTRO', 'rgba(245, 148, 92, 0.2)', 'bold'),
    createData('15:30 - 15:45 PM', 'PALABRAS DE BIENVENIDA', 'rgba(245, 148, 92, 0.2)', 'bold'),
    createData('', 'MTRA. ARELI BLANCO PÉREZ', 'rgba(245, 148, 92, 0.2)', ''),
    createData('', 'COORDINADORA DE ENSEÑANZA EN ENFERMERÍA', 'rgba(245, 148, 92, 0.2)', ''),
    createData('15:45 - 16:45 PM', '"LOGROS Y RETOS DE INVESTIGACIÓN EN ENFERMERÍA"', 'rgba(245, 148, 92, 0.2)', 'bold'),
    createData('', 'DR. JAHAZIEL DÍAZ VALLEJO', 'rgba(245, 148, 92, 0.2)', ''),
    createData('', 'COORDINADOR DE INVESTIGACIÓN', 'rgba(245, 148, 92, 0.2)', ''),
    createData('16:45 - 17:45 PM', 'RESEÑA DEL CAE', 'rgba(245, 148, 92, 0.2)', 'bold'),
    createData('', 'MTRA. YOLANDA ADRIANO FABRE', 'rgba(245, 148, 92, 0.2)', ''),
    createData('', 'COORDINADORA DE CAPACITACIÓN Y EDUCACIÓN CONTINUA DEL CAE', 'rgba(245, 148, 92, 0.2)', ''),
    createData('17:45 - 19:00 PM', 'RECONOCIMIENTO A EX JEFAS DE ENFERMERIA', 'rgba(245, 148, 92, 0.2)', 'bold'),
    createData('18:45 - 19:00 PM', 'PALABRAS DE DESPEDIDA DE PARTE DEL DR. JUAN GERARDO NEME KURI', 'rgba(245, 148, 92, 0.2)', 'bold')
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
