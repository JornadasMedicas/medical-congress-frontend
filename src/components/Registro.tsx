import React from 'react'
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { setActiveSection } from '../store/slices/sections';
import { useDispatch } from 'react-redux';

export const Registro = () => {
    const dispatch = useDispatch();

    const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.1,
        onChange: (inView: boolean) => { //adjust to not trigger more than once per view
            if (inView) {
                inView && dispatch(setActiveSection('Registro'));
            }
        }
	});

    return (
        <Grid container>
            <Typography ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''}>Regist Page</Typography>
        </Grid>
    )
}
