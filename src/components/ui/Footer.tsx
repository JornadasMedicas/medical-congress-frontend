import React from 'react'
import Grid from '@mui/material/Grid2';
import { Container } from '@mui/material';
import { gob_ver, logoIMSS } from '../../helpers/images';

export const Footer = () => {

    return (
        <>
            <Grid sx={{ backgroundColor: 'text.secondary' }}>
                <Container maxWidth='xl' sx={{ padding: '10px' }}>
                    <Grid container sx={{ justifyContent: { xs: 'center' }, display: 'flex', gap: { md: 4, xs: 1 } }}>
                        <Grid sx={{ display: 'flex', textAlign: 'center' }}>
                            <img src={`data:image/png;base64,${gob_ver}`} alt="Gob" width="auto" height="55px" />
                        </Grid>
                        <Grid>
                            <img src="https://i.imgur.com/tf4Yg4k.png" alt="sesver" width="auto" height="50px" />
                        </Grid>
                        <Grid sx={{ display: 'flex', textAlign: 'center' }}>
                            <img src={`data:image/png;base64,${logoIMSS}`} alt="imss" width="auto" height="50px" />
                        </Grid>
                        <Grid>
                            <img src="https://i.imgur.com/KBthrFn.png" alt="CAE" width="auto" height="43px" style={{ marginTop: 3 }} />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    )
}
