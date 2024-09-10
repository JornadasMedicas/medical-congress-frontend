import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { jornadas2023, chemicals } from '../helpers/images';

export const itemsTrayectoria = [
    {
        name: "2023",
        img: jornadas2023
    },
    {
        name: "Químicos",
        img: chemicals
    },
]

export const ItemCareerCarousel = (props: any) => {
    return (
        <Paper sx={{ zIndex: 0, display: 'flex', minHeight: '81vh', position: 'relative', overflow: 'hidden', justifyContent: 'center', backgroundColor: '#b7402a' }}>
            <Box component={'img'} src={`data:image/png;base64,${props.item.img}`} sx={{ zIndex: 3, position: 'absolute', justifyContent: 'center', width: '100%', height: '100%', objectFit: { md: 'contain', xs: 'cover' }, objectPosition: 'center' }}>
            </Box>
        </Paper>
    )
}
