import React from 'react'
import Grid from '@mui/material/Grid2';
import { Container } from '@mui/material';

export const Footer = () => {
    return (
        <>
        <Container maxWidth='xl'>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid height={'18vh'} size={12} sx={{ textAlign: 'center' }}>
                    footer
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
