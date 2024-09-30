import React, { useState } from 'react'
import Grid from '@mui/material/Grid2';
import { useInView } from 'react-intersection-observer';
import { setActiveSection } from '../store/slices/sections';
import { useDispatch } from 'react-redux';
import { categorias, modulos } from '../helpers/data';
import { Divider, useMediaQuery } from '@mui/material';
import { navBarHeigth, navBarHeigthResponsive } from './Home';
import { Box } from '@mui/system';

export const Registro = () => {
    const dispatch = useDispatch();
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    /* const [errors, setErrors] = useState(); */

    const { ref, inView } = useInView({//regist typography
        triggerOnce: false,
        threshold: 0.1
    });

    /* const { ref: ref2 } = useInView({//section change
        triggerOnce: false,
        threshold: 0.6,
        onChange: (inView: boolean) => { //adjust to not trigger more than once per view
            if (inView) {
                inView && dispatch(setActiveSection('Contacto'));
                navigate(`/?section=Contacto`, { replace: true });
            }
        }
    }); */

    return (
        <Grid container sx={{ pt: responsive ? `${navBarHeigthResponsive}px` : `${navBarHeigth}px`, mt: 2 }}>
            <Grid size={12}>
                <Box ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''} sx={{ visibility: inView ? 'visible' : 'hidden', width: '100%' }}>
                    <Divider sx={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: responsive ? '25px' : '30px', color: 'secondary.main', width: responsive ? '80%' : '40%', m: 'auto' }}>
                        REGISTRO
                    </Divider>
                </Box>
            </Grid>
            <Grid size={12}>
                asdad
            </Grid>
        </Grid>
    )
}
