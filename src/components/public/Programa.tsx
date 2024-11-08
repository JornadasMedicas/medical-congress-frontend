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
import { chemicals2024, medicine2024 } from '../../helpers/workshopimages2024';
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
        <Grid ref={ref} container sx={{ pt: 1, mb: 2, display: 'flex', flexDirection: responsive ? 'column' : 'row' }}>
            <Grid size={12} ref={ref2} sx={{ mb: 2 }}>
                <Box ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''} sx={{ visibility: inView ? 'visible' : 'hidden', mb: 2, mt: 2 }}>
                    <Divider sx={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: responsive ? '25px' : '30px', color: 'secondary.main', width: responsive ? '80%' : '50%', m: 'auto' }}>
                        PROGRAMA 2024
                    </Divider>
                </Box>
            </Grid>
            <Grid className={'animate__animated animate__fadeInUp'} size={responsive ? 12 : 4} sx={{ mb: 2 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.05)', transition: 'all 0.3s ease' } }}>
                    <img alt='medicine2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: '95%', height: 'auto' }} src='https://i.imgur.com/bEcUpGw.png'></img>
                </Box>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/pct65tj6ee72z2r74yl4f/DIPTICO-ENFERMERIA-2024.pdf?rlkey=lha4qtjay3elz1m3f94yjlkoy&st=s959irbp&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
                        DESCARGAR DÍPTICO ENFERMERÍA ORIGINAL
                    </Button>
                </Box>
            </Grid>
            <Grid className={'animate__animated animate__fadeInUp'} size={responsive ? 12 : 4} sx={{ mb: 2 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.05)', transition: 'all 0.3s ease' } }}>
                    <img alt='medicine2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: '95%', height: 'auto' }} src='https://i.imgur.com/4dJpS00.png'></img>
                </Box>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/oh9hdibl4ue2pw9ulf09n/DIPTICO-Odontolog-a-2024.pdf?rlkey=z2s8ps0d759axcxv39081yzc6&st=vjhu28az&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
                        DESCARGAR DÍPTICO ESTOMATOLOGÍA ORIGINAL
                    </Button>
                </Box>
            </Grid>
            <Grid className={'animate__animated animate__fadeInUp'} size={responsive ? 12 : 4} sx={{ mb: 2 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.05)', transition: 'all 0.3s ease' } }}>
                    <img alt='medicine2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: '95%', height: 'auto' }} src='https://i.imgur.com/1W8eV4H.png'></img>
                </Box>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/mzq0vwe8zpu1uvfn16221/tiptico-de-medicina.pdf?rlkey=64mybsvcs34sipszo4w6jagfj&st=1ebd3t2y&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
                        DESCARGAR DÍPTICO MEDICINA ORIGINAL
                    </Button>
                </Box>
            </Grid>
            <Grid className={'animate__animated animate__fadeInUp'} size={responsive ? 12 : 4} sx={{ mb: 2 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.03)', transition: 'all 0.3s ease' } }}>
                    <img alt='chemicals2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: responsive ? '95%' : 'auto', height: responsive ? 'auto' : '700px' }} src='https://i.imgur.com/19fuVyp.png'></img>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/bj0ueqtpeqrpffafney8g/DIPTICO-quimicos-2024.pdf?rlkey=g4o3qfc7i6zwvb9j1i4og76hh&st=o0yigxr3&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
                        DESCARGAR DÍPTICO QUÍMICOS ORIGINAL
                    </Button>
                </Box>
            </Grid>
            <Grid size={responsive ? 12 : 4}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.03)', transition: 'all 0.3s ease' } }}>
                    <img alt='chemicals2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: responsive ? '95%' : 'auto', height: responsive ? 'auto' : '700px' }} src={`data:image/jpeg;base64,${chemicals2024}`}></img>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/pi39v21oduz7zqir3x0d6/TALLER_QUIMICOS2024.jpeg?rlkey=jpmuu8wolxibczv8xn3g88gsn&st=y1qf281m&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
                        DESCARGAR PÓSTER TALLER QUÍMICOS ORIGINAL
                    </Button>
                </Box>
            </Grid>
            <Grid size={responsive ? 12 : 4}>
                <Box className={'animate__animated animate__fadeInUp'} sx={{ mb: 2, display: 'flex', justifyContent: 'center', cursor: 'pointer', '&:hover img': { transform: 'scale(1.03)', transition: 'all 0.3s ease' } }}>
                    <img alt='medicine2024' style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0px 0px 5px grey)', width: responsive ? '95%' : 'auto', height: '700px' }} src={`data:image/jpeg;base64,${medicine2024}`}></img>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={(e) => onDownload(e, "https://www.dropbox.com/scl/fi/npq80r5p3koq1g0ryi777/TALLER_MEDICINA2024.jpeg?rlkey=hvpffpm0y7t9vdge24q3mi830&st=2vm6cwg8&dl=1")} variant="contained" endIcon={<DownloadIcon />} sx={{ backgroundColor: 'background.default', color: 'primary.main', ":hover": { backgroundColor: 'primary.main', color: 'background.default' }, width: responsive ? '95%' : '75%' }}>
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
