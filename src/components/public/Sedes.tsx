import React, { useEffect, useRef } from 'react'
import Grid from '@mui/material/Grid2';
import mapboxgl from 'mapbox-gl';
import { useDispatch } from 'react-redux';
import { Divider, Typography, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { setActiveSection } from '../../store/slices/sections';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

export const Sedes = () => {
    const dispatch = useDispatch();
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const navigate = useNavigate();
    const mapContainer = useRef(''); // Ref para el contenedor del mapa
    const mapContainer2 = useRef(''); // Ref para el contenedor del mapa

    const { ref, inView } = useInView({//regist typography
        triggerOnce: false,
        threshold: 0.1
    });

    const { ref: ref2 } = useInView({//section change
        triggerOnce: false,
        threshold: 0.1,
        onChange: (inView: boolean) => {
            if (inView) {
                inView && dispatch(setActiveSection('Sedes'));
                navigate(`/?section=Sedes`, { replace: true });
            }
        }
    });

    useEffect(() => {
        // Configura Mapbox GL con tu token de acceso
        mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_KEY}`;

        const map = new mapboxgl.Map({
            container: mapContainer.current, // Referencia al div del contenedor
            style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
            center: [-96.93671537793244, 19.588090811612958], // starting position [lng, lat]
            zoom: 15, // Nivel de zoom inicial
            hash: true
        });

        // Agregar un marcador (opcional)
        const marker = new mapboxgl.Marker({
            color: 'red', // Cambiar color del marcador (puede ser un color hex)
        })
            .setLngLat([-96.93671537793244, 19.588090811612958])
            .addTo(map);

        const markerElement = marker.getElement();
        markerElement.style.cursor = 'pointer';

        markerElement.addEventListener('click', () => {
            window.open('https://www.google.com/maps/place/Auditorio+La+Calera/@19.5880245,-96.9367653,21z/data=!4m14!1m7!3m6!1s0x85db2f70dc981183:0x87c40b494ab4247!2sAuditorio+La+Calera!8m2!3d19.5880971!4d-96.9367311!16s%2Fg%2F11hf38_vl3!3m5!1s0x85db2f70dc981183:0x87c40b494ab4247!8m2!3d19.5880971!4d-96.9367311!16s%2Fg%2F11hf38_vl3?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D', '_blank')
        });

        map.addControl(new mapboxgl.FullscreenControl());

        // Limpieza cuando el componente se desmonte
        return () => map.remove();
    }, []);

    useEffect(() => {
        // Configura Mapbox GL con tu token de acceso
        mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_KEY}`;

        const map = new mapboxgl.Map({
            container: mapContainer2.current, // Referencia al div del contenedor
            style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
            center: [-96.91924225652667, 19.542849287196848], // starting position [lng, lat]
            zoom: 15, // Nivel de zoom inicial
        });

        // Agregar un marcador (opcional)
        const marker = new mapboxgl.Marker({
            color: 'red', // Cambiar color del marcador (puede ser un color hex)
        })
            .setLngLat([-96.91924225652667, 19.542849287196848])
            .addTo(map);

        const markerElement = marker.getElement();
        markerElement.style.cursor = 'pointer';

        markerElement.addEventListener('click', () => {
            window.open('https://www.google.com/maps/place/Hotel+Klimt/@19.5429163,-96.919342,19.72z/data=!4m9!3m8!1s0x85db31e62f9e703d:0x49c95114b908a981!5m2!4m1!1i2!8m2!3d19.5428097!4d-96.9192168!16s%2Fg%2F11ggs3blfr?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D', '_blank')
        });

        map.addControl(new mapboxgl.FullscreenControl());

        // Limpieza cuando el componente se desmonte
        return () => map.remove();
    }, []);

    return (
        <Grid container ref={ref} sx={{ display: 'flex', flexDirection: responsive ? 'column' : 'row' }}>
            <Grid size={12} ref={ref2} sx={{ mb: responsive ? 2 : 0 }}>
                <Box className={inView ? 'animate__animated animate__fadeInUp' : ''} sx={{ visibility: inView ? 'visible' : 'hidden', mb: 2, mt: 4 }}>
                    <Divider sx={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: responsive ? '25px' : '33px', color: 'secondary.main', width: responsive ? '80%' : '30%', m: 'auto' }}>
                        SEDES
                    </Divider>
                </Box>
            </Grid>
            <Grid size={responsive ? 12 : 6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', mb: responsive ? '4vh' : '0vh' }}>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Typography fontSize={responsive ? '20px' : '22px'} fontWeight={'bold'}>CONGRESO</Typography>
                </Grid>
                <Divider sx={{ mb: 3, width: '50%', ml: 'auto', mr: 'auto' }}></Divider>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 1 }}>
                    <Typography fontSize={responsive ? '18px' : '20px'} fontWeight={'bold'}>DIRECCIÓN</Typography>
                </Grid>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Typography sx={{ textAlign: 'center' }} fontSize={responsive ? '17px' : '20px'}>Av. Libertad #84, Centro, Banderilla, Veracruz</Typography>
                </Grid>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <img alt='calera1' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: '90%', height: 'auto' }} src='https://i.imgur.com/BtOZDGt.jpeg'></img>
                </Grid>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <img alt='calera1' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: '90%', height: 'auto' }} src='https://i.imgur.com/hpJYJhx.jpeg'></img>
                </Grid>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Box
                        ref={mapContainer}
                        sx={{
                            width: '90%',
                            height: '60vh',
                            borderRadius: 2,
                            boxShadow: 3,
                            overflow: 'hidden'
                        }}
                    />
                </Grid>
            </Grid>
            <Grid size={responsive ? 12 : 6} sx={{ display: 'flex', justifyContent: 'left', flexDirection: 'column' }}>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Typography fontSize={responsive ? '20px' : '22px'} fontWeight={'bold'}>TALLERES</Typography>
                </Grid>
                <Divider sx={{ mb: 3, width: '50%', ml: 'auto', mr: 'auto' }}></Divider>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 1 }}>
                    <Typography fontSize={responsive ? '18px' : '20px'} fontWeight={'bold'}>DIRECCIÓN</Typography>
                </Grid>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Typography sx={{ textAlign: 'center' }} fontSize={responsive ? '17px' : '20px'}>Av. Miguel Alemán #310 Col. Laderas de Macuiltepetl, Xalapa, Veracruz</Typography>
                </Grid>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <img alt='calera1' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: '90%', height: 'auto' }} src='https://i.imgur.com/wY62iKD.jpeg'></img>
                </Grid>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <img alt='calera1' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: '90%', height: 'auto' }} src='https://i.imgur.com/ZyTpO7D.jpeg'></img>
                </Grid>
                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Box
                        ref={mapContainer2}
                        sx={{
                            width: '90%',
                            height: '60vh',
                            borderRadius: 2,
                            boxShadow: 3,
                            overflow: 'hidden'
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
