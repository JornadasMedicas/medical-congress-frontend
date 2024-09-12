import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import '../App.css'
import { Trayectoria } from './Trayectoria';
import { Inicio } from './Inicio';
import { Contacto } from './Contacto';
import { Stack } from '@mui/material';

/* const font =  "'Quicksand', sans-serif";

const theme = createTheme({
  typography: {
	fontFamily: font
  }
}); */

export const Home = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.search) {
			const hash = new URLSearchParams(location.search).get('section');
			if (hash) {
				document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location.search]);

	return (
		<Stack sx={{ backgroundColor: '#ffffff'}}>
			<section id='carousel' style={{ height: '100vh' }}>
				<Inicio />
			</section>
			<section id='career'>
				<Trayectoria />
			</section>
			<section id='contact'>
				<Contacto />
			</section>
		</Stack>
	)
}
