import { Box, Paper, Typography, createTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Carousel from 'react-material-ui-carousel'
import React from 'react'
import { medicine, nursing, chemicals, stomatology } from '../helpers/images';

/* const font =  "'Quicksand', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: font
  }
}); */

var items = [
    {
        name: "Medicina",
        img: medicine
    },
    {
        name: "Enfermería",
        img: nursing,
        description: "Hello World!"
    },
    {
        name: "Químicos",
        img: chemicals,
        description: "Hello World!"
    },
    {
        name: "Estomatología",
        img: stomatology,
        description: "Hello World!"
    }
]

export const Item = (props: any) => {
    return (
        <Paper sx={{ backgroundColor: 'green', minHeight: '42vh', mt: 0, display: 'flex', flexDirection: 'row', position: 'relative', overflow: 'hidden' }}>
            <Box component={'img'} src={`data:image/png;base64,${props.item.img}`} sx={{ zIndex: 0, position: 'absolute', justifyContent: 'center', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}>
            </Box>
            <Box sx={{ height: { md: '70px', xs: '50px' }, mt: 'auto', ml: { md: '5vh', xs: '2vh' }, zIndex: 2 }}>
                <Typography
                    sx={{ fontWeight: 'bold', fontSize: { md: '25px', xs: '18px' }, border: '1px solid white', backgroundColor: 'rgba(255, 255, 255, 0.5)', pl: 4, pr: 4, borderRadius: 3 }}
                >
                    {props.item.name}
                </Typography>
            </Box>

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}

export const Home = () => {
    return (
        <>
            <section>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={0} sx={{ justifyContent: 'center' }}>
                        <Grid height={'44vh'} mt={'56px'} size={12} sx={{ textAlign: 'center' }}>
                            <Carousel
                                navButtonsWrapperProps={{
                                    style: {
                                        bottom: '0',
                                        top: 'unset'
                                    }
                                }}
                            >
                                {items.map((item, i) => <Item key={i} item={item} />)}
                            </Carousel>
                        </Grid>
                        <Grid height={'50vh'} size={12} sx={{ textAlign: 'center' }}>
                            <Box sx={{ mt: 2 }}>
                                <Typography className='animate__animated animate__fadeInUp' fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: '30px' }}>
                                    ¿QUÉ SON LAS JORNADAS MÉDICAS?
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    )
}
