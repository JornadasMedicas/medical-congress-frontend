import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography, useMediaQuery } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ItemCareerCarousel } from './ItemCareerCarousel';
import { useInView } from 'react-intersection-observer';
import { bannersTrayectoria, infoTrayectoria } from '../helpers/data';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxJornadasSlidesSelector } from '../interfaces/ReduxTrayectoria';
import { setJornadasSlide } from '../store/slices/trayectoria';
import { setActiveSection } from '../store/slices/sections';
import { useNavigate } from 'react-router-dom';

export const Trayectoria = () => {
    const dispatch = useDispatch();
    const { slide } = useSelector((state: ReduxJornadasSlidesSelector) => state.trayectoria);
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const navigate = useNavigate();

    const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.25,
        onChange: (inView: boolean) => { //adjust to not trigger more than once per view
            if (inView) {
                dispatch(setActiveSection('Trayectoria'));
                navigate(`/?section=Trayectoria`, { replace: true });
            }
        }
	});

    const handleSlide = (now: number | undefined) => {
        const currentInfo = infoTrayectoria.filter((item) => now === item.index);
        dispatch(setJornadasSlide(currentInfo[0]));
    }

    return (
        <Grid container>
            <Grid ref={ref} size={responsive ? 12 : 6} sx={{ textAlign: 'center', height: 'auto', backgroundColor: 'rgba(183, 64, 42, 1)', overflow: 'hidden', pb: 5 }}>
                <Box className={inView ? 'animate__animated animate__fadeInUp' : ''} sx={{ mt: '3vh', visibility: inView ? 'visible' : 'hidden' }}>
                    <Divider sx={{
                        fontFamily: 'sans-serif', fontWeight: 700, fontSize: responsive ? '25px' : '30px', color: '#ffffff', width: responsive ? '80%' : '50%', m: 'auto', "&::before, &::after": { borderColor: "whitesmoke" }
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
            <Grid size={responsive ? 12 : 6} sx={{ textAlign: 'center', height: 'auto'}}>
                <Box sx={{ mt: '3vh' }}>
                    <Typography fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: responsive ? '50px' : '60px'}}>
                        {slide.year}
                    </Typography>
                </Box>
                <Box sx={{ width: '85%', pt: 2, m: 'auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: responsive ? 2 : 3.5 }}>
                    <Typography fontSize={ responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
                        Título: {slide.title}
                    </Typography>
                    <Typography fontSize={ responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
                        Lugar: {slide.host}
                    </Typography>
                    <Typography fontSize={ responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
                        Ubicación: {slide.location}
                    </Typography>
                    <Typography fontSize={ responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
                        Fecha: {slide.date}
                    </Typography>
                    <Typography fontSize={ responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
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
                    <Typography fontSize={ responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
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
