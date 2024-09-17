import { Box, Paper } from '@mui/material'
import React from 'react'

export const ItemCareerCarousel = (props: any) => {

    return (
        <Paper sx={{ zIndex: 0, display: 'flex', minHeight: '81vh', position: 'relative', overflow: 'hidden', justifyContent: 'center', backgroundColor: 'rgba(183, 64, 42, 1)' }}>
            <Box component={'img'} src={`data:image/png;base64,${props.item.img}`} sx={{ zIndex: 3, position: 'absolute', justifyContent: 'center', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}>
            </Box>
        </Paper>
    )
}
