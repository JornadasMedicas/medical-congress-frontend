import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Carousel from 'react-material-ui-carousel'
import React, { useEffect } from 'react'
import { ItemHomeCarousel, items } from './ItemHomeCarousel';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import { ItemCareerCarousel, itemsTrayectoria } from './ItemCareerCarousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../App.css'

/* const font =  "'Quicksand', sans-serif";

const theme = createTheme({
  typography: {
	fontFamily: font
  }
}); */
const modules: string[] = ['Medicina', 'Químicos', 'Enfermería', 'Estomatología']
const workshops: string[] = ['Cirugía Maxilofacial', 'Paladar Hendido', 'Cuidados Paliativos', 'Restauración Interproximales']

export const Home = () => {
	const location = useLocation();

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

	useEffect(() => {
		if (location.search) {
			const hash = new URLSearchParams(location.search).get('section');
			if (hash) {
				document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location.search]);

	return (
		<>
			<section id='carousel' style={{ height: '100vh' }}>
				<Grid container columns={12} spacing={0} sx={{ justifyContent: 'center' }}>
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
							{items.map((item, i) => <ItemHomeCarousel key={i} item={item} />)}
						</Carousel>
					</Grid>
					<Grid size={12} sx={{ textAlign: 'center' }}>
						<Box ref={ref0} className={inView0 ? 'animate__animated animate__fadeInUp' : ''} sx={{ mt: 1 }}>
							{/* <Typography fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: { md: '30px', xs: '25px' } }}>
								¿QUÉ SON LAS JORNADAS MÉDICAS?
							</Typography> */}
						</Box>
					</Grid>
				</Grid>
			</section>
			<section id='career'>
				<Grid container>
					<Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: 'center', height: '100vh', backgroundColor: '#b7402a', overflow: 'hidden' }}>
						<Box ref={ref1} className={inView1 ? 'animate__animated animate__fadeInUp' : ''} sx={{ mt: '7vh' }}>
							<Typography fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#ffffff', fontSize: { md: '30px', xs: '25px' } }}>
								TRAYECTORIA
							</Typography>
						</Box>
						<Box sx={{ width: '85%', m: 'auto', pt: 2 }}>
							<Carousel
								/* height={600} */
								indicators={false}
								navButtonsAlwaysVisible
								fullHeightHover
								autoPlay={false}
								animation='slide'
								navButtonsWrapperProps={{
									style: {
										bottom: '0',
										top: 'unset'
									}
								}}
							>
								{itemsTrayectoria.map((item, i) => <ItemCareerCarousel key={i} item={item} />)}
							</Carousel>
						</Box>
					</Grid>
					<Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: 'center', height: { md: '100vh', xs: 'auto' }, pb: { xs: '2vh' } }}>
						<Box sx={{ mt: '7vh' }}>
							<Typography fontFamily={'sans-serif'} fontWeight={700} sx={{ color: '#9e3832', fontSize: { md: '60px', xs: '50px' } }}>
								2023
							</Typography>
						</Box>
						<Box sx={{ width: '85%', pt: 2, m: 'auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: { md: 3.5, xs: 2 } }}>
							<Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
								Título: Primeras Jornadas Postpandemia ¿Qué aprendimos y hacia donde vamos?
							</Typography>
							<Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
								Lugar: Hotel Gamma Nubara
							</Typography>
							<Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
								Ubicación: Av. Adolfo Ruiz Cortines 912 Col, U.H. del Bosque, 91017 Xalapa-Enríquez, Ver.
							</Typography>
							<Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
								Fecha: Del 23 al 25 de Noviembre
							</Typography>
							<Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
								Módulos:
							</Typography>
							<List sx={{ m: 0, p: 0 }} dense={true}>
								{modules.map((item) => (
									<ListItem>
										<ListItemAvatar>
											<ArrowForwardIosIcon sx={{ color: '#b84026' }} />
										</ListItemAvatar>
										<ListItemText
											primary={item}
											sx={{
												'.MuiListItemText-primary': {
													fontSize: '18px',
												}
											}}
										/>
									</ListItem>
								))}
							</List>
							<Typography fontSize={{ md: '20px', xs: '18px' }} fontFamily={'sans-serif'}>
								Talleres:
							</Typography>
							<List sx={{ m: 0, p: 0 }} dense={true}>
								{workshops.map((item) => (
									<ListItem>
										<ListItemAvatar>
											<ArrowForwardIosIcon sx={{ color: '#b84026' }} />
										</ListItemAvatar>
										<ListItemText
											primary={item}
											sx={{
												'.MuiListItemText-primary': {
													fontSize: '18px',
												}
											}}
										/>
									</ListItem>
								))}
							</List>
						</Box>
					</Grid>
				</Grid>
			</section>
			<section id='contact'>
				<Grid container>
					<Grid size={12} sx={{ textAlign: 'center', height: '100vh' }}>
						<Box ref={ref2} className={inView2 ? 'animate__animated animate__fadeInUp' : ''} sx={{ mt: '7vh' }}>
							<Divider sx={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: { md: '30px', xs: '25px', color: '#9e3832' } }} variant='middle'>
								CONTACTO
							</Divider>
						</Box>
					</Grid>
				</Grid>
			</section>
		</>
	)
}
