import { Box, Divider, Typography, createTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Carousel from 'react-material-ui-carousel'
import React from 'react'
import { ItemCarousel, items } from './ItemCarousel';
import { useInView } from 'react-intersection-observer';

/* const font =  "'Quicksand', sans-serif";

const theme = createTheme({
  typography: {
	fontFamily: font
  }
}); */

export const Home = () => {
	const { ref: ref0, inView: inView0 } = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	const { ref: ref1, inView: inView1 } = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	const { ref: ref2, inView: inView2 } = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	return (
		<>
			<section id='carousel' style={{ height: '100vh', backgroundColor: 'lightblue' }}>
				<Grid container spacing={0} sx={{ justifyContent: 'center' }}>
					<Grid size={12} sx={{ textAlign: 'center' }}>
						<Carousel
							animation='fade'
							navButtonsWrapperProps={{
								style: {
									bottom: '0',
									top: 'unset'
								}
							}}
						>
							{items.map((item, i) => <ItemCarousel key={i} item={item} />)}
						</Carousel>
					</Grid>
					<Grid size={12} sx={{ textAlign: 'center' }}>
						<Box ref={ref0} className={inView0 ? 'animate__animated animate__fadeInUp' : ''} sx={{ mt: 1 }}>
							<Typography fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: '30px' }}>
								¿QUÉ SON LAS JORNADAS MÉDICAS?
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</section>
			<section id='career' style={{ height: '100vh' }}>
				<Grid container spacing={0} sx={{ justifyContent: 'center' }}>
					<Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: 'center', backgroundColor: '#c9a19f', height: '100vh' }}>
						<Box ref={ref1} className={inView1 ? 'animate__animated animate__fadeInUp' : ''} sx={{ mt: '7vh' }}>
							<Typography fontFamily={'sans-serif'} fontWeight={700} sx={{ color: 'white', fontSize: '30px' }}>
								TRAYECTORIA
							</Typography>
						</Box>
						<Box>
							sadasd
						</Box>
					</Grid>
					<Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: 'center', height: '100vh' }}>
						<Box sx={{ mt: '7vh' }}>
							<Typography className='animate__animated animate__fadeInUp' fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: '30px' }}>
								TRAYECTORIA
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</section>
			<section id='contact' style={{ height: '100vh', backgroundColor: 'lightyellow' }}>
				<Grid container sx={{ justifyContent: 'center' }}>
					<Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: 'center', height: '100vh' }}>
						<Box ref={ref2} className={inView2 ? 'animate__animated animate__fadeInUp' : ''} sx={{ mt: '7vh' }}>
							<Typography fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: '30px' }}>
								CONTACTO
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</section>
		</>
	)
}
