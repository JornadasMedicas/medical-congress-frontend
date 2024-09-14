import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../store/slices/sections';

export const Contacto = () => {
    const dispatch = useDispatch();

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: false,
        threshold: 0.1,
        onChange: (inView: boolean) => { //adjust to not trigger more than once per view
            if (inView) {
                inView && dispatch(setActiveSection('Contacto'));
            }
        }
    });

    return (
        <Grid container sx={{ m: 0, p: 0, overflow: 'hidden' }}>
            <Grid size={{ md: 6, xs: 12 }} sx={{ height: { md: '100vh', xs: 'auto' }, pb: { xs: '2vh' }, display: { md: 'flex', xs: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '80%' }}>
                    <Typography fontSize={'20px'} fontFamily={'sans-serif'} textAlign={'justify'} fontWeight={500} letterSpacing={1}>
                        Para cualquier consulta relacionada al evento, por favor completa el formulario de contacto o comunícate con las subdirección de Enseñanza del Centro de Alta Especialidad Dr. Rafael Lucio al telefono 228-814-4500 Ext. 116.
                    </Typography>
                    <Typography fontSize={'20px'} fontFamily={'sans-serif'} textAlign={'justify'} fontWeight={500} letterSpacing={1}>
                        Nos comprometemos a atender tu solicitud a la mayor brevedad posible. Gracias por tu interés.
                    </Typography>
                </Box>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: 'center', height: 'auto' }}>
                <Box ref={ref2} className={inView2 ? 'animate__animated animate__fadeInUp' : ''} sx={{ mt: '7vh' }}>
                    <Divider sx={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: { md: '30px', xs: '25px', color: '#9e3832' }, width: { md: '50%', xs: '80%' }, m: 'auto' }}>
                        CONTACTO
                    </Divider>
                </Box>
                <Box sx={{ width: { md: '70%', xs: '85%' }, m: 'auto', height: '85%', pl: { md: 10 }, pr: { md: 10 }, pb: { xs: 5 } }}>
                    <Box sx={{ width: { xs: '100%' }, m: 'auto', mt: 2, display: { md: 'none', xs: 'block' } }}>
                        <Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'} textAlign={'justify'}>
                            Para cualquier consulta relacionada al evento, por favor completa el formulario de contacto o comunícate con las subdirección de Enseñanza del Centro de Alta Especialidad Dr. Rafael Lucio al telefono 228-814-4500 Ext. 116.
                        </Typography>
                        <Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'} textAlign={'justify'}>
                            Nos comprometemos a atender tu solicitud a la mayor brevedad posible. Gracias por tu interés.
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: { md: 'auto', xs: '100%' }, height: 'auto', borderRadius: 5, mt: 3, border: '1px solid #cc7969'
                    }}
                    >
                        <Grid container sx={{ height: '100%', overflow: 'hidden', flexDirection: { xs: "column", md: "row" } }}>
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
