import React from 'react'
import Grid from '@mui/material/Grid2';
import Carousel from 'react-material-ui-carousel';
import { ItemHomeCarousel, items } from './ItemHomeCarousel';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../store/slices/sections';
import { useNavigate } from 'react-router-dom';

export const Inicio = () => {
    const dispatch = useDispatch();
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const navigate = useNavigate();

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
        onChange: (inView: boolean) => { //adjust to not trigger more than once per view
            if (inView) {
                inView && dispatch(setActiveSection('Inicio'));
                navigate(`/?section=Inicio`, { replace: true });
            }
        }
    });

    return (
        <Grid container columns={12} sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
            <Grid size={12} sx={{ textAlign: 'center', height: responsive ? '46.5vh' : '45vh' }}>
                <Carousel
                    navButtonsAlwaysInvisible
                    animation='fade'
                    navButtonsWrapperProps={{
                        style: {
                            bottom: '0',
                            top: 'unset'
                        }
                    }}
                >
                    {items.map((item, i) => <ItemHomeCarousel key={i} item={item} />)}
                </Carousel>
            </Grid>
            <Grid size={12} sx={{ textAlign: 'center' }}>
                <Box ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''} sx={{ visibility: inView ? 'visible' : 'hidden' }}>
                    <Typography fontFamily={'sans-serif'} fontWeight={700} sx={{ color: 'secondary.main', fontSize: responsive ? '25px' : '30px' }}>
                        ¿QUÉ SON LAS JORNADAS MÉDICAS?
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
