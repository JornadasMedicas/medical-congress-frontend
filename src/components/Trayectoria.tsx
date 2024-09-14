import React, { useState } from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ItemCareerCarousel } from './ItemCareerCarousel';
import { useInView } from 'react-intersection-observer';
import { bannersTrayectoria, infoTrayectoria } from '../helpers/data';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxJornadasSlidesSelector } from '../interfaces/ReduxTrayectoria';
import { setJornadasSlide } from '../store/slices/trayectoria';
import { setActiveSection } from '../store/slices/sections';

export const Trayectoria = () => {
    const dispatch = useDispatch();
    const { slide } = useSelector((state: ReduxJornadasSlidesSelector) => state.trayectoria);

    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        threshold: 0.3,
        onChange: (inView: boolean) => { //adjust to not trigger more than once per view
            if (inView) {
                inView && dispatch(setActiveSection('Trayectoria'));
            }
        }
    });

    const handleSlide = (now: number | undefined) => {
        const currentInfo = infoTrayectoria.filter((item) => now === item.index);
        dispatch(setJornadasSlide(currentInfo[0]));
    }

    return (
        <Grid container>
            <Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: 'center', height: 'auto', backgroundColor: 'rgba(183, 64, 42, 1)', overflow: 'hidden', pb: 7 }}>
                <Box ref={ref1} className={inView1 ? 'animate__animated animate__fadeInUp' : ''} sx={{ mt: '7vh' }}>
                    <Divider sx={{
                        fontFamily: 'sans-serif', fontWeight: 700, fontSize: { md: '30px', xs: '25px', color: '#ffffff' }, width: { md: '50%', xs: '80%' }, m: 'auto', "&::before, &::after": { borderColor: "whitesmoke" },
                    }}>
                        TRAYECTORIA
                    </Divider>
                </Box>
                <Box sx={{ width: '85%', m: 'auto', pt: 2 }}>
                    <Carousel
                        onChange={(now) => handleSlide(now)}
                        indicators={false}
                        index={slide.index}
                        navButtonsAlwaysVisible
                        fullHeightHover
                        autoPlay={false}
                        animation='fade'
                        navButtonsWrapperProps={{
                            style: {
                                bottom: '0',
                                top: 'unset'
                            }
                        }}
                    >
                        {bannersTrayectoria.map((item, i) => <ItemCareerCarousel key={i} item={item} />)}
                    </Carousel>
                </Box>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: 'center', height: { md: 'auto', xs: 'auto' }, pb: { xs: '2vh' } }}>
                <Box sx={{ mt: '7vh' }}>
                    <Typography fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: { md: '60px', xs: '50px' } }}>
                        {slide.year}
                    </Typography>
                </Box>
                <Box sx={{ width: '85%', pt: 2, m: 'auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: { md: 3.5, xs: 2 } }}>
                    <Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
                        Título: {slide.title}
                    </Typography>
                    <Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
                        Lugar: {slide.host}
                    </Typography>
                    <Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
                        Ubicación: {slide.location}
                    </Typography>
                    <Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
                        Fecha: {slide.date}
                    </Typography>
                    <Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
                        Módulos:
                    </Typography>
                    <List sx={{ m: 0, p: 0 }} dense={true}>
                        {
                            slide.modules.map((item) => (
                                <ListItem>
                                    <ListItemAvatar>
                                        <ArrowForwardIosIcon sx={{ color: '#b84026' }} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item}
                                        sx={{
                                            '.MuiListItemText-primary': {
                                                fontSize: '18px',
                                            }
                                        }}
                                    />
                                </ListItem>
                            ))
                        }
                    </List>
                    <Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
                        Talleres:
                    </Typography>
                    <List sx={{ m: 0, p: 0 }} dense={true}>
                        {
                            slide.workshops.map((item) => (
                                <ListItem>
                                    <ListItemAvatar>
                                        <ArrowForwardIosIcon sx={{ color: '#b84026' }} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item}
                                        sx={{
                                            '.MuiListItemText-primary': {
                                                fontSize: '18px',
                                            }
                                        }}
                                    />
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Grid>
        </Grid>
    )
}
