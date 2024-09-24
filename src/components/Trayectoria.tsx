import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography, useMediaQuery } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ItemCareerCarousel } from './ItemCareerCarousel';
import { useInView } from 'react-intersection-observer';
import { bannersTrayectoria, infoModules, infoTrayectoria } from '../helpers/data';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxJornadasSlidesSelector } from '../interfaces/ReduxTrayectoria';
import { setJornadasSlide } from '../store/slices/trayectoria';
import { setActiveSection } from '../store/slices/sections';
import { useNavigate } from 'react-router-dom';
import { medicImg } from '../helpers/images';
import { PropsGlobalModalInterface } from '../interfaces/Modal';
import { openModalProps } from '../store/slices/modal';
import ModalGlobal from './ui/ModalGlobal';

export const Trayectoria = () => {
    const dispatch = useDispatch();
    const { slide } = useSelector((state: ReduxJornadasSlidesSelector) => state.trayectoria);
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const navigate = useNavigate();

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const { ref: ref2 } = useInView({//section change
        triggerOnce: false,
        threshold: 0.6,
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

    const openModal = (item: string) => {

        const data: any = infoModules[slide.year];

        const payload: PropsGlobalModalInterface = {
            open: true,
            name: item,
            args: { item, data },
            width: responsive ? '100%' : '80%'
        }

        dispatch(openModalProps(payload));
    };

    return (
        <Grid container ref={ref2}>
            <Grid size={responsive ? 12 : 6} sx={{ textAlign: 'center', height: 'auto', backgroundColor: 'background.default', overflow: 'hidden', pb: 5 }}>
                <Box ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''} sx={{ mt: '3vh', visibility: inView ? 'visible' : 'hidden' }}>
                    <Divider sx={{
                        fontFamily: 'sans-serif', fontWeight: 700, fontSize: responsive ? '25px' : '30px', color: '#ffffff', width: responsive ? '80%' : '47%', m: 'auto', "&::before, &::after": { borderColor: "whitesmoke" }
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
            <Grid size={responsive ? 12 : 6} sx={{ textAlign: 'center', height: 'auto', position: 'relative' }}>
                <Box sx={{ mt: '3vh' }}>
                    <Typography letterSpacing={1} fontFamily={'sans-serif'} fontWeight={700} sx={{ color: 'secondary.main', fontSize: responsive ? '50px' : '60px' }}>
                        {slide.year}
                    </Typography>
                </Box>
                <Box sx={{ width: '85%', pt: 2, m: 'auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: responsive ? 2 : 3.5 }}>
                    <Typography letterSpacing={0.5} fontSize={responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
                        <b>Título: </b> {slide.title}
                    </Typography>
                    <Typography letterSpacing={0.5} fontSize={responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
                        <b>Lugar: </b> {slide.host}
                    </Typography>
                    <Typography letterSpacing={0.5} fontSize={responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
                        <b>Ubicación: </b> {slide.location}
                    </Typography>
                    <Typography letterSpacing={0.5} fontSize={responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
                        <b>Fecha:</b> {slide.date}
                    </Typography>
                    <Typography letterSpacing={0.5} fontSize={responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
                        <b>Módulos:</b>
                    </Typography>
                    <List sx={{ m: 0, p: 0 }} dense={true}>
                        {
                            slide.modules.map((item) => (
                                <ListItem
                                    key={item}
                                >
                                    <Box sx={{
                                        display: 'flex', transition: 'all 0.3s ease', '&:hover': {
                                            transition: 'all 0.3s ease',
                                            transform: 'translateX(-20px) scale(1.2)'
                                        }
                                    }}>
                                        <ListItemAvatar>
                                            <ArrowForwardIosIcon sx={{ color: 'secondary.main' }} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            onClick={(e) => openModal(item)}
                                            primary={item}
                                            sx={{
                                                '.MuiListItemText-primary': {
                                                    fontSize: '18px',
                                                },
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </Box>
                                </ListItem>
                            ))
                        }
                    </List>
                    <Typography letterSpacing={0.5} fontSize={responsive ? '18px' : '20px'} fontFamily={'sans-serif'}>
                        <b>Talleres:</b>
                    </Typography>
                    <List sx={{ m: 0, p: 0 }} dense={true}>
                        {
                            slide.workshops.map((item) => (
                                <ListItem
                                    key={item}
                                >
                                    <Box sx={{
                                        display: 'flex', transition: 'all 0.3s ease', '&:hover': {
                                            transition: 'all 0.3s ease',
                                            transform: 'translateX(-20px) scale(1.2)'
                                        }
                                    }}>
                                        <ListItemAvatar>
                                            <ArrowForwardIosIcon sx={{ color: 'secondary.main' }} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        onClick={(e) => openModal(item)}
                                            primary={item}
                                            sx={{
                                                '.MuiListItemText-primary': {
                                                    fontSize: '18px',
                                                },
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </Box>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
                <img alt='medic1' style={{ position: 'absolute', display: responsive ? 'none' : 'block', filter: 'drop-shadow(0px 0px 10px grey)', bottom: 0, right: 0, maxWidth: '55%', height: 'auto', zIndex: 0 }} src={`data:image/png;base64,${medicImg}`}></img>
            </Grid>
            <ModalGlobal />
        </Grid>
    )
}
