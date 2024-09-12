import React from 'react'
import Grid from '@mui/material/Grid2';
import { Container, Typography } from '@mui/material';
import { gob_ver, marcaVera } from '../../helpers/images';

export const Footer = () => {

    return (
        <>
            <Grid sx={{ backgroundColor: 'rgba(254, 165, 0, 0.5)' }}>
                <Container maxWidth='xl' sx={{ padding: '10px' }}>
                    <Grid container sx={{ justifyContent: { xs: 'center' }, display: 'flex', gap: { md: 4, xs: 1 } }}>
                        <Grid sx={{ display: 'flex', textAlign: 'center' }}>
                            <img src={`data:image/png;base64,${gob_ver}`} alt="Gob" width="115px" height="auto" />
                        </Grid>
                        <Grid sx={{ display: 'flex', textAlign: 'center' }}>
                            <img src={`data:image/png;base64,${marcaVera}`} alt="vera" width="200px" height="auto" />
                        </Grid>
                        <Grid>
                            <img src="https://i.imgur.com/KBthrFn.png" alt="CAE" width="45px" height="auto" />
                        </Grid>
                        <Grid>
                            <img src="https://i.imgur.com/tf4Yg4k.png" alt="sesver" width="160px" height="auto" />
                        </Grid>
                    </Grid>
                    <Grid container sx={{ justifyContent: 'center', textAlign: 'center', mt: { md: 1 } }}>
                        <Typography fontWeight={'bold'} fontSize={'15px'}>&copy; 2024 Gobierno de Veracruz. Todos los derechos reservados.</Typography>
                    </Grid>
                </Container>
            </Grid>
        </>
    )
}
