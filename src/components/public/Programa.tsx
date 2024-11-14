import React, { useState } from 'react'
import Grid from '@mui/material/Grid2';
import { Button, Divider, Tab, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../../store/slices/sections';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Dia1 } from './Dia1';
import { Dia2 } from './Dia2';
import { Dia3 } from './Dia3';
import TodayIcon from '@mui/icons-material/Today';
import { useNavigate } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';

export const Programa = () => {
    const dispatch = useDispatch();
    const responsive: boolean = useMediaQuery("(max-width : 1400px)");
    const [tab, setTab] = useState<string>('1');
    const navigate = useNavigate();
    const { ref, inView } = useInView({//regist typography
        triggerOnce: false,
        threshold: 0.1
    });

    const { ref: ref2 } = useInView({//section change
        triggerOnce: false,
        threshold: 0.1,
        onChange: (inView: boolean) => {
            if (inView) {
                inView && dispatch(setActiveSection('Programa'));
                navigate(`/?section=Programa`, { replace: true });
            }
        }
    });

    const onDownload = (e: any, doc: string) => {
        const link = document.createElement("a");
        link.download = `JORNADAS.pdf`;
        link.href = doc;
        link.click();
    };

    return (
        <Grid ref={ref} container sx={{ pt: 2, mb: 2, display: 'flex', flexDirection: responsive ? 'column' : 'row' }}>
            <Grid size={12} ref={ref2} sx={{ mb: 2 }}>
                <Box ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''} sx={{ visibility: inView ? 'visible' : 'hidden', mb: 2, mt: 2 }}>
                    <Divider sx={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: responsive ? '25px' : '33px', color: 'secondary.main', width: responsive ? '80%' : '50%', m: 'auto' }}>
                        PROGRAMA 2024
                    </Divider>
                </Box>
            </Grid>
            <Grid className={'animate__animated animate__fadeInUp'} size={responsive ? 12 : 4} sx={{ mb: 4 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.05)', transition: 'all 0.3s ease' } }}>
                    <img alt='medicine2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: '95%', height: 'auto' }} src='https://i.imgur.com/8eLVUG2.png'></img>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/m8xo31q9vfdgdcla1ihka/DIPTICO-ENFERMERIA-2024.pdf?rlkey=ao69g7sxvlrz6mol85p09992l&st=2zgq9t1f&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
                        DESCARGAR DÍPTICO ENFERMERÍA ORIGINAL
                    </Button>
                </Box>
            </Grid>
            <Grid className={'animate__animated animate__fadeInUp'} size={responsive ? 12 : 4} sx={{ mb: 4 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.05)', transition: 'all 0.3s ease' } }}>
                    <img alt='medicine2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: '95%', height: 'auto' }} src='https://i.imgur.com/IVWviwM.png'></img>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/xyac2z7i83hgqu9w22bk2/DIPTICO-Odontolog-a-2024.pdf?rlkey=tmvrvoppx2oc1xvx2u8dgwjdc&st=fvw01poa&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
                        DESCARGAR DÍPTICO ESTOMATOLOGÍA ORIGINAL
                    </Button>
                </Box>
            </Grid>
            <Grid className={'animate__animated animate__fadeInUp'} size={responsive ? 12 : 4} sx={{ mb: 4 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.05)', transition: 'all 0.3s ease' } }}>
                    <img alt='medicine2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: '95%', height: 'auto' }} src='https://i.imgur.com/OlCBqGK.png'></img>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/0svpr11lp88r2651f78ro/tiptico-de-medicina-final.pdf?rlkey=05zm5r2el0cs8gjc9fib1ula3&st=wcprlloj&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
                        DESCARGAR DÍPTICO MEDICINA ORIGINAL
                    </Button>
                </Box>
            </Grid>
            <Grid className={'animate__animated animate__fadeInUp'} size={responsive ? 12 : 4} sx={{ mb: responsive ? 4 : 0 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.03)', transition: 'all 0.3s ease' } }}>
                    <img alt='chemicals2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: responsive ? '95%' : 'auto', height: responsive ? 'auto' : '700px' }} src='https://i.imgur.com/19fuVyp.png'></img>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/1ek86jcy0vesgl5yghesu/DIPTICO-quimicos-2024.pdf?rlkey=z6a26dbqe9swmvm94ep8x2i7z&st=g22x1umu&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
                        DESCARGAR DÍPTICO QUÍMICOS ORIGINAL
                    </Button>
                </Box>
            </Grid>
            <Grid className={'animate__animated animate__fadeInUp'} size={responsive ? 12 : 4} sx={{ mb: responsive ? 4 : 0 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.03)', transition: 'all 0.3s ease' } }}>
                    <img alt='chemicals2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: responsive ? '95%' : 'auto', height: responsive ? 'auto' : '700px' }} src='https://i.imgur.com/q2xN69Y.png'></img>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/x3a9f4a1qm8gq5beqdo8v/talleres-quimicos-sin-QR.pdf?rlkey=rxnslvenqn8esvgsifdw2vw2h&st=pxd9hsmq&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
                        DESCARGAR PÓSTER TALLER QUÍMICOS ORIGINAL
                    </Button>
                </Box>
            </Grid>
            <Grid className={'animate__animated animate__fadeInUp'} size={responsive ? 12 : 4} sx={{ mb: responsive ? 4 : 0 }}>
                <Box className={'animate__animated animate__fadeInUp'} sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.03)', transition: 'all 0.3s ease' } }}>
                    <img alt='medicine2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: responsive ? '95%' : 'auto', height: responsive ? 'auto' : '700px' }} src='https://i.imgur.com/xKBDfjV.png'></img>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/htvnqvo109ljxsk6g4dly/talleres-de-medicina-sin-QR.pdf?rlkey=7ap19coy2kkcon3qgpaqqyzjh&st=d48538am&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
                        DESCARGAR PÓSTER TALLER MEDICINA ORIGINAL
                    </Button>
                </Box>
            </Grid>
            {/* <Grid size={responsive ? 12 : 4} >
                <Box className={'animate__animated animate__fadeInUp'} sx={{ visibility: inView ? 'visible' : 'hidden', mb: 2, mt: 2, display: 'flex', justifyContent: 'center' }}>
                    <img className='animate__animated animate__fadeIn' alt='medic1' style={{ filter: 'drop-shadow(0px 0px 5px grey)', width: '95%', height: '700px' }} src={`data:image/jpeg;base64,${medicine2024}`}></img>
                </Box>
            </Grid> */}
            {/* <Box sx={{ visibility: 'visible', width: '95%', textAlign: 'center', m: 'auto' }}>
                    <TabContext value={tab}>
                        <TabList
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#bd4f2b"
                                }
                            }}
                            onChange={(e, value) => setTab(value)}
                            variant='fullWidth'
                            sx={{ maxHeight: 60, boxShadow: 4, ml: 'auto', mr: 'auto', maxWidth: responsive ? '100%' : '100%' }}
                        >
                            <Tab icon={<TodayIcon color="action" />} iconPosition='start' sx={{ fontWeight: 'bold', paddingTop: 0 }} label={<span style={{ color: tab === '1' ? 'black' : 'gray' }}>21 de Noviembre</span>} value="1" />
                            <Tab icon={<TodayIcon color="action" />} iconPosition='start' sx={{ fontWeight: 'bold', paddingTop: 0 }} label={<span style={{ color: tab === '2' ? 'black' : 'gray' }}>22 de Noviembre</span>} value="2" />
                            <Tab icon={<TodayIcon color="action" />} iconPosition='start' sx={{ fontWeight: 'bold', paddingTop: 0 }} label={<span style={{ color: tab === '3' ? 'black' : 'gray' }}>23 de Noviembre</span>} value="3" />
                        </TabList>
                        <Box sx={{ borderRadius: 3, marginTop: 2, width: '100%', height: 'auto', ml: 'auto', mr: 'auto', display: 'flex', flexDirection: responsive ? 'column' : 'row' }}>
                            <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                {
                                    tab === '1'
                                        ?
                                        <TabPanel value="1" sx={{ m: 0, p: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                                            <Dia1 />
                                        </TabPanel>
                                        :
                                        (tab === '2' && !responsive) &&
                                        <TabPanel value="2" sx={{ m: 0, p: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', pt: 7, objectFit: 'contain' }}>
                                            <img className='animate__animated animate__fadeIn' alt='medic1' style={{ filter: 'drop-shadow(0px 0px 5px grey)', width: 'auto', height: '700px' }} src={`data:image/jpeg;base64,${chemicals2024}`}></img>
                                        </TabPanel>
                                }
                            </Grid>
                            <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TabPanel value="2" sx={{ m: 0, p: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                                    <Dia2 />
                                </TabPanel>
                            </Grid>
                            <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                {
                                    tab === '3'
                                        ?
                                        <TabPanel value="3" sx={{ m: 0, p: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                                            <Dia3 />
                                        </TabPanel>
                                        :
                                        (tab === '2' && !responsive) ?
                                            <TabPanel value="2" sx={{ m: 0, p: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', pt: 7 }}>
                                                <img className='animate__animated animate__fadeIn' alt='medic1' style={{ filter: 'drop-shadow(0px 0px 5px grey)', width: 'auto', height: '700px' }} src={`data:image/jpeg;base64,${medicine2024}`}></img>
                                            </TabPanel>
                                            : tab === '2' && responsive &&
                                            <TabPanel value="2" sx={{ m: 0, p: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                                                <img alt='medic1' style={{ filter: 'drop-shadow(0px 0px 5px grey)', width: 'auto', height: '700px' }} src={`data:image/jpeg;base64,${chemicals2024}`}></img>
                                                <img className='animate__animated animate__fadeIn' alt='medic1' style={{ filter: 'drop-shadow(0px 0px 5px grey)', width: 'auto', height: '700px', paddingTop: 20 }} src={`data:image/jpeg;base64,${medicine2024}`}></img>
                                            </TabPanel>

                                }
                            </Grid>
                        </Box>
                    </TabContext>
                </Box> */}
        </Grid>
    )
}
