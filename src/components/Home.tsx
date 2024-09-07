import { Box, Typography, createTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Carousel from 'react-material-ui-carousel'
import React from 'react'
import { ItemCarousel, items } from './ItemCarousel';

/* const font =  "'Quicksand', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: font
  }
}); */

export const Home = () => {
    return (
        <>
            <section id='carousel'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={0} sx={{ justifyContent: 'center' }}>
                        <Grid height={'44vh'} mt={'56px'} size={12} sx={{ textAlign: 'center' }}>
                            <Carousel
                                navButtonsWrapperProps={{
                                    style: {
                                        bottom: '0',
                                        top: 'unset'
                                    }
                                }}
                            >
                                {items.map((item, i) => <ItemCarousel key={i} item={item} />)}
                            </Carousel>
                        </Grid>
                        <Grid height={'50vh'} size={12} sx={{ textAlign: 'center' }}>
                            <Box sx={{ mt: 2 }}>
                                <Typography className='animate__animated animate__fadeInUp' fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: '30px' }}>
                                    ¿QUÉ SON LAS JORNADAS MÉDICAS?
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
            <section id='career'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={0} sx={{ justifyContent: 'center' }}>
                        <Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: 'center', height: { md: '94vh', xs: '88vh' } }}>
                            <Box sx={{ mt: 2 }}>
                                <Typography className='animate__animated animate__fadeInUp' fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: '30px' }}>
                                    TRAYECTORIA
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: 'center' }}>
                            {/* <Box sx={{ mt: 2 }}>
                                <Typography className='animate__animated animate__fadeInUp' fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: '30px' }}>
                                    TRAYECTORIA
                                </Typography>
                            </Box> */}
                        </Grid>
                    </Grid>
                </Box>
            </section>
            <section id='contact'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={0} sx={{ justifyContent: 'center' }}>
                        <Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: 'center', height: { md: '94vh', xs: '88vh' } }}>
                            <Box sx={{ mt: 2 }}>
                                <Typography className='animate__animated animate__fadeInUp' fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: '30px' }}>
                                    CONTACTO
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    )
}
