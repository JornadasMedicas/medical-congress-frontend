import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Button, Divider, TextField, Typography, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../store/slices/sections';
import { useNavigate } from 'react-router-dom';

export const Contacto = () => {
    const dispatch = useDispatch();
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const navigate = useNavigate();

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
        onChange: (inView: boolean) => { //adjust to not trigger more than once per view
            if (inView) {
                inView && dispatch(setActiveSection('Contacto'));
                navigate(`/?section=Contacto`, { replace: true });
            }
        }
    });

    return (
        <Grid container>
            <Grid size={responsive ? 12 : 6} sx={{ height: responsive ? 'auto' : '94vh', pb: responsive ? '2vh' : 0, display: responsive ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '80%' }}>
                    <Typography fontSize={'20px'} fontFamily={'sans-serif'} textAlign={'justify'} fontWeight={500} letterSpacing={1}>
                        Para cualquier consulta relacionada al evento, por favor completa el formulario de contacto o comunícate con las subdirección de Enseñanza del Centro de Alta Especialidad Dr. Rafael Lucio al telefono 228-814-4500 Ext. 116.
                    </Typography>
                    <Typography fontSize={'20px'} fontFamily={'sans-serif'} textAlign={'justify'} fontWeight={500} letterSpacing={1}>
                        Nos comprometemos a atender tu solicitud a la mayor brevedad posible. Gracias por tu interés.
                    </Typography>
                </Box>
            </Grid>
            <Grid size={responsive ? 12 : 6} sx={{ textAlign: 'center', height: responsive ? 'auto' : '94vh' }}>
                <Box ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''} sx={{ mt: '4vh', visibility: inView ? 'visible' : 'hidden' }}>
                    <Divider sx={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: responsive ? '25px' : '30px', color: '#9e3832', width: responsive ? '80%' : '50%', m: 'auto' }}>
                        CONTACTO
                    </Divider>
                </Box>
                <Box sx={{ width: responsive ? '90%' : '75%', m: 'auto', pl: { md: 10 }, pr: { md: 10 }, pb: responsive ? 5 : 0 }}>
                    <Box sx={{ width: responsive ? '100%' : 'auto', m: 'auto', mt: 2, display: responsive ? 'block' : 'none' }}>
                        <Typography fontSize={ responsive ? '18px' : '20px'} fontFamily={'sans-serif'} textAlign={'justify'}>
                            Para cualquier consulta relacionada al evento, por favor completa el formulario de contacto o comunícate con las subdirección de Enseñanza del Centro de Alta Especialidad Dr. Rafael Lucio al telefono 228-814-4500 Ext. 116.
                        </Typography>
                        <Typography fontSize={ responsive ? '18px' : '20px'} fontFamily={'sans-serif'} textAlign={'justify'}>
                            Nos comprometemos a atender tu solicitud a la mayor brevedad posible. Gracias por tu interés.
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: responsive ? '100%' : 'auto', height: 'auto', borderRadius: 5, mt: 3, border: '1px solid #cc7969'
                    }}
                    >
                        <Grid container sx={{ height: '100%', overflow: 'hidden', flexDirection: responsive ? 'column' : 'row' }}>
                            <Grid size={12} sx={{ height: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(90deg, rgba(222,141,127,1) 0%, rgba(179,66,45,1) 48%, rgba(200,96,77,1) 100%)', borderTopLeftRadius: 18, borderTopRightRadius: 15, pt: 3, pb: 3 }}>
                                <EmailIcon sx={{ width: 'auto', height: '60px', color: 'white' }} />
                            </Grid>
                            <Grid size={12} sx={{ p: 5, height: '85%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                                <Box>
                                    <Typography fontWeight={'bold'} sx={{ textAlign: 'left' }}>Nombre <b style={{ color: 'red' }}>*</b> </Typography>
                                    <TextField
                                        value={''}
                                        sx={{ width: '100%' }}
                                        size='small'
                                    />
                                </Box>
                                <Box>
                                    <Typography fontWeight={'bold'} sx={{ textAlign: 'left' }}>Teléfono <b style={{ color: 'red' }}>*</b> </Typography>
                                    <TextField
                                        value={''}
                                        sx={{ width: '100%' }}
                                        size='small'
                                    />
                                </Box>
                                <Box>
                                    <Typography fontWeight={'bold'} sx={{ textAlign: 'left' }}>Correo <b style={{ color: 'red' }}>*</b> </Typography>
                                    <TextField
                                        value={''}
                                        sx={{ width: '100%' }}
                                        size='small'
                                    />
                                </Box>
                                <Box>
                                    <Typography fontWeight={'bold'} sx={{ textAlign: 'left' }}>Asunto <b style={{ color: 'red' }}>*</b> </Typography>
                                    <TextField
                                        value={''}
                                        sx={{ width: '100%' }}
                                        size='small'
                                    />
                                </Box>
                                <Box>
                                    <Typography fontWeight={'bold'} sx={{ textAlign: 'left' }}>Descripción <b style={{ color: 'red' }}>*</b> </Typography>
                                    <TextField
                                        value={''}
                                        sx={{ width: '100%' }}
                                        size='medium'
                                    />
                                </Box>
                                <Box>
                                    <Button variant="outlined" startIcon={<SendIcon />} sx={{ color: 'black', borderColor: '#db897b'}}>
                                        Enviar
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
