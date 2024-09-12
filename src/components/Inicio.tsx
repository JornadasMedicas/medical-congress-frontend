import React from 'react'
import Grid from '@mui/material/Grid2';
import Carousel from 'react-material-ui-carousel';
import { ItemHomeCarousel, items } from './ItemHomeCarousel';
import { Box, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

export const Inicio = () => {

    const { ref: ref0, inView: inView0 } = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

    return (
        <Grid container columns={12} spacing={0} sx={{ justifyContent: 'center' }}>
            <Grid size={12} sx={{ textAlign: 'center' }}>
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
                <Box ref={ref0} className={inView0 ? 'animate__animated animate__fadeInUp' : ''}>
                    <Typography fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: { md: '30px', xs: '25px' } }}>
                        ¿QUÉ SON LAS JORNADAS MÉDICAS?
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
