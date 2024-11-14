import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import '../../App.css'
import { Trayectoria } from './Trayectoria';
import { Inicio } from './Inicio';
import { Contacto } from './Contacto';
import { Stack, useMediaQuery } from '@mui/material';
import { Programa } from './Programa';
import { Sedes } from './Sedes';

export const navBarHeigth: number = 64;
export const navBarHeigthResponsive: number = 54;

export const Home = () => {
	const location = useLocation();
	const responsive: boolean = useMediaQuery("(max-width : 1050px)");

	useEffect(() => {
		if (location.search) {
			const hash: string | null = new URLSearchParams(location.search).get('section');
			if (hash) {
				const sectionElement: HTMLElement | null = document.getElementById(hash);
				if (sectionElement) {
					window.scrollTo({
						top: sectionElement.offsetTop - (responsive ? navBarHeigthResponsive : navBarHeigth),
						behavior: 'smooth'
					});
				}
			}
		}
	}, [location.search, responsive]);

	return (
		<Stack sx={{ backgroundColor: '#ffffff'}}>
			<section id='carousel'>
				<Inicio />
			</section>
			<section id='program'>
				<Programa />
			</section>
			<section id='location'>
				<Sedes />
			</section>
			<section id='contact'>
				<Contacto />
			</section>
		</Stack>
	)
}
