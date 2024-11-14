import React from 'react'
import Grid from '@mui/material/Grid2';
import Carousel from 'react-material-ui-carousel';
import { ItemHomeCarousel, items } from './ItemHomeCarousel';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../../store/slices/sections';
import { useNavigate } from 'react-router-dom';

export const Inicio = () => {
    const dispatch = useDispatch();
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const navigate = useNavigate();

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
        onChange: (inView: boolean) => {
            if (inView) {
                inView && dispatch(setActiveSection('Inicio'));
                navigate(`/?section=Inicio`, { replace: true });
            }
        }
    });

    return (
        <Grid container columns={12} sx={{ display: 'flex', minHeight: responsive ? 'auto' : '100vh', flexDirection: 'column' }}>
            <Grid size={12} sx={{ textAlign: 'center', minHeight: responsive ? '46.5vh' : '45vh' }}>
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
            <Grid size={12} sx={{ textAlign: 'center', minHeight: '45vh', alignItems: 'center', justifyContent: 'center' }}>
                <Box ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''} sx={{ visibility: inView ? 'visible' : 'hidden' }}>
                    <Typography fontFamily={'sans-serif'} fontWeight={700} sx={{ color: 'secondary.main', fontSize: responsive ? '25px' : '33px' }}>
                        ¡BIENVENIDOS A LAS JORNADAS MÉDICAS!
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', padding: responsive ? 4 : 8, minHeight: '45vh', alignItems: 'center' }}>
                    <Typography fontFamily={'sans-serif'} fontWeight={500} textAlign={'justify'} letterSpacing={1} lineHeight={responsive ? 'auto' : 2} sx={{ color: 'secondary.main', fontSize: responsive ? '18px' : '20px' }}>
                        Es un honor darles la bienvenida a este congreso tan especial, donde celebramos 35 años de logros, colaboración y avances en el campo de la salud de Veracruz. Este aniversario no solo marca un hito en nuestra historia, sino que también nos brinda la oportunidad de reflexionar sobre nuestro recorrido y mirar hacia el futuro con renovada esperanza y determinación.
                        A lo largo de estos 35 años, hemos enfrentado numerosos desafíos, pero también hemos alcanzado metas significativas gracias al esfuerzo y dedicación de cada uno de ustedes. Este congreso es un testimonio de nuestro compromiso continuo con la excelencia y la innovación.
                        Quiero expresar mi más profundo agradecimiento a todos los que han contribuido a este viaje: a nuestros directivos, por su apoyo incondicional; a los ponentes, por compartir su valioso conocimiento; y a todos los asistentes, por su entusiasmo y participación activa.
                        En este evento, no solo celebraremos nuestros logros pasados, sino que también exploraremos nuevas ideas y estrategias para enfrentar los retos futuros. Estoy seguro de que las discusiones y presentaciones que tendremos en los próximos días serán inspiradoras y fructíferas.
                        Cerramos este mensaje con un llamado a la acción: sigamos trabajando juntos, con pasión y dedicación, para construir un futuro aún más brillante. ¡Feliz 35 aniversario!
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
