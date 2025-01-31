import { Box, Stack, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ItemHomeCarousel, items } from './ItemHomeCarousel';

export const Carousel = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const [activeItem, setActiveItem] = useState<number>(0);

    const handleClick = (e: any, index: number) => {
        setActiveItem(index);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveItem((prevActiveItem) => (prevActiveItem + 1) % items.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <Stack>
            <Box sx={{ width: '100%', minHeight: responsive ? '44vh' : '42vh' }}>
                {items.map((item, index: number) => <ItemHomeCarousel key={index} item={item} />).filter((item, index: number) => index === activeItem)}
            </Box>
            <Box gap={3} sx={{ display: 'flex', justifyContent: 'center', width: '100%', minHeight: responsive ? '2.5vh' : '3vh', alignItems: 'center', mt: responsive ? 0 : 2, mb: responsive ? 1 : 0 }}>
                {items.map((item: { name: string, img: string }, index: number) => (
                    <Box onClick={(e) => handleClick(e, index)} sx={{ backgroundColor: index === activeItem ? 'rgba(19, 50, 44, 1)' : 'rgba(19, 50, 44, 0.3)', width: '13px', height: '13px', borderRadius: 10, '&:hover': { cursor: 'pointer' } }} />
                ))}
            </Box>
        </Stack>
    )
}
