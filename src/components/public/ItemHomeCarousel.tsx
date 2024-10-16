import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { medicine, nursing, chemicals, stomatology } from '../../helpers/images';

export const items = [
    {
        name: "Medicina",
        img: medicine
    },
    {
        name: "Enfermería",
        img: nursing
    },
    {
        name: "Químicos",
        img: chemicals
    },
    {
        name: "Estomatología",
        img: stomatology
    }
]

export const ItemHomeCarousel = (props: any) => {
    
    return (
        <Paper sx={{ backgroundColor: 'green', minHeight: '42vh', display: 'flex', flexDirection: 'row', position: 'relative', overflow: 'hidden' }}>
        <Box component={'img'} src={`data:image/png;base64,${props.item.img}`} sx={{ zIndex: 0, position: 'absolute', justifyContent: 'center', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}>
        </Box>
        <Box sx={{ height: { md: '70px', xs: '50px' }, mt: 'auto', ml: { md: '5vh', xs: '2vh' }, zIndex: 2 }}>
            <Typography
                sx={{ fontWeight: 'bold', fontSize: { md: '25px', xs: '18px' }, border: '1px solid white', backgroundColor: 'rgba(255, 255, 255, 0.5)', pl: 4, pr: 4, borderRadius: 3, color: 'secondary.main' }}
            >
                {props.item.name}
            </Typography>
        </Box>
    </Paper>
    )
}