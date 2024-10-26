import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Button, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { globalUpdateAssistance } from '../../helpers/assistanceAlerts';

export const Asistencia = () => {
    const [moduleValues, setModuleValues] = useState({ qrdata: '', emaildata: '' });
    const [workshopValues, setWorkshopValues] = useState({ qrdata: '', emaildata: '' });
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    //congress assistance
    const manualAssistance = () => {
        const data = `${moduleValues.emaildata}|`;
        setModuleValues({ qrdata: '', emaildata: '' });
        globalUpdateAssistance(data, 'congreso');
    }

    useEffect(() => {
        const updateAssistance = async () => {
            try {
                let separated = moduleValues.qrdata.split("|").length - 1;

                if (separated === 1) {
                    setModuleValues({ qrdata: '', emaildata: '' });
                    globalUpdateAssistance(moduleValues.qrdata, 'congreso');
                }
            } catch (error) {
                // Se espera que este error ocurra, no hacer nada.
            }
        }

        updateAssistance();
    }, [moduleValues.qrdata]);

    //workshops assistance
    const manualWorkshopsAssistance = () => {
        const data = `${workshopValues.emaildata}|`;
        setWorkshopValues({ qrdata: '', emaildata: '' });
        globalUpdateAssistance(data, 'talleres');
    }

    useEffect(() => {
        
        const updateAssistance = async () => {
            try {
                let separated = workshopValues.qrdata.split("|").length - 1;

                if (separated === 1) {
                    setWorkshopValues({ qrdata: '', emaildata: '' });
                    globalUpdateAssistance(workshopValues.qrdata, 'talleres');
                }
            } catch (error) {
                // Se espera que este error ocurra, no hacer nada.
            }
        }

        updateAssistance();
    }, [workshopValues.qrdata]);

    return (
        <Grid container className='animate__animated animate__fadeIn' rowSpacing={3} columns={12} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid size={'auto'} sx={{ width: '100%' }}>
                <fieldset style={{ border: '2px inset #d6c09b', borderRadius: '20px', width: '100%' }}>
                    <legend style={{ margin: 'auto', fontSize: 24, paddingLeft: '1rem', paddingRight: '1rem' }}>
                    <h1 className='animate__animated animate__fadeIn' style={{ fontSize: 30 }}>
                            <strong style={{ color: '#b7402a' }}>C</strong>ongreso
                        </h1>
                    </legend>
                    <Grid size={12} sx={{ mt: 0, mb: 5, pb: 0 }}>
                        <Box sx={{ flexGrow: 1, marginTop: 0, marginBottom: 3 }}>
                            <Grid container rowSpacing={5} columns={12} sx={{ flexDirection: { xs: "column", md: "row" } }}>
                                <Grid size={6} sx={{ display: 'flex', justifyContent: 'center', width: responsive ? '100%' : '50%' }}>
                                    <TextField
                                        label='Registro QR'
                                        autoComplete='off'
                                        name='qrdata'
                                        value={moduleValues.qrdata}
                                        onChange={(e) => setModuleValues({ ...moduleValues, qrdata: e.target.value })}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <QrCodeScannerIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                        sx={{
                                            "& label.Mui-focused": {
                                                color: "#b7402a"
                                            },
                                            "& .MuiInput-underline:after": {
                                                borderBottomColor: "#b7402a"
                                            },
                                            width: '300px'
                                        }}
                                        variant="standard"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid size={6} sx={{ display: 'flex', justifyContent: 'center', width: responsive ? '100%' : '50%' }}>
                                    <TextField
                                        label='Registro Manual (email)'
                                        autoComplete='off'
                                        placeholder='asistente@ejemplo.com'
                                        name='email'
                                        value={moduleValues.emaildata}
                                        onChange={(e) => setModuleValues({ ...moduleValues, emaildata: e.target.value })}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonAddAlt1Icon />
                                                </InputAdornment>
                                            )
                                        }}
                                        sx={{
                                            "& label.Mui-focused": {
                                                color: "#b7402a"
                                            },
                                            "& .MuiInput-underline:after": {
                                                borderBottomColor: "#b7402a"
                                            },
                                            width: '250px'
                                        }}
                                        variant="standard"
                                        fullWidth
                                    />
                                    <Button
                                        disabled={moduleValues.emaildata === '' ? true : false}
                                        endIcon={<SendIcon />}
                                        variant='contained'
                                        onClick={manualAssistance}
                                        sx={{ backgroundColor: "#ca7757", ":hover": { backgroundColor: '#b7402a' }, marginBottom: 0, marginTop: 2, marginLeft: 1, width: '95px', height: '30px' }}
                                    >
                                        Enviar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </fieldset>
            </Grid>
            <Grid size={'auto'} sx={{ width: '100%' }}>
                <fieldset style={{ border: '2px inset #00665d', borderRadius: '20px', width: '100%' }}>
                    <legend style={{ margin: 'auto', fontSize: 24, paddingLeft: '1rem', paddingRight: '1rem' }}>
                        <h1 className='animate__animated animate__fadeIn' style={{ fontSize: 30 }}>
                            <strong style={{ color: '#b7402a' }}>T</strong>alleres
                        </h1>
                    </legend>
                    <Grid size={12} sx={{ mt: 0, mb: 5, pb: 0 }}>
                        <Box sx={{ flexGrow: 1, marginTop: 0, marginBottom: 3 }}>
                            <Grid container rowSpacing={5} columns={12} sx={{ flexDirection: { xs: "column", md: "row" } }}>
                                <Grid size={6} sx={{ display: 'flex', justifyContent: 'center', width: responsive ? '100%' : '50%' }}>
                                    <TextField
                                        label='Registro QR'
                                        autoComplete='off'
                                        name='qrdata2'
                                        value={workshopValues.qrdata}
                                        onChange={(e) => setWorkshopValues({ ...workshopValues, qrdata: e.target.value })}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <QrCodeScannerIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                        sx={{
                                            "& label.Mui-focused": {
                                                color: "#b7402a"
                                            },
                                            "& .MuiInput-underline:after": {
                                                borderBottomColor: "#b7402a"
                                            },
                                            width: '300px'
                                        }}
                                        variant="standard"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid size={6} sx={{ display: 'flex', justifyContent: 'center', width: responsive ? '100%' : '50%' }}>
                                    <TextField
                                        label='Registro Manual (email)'
                                        autoComplete='off'
                                        placeholder='asistente@ejemplo.com'
                                        name='email2'
                                        value={workshopValues.emaildata}
                                        onChange={(e) => setWorkshopValues({ ...workshopValues, emaildata: e.target.value })}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonAddAlt1Icon />
                                                </InputAdornment>
                                            )
                                        }}
                                        sx={{
                                            "& label.Mui-focused": {
                                                color: "#b7402a"
                                            },
                                            "& .MuiInput-underline:after": {
                                                borderBottomColor: "#b7402a"
                                            },
                                            width: '250px'
                                        }}
                                        variant="standard"
                                        fullWidth
                                    />
                                    <Button
                                        disabled={workshopValues.emaildata === '' ? true : false}
                                        endIcon={<SendIcon />}
                                        variant='contained'
                                        onClick={manualWorkshopsAssistance}
                                        sx={{ backgroundColor: "#ca7757", ":hover": { backgroundColor: '#b7402a' }, marginBottom: 0, marginTop: 2, marginLeft: 1, width: '95px', height: '30px' }}
                                    >
                                        Enviar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </fieldset>
            </Grid>
        </Grid>
    )
}
