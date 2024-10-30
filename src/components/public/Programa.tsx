import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import { navBarHeigth, navBarHeigthResponsive } from './Home';
import { Tab, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../../store/slices/sections';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Dia1 } from './Dia1';
import { Dia2 } from './Dia2';
import { Dia3 } from './Dia3';
import TodayIcon from '@mui/icons-material/Today';
import { useLocation } from 'react-router-dom';

export const Programa = () => {
    const dispatch = useDispatch();
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const [tab, setTab] = useState<string>('1');
    const { pathname } = useLocation();
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
            }
        }
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Grid ref={ref} container sx={{ pt: responsive ? `${navBarHeigthResponsive}px` : `${navBarHeigth}px`, mt: 2, mb: 2 }}>
            <Grid size={12} ref={ref2} sx={{ mb: 2 }}>
                <Box sx={{ visibility: inView ? 'visible' : 'hidden', width: '100%' }}>
                    <TabContext value={tab}>
                        <TabList
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#bd4f2b"
                                }
                            }}
                            onChange={(e, value) => setTab(value)}
                            variant='fullWidth'
                            sx={{ maxHeight: 55, boxShadow: 4, ml: 'auto', mr: 'auto', maxWidth: responsive ? '100%' : '100%' }}
                        >
                            <Tab icon={<TodayIcon color="action" />} iconPosition='start' sx={{ fontWeight: 'bold', paddingTop: 0 }} label={<span style={{ color: tab === '1' ? 'black' : 'gray' }}>21 de Noviembre</span>} value="1" />
                            <Tab icon={<TodayIcon color="action" />} iconPosition='start' sx={{ fontWeight: 'bold', paddingTop: 0 }} label={<span style={{ color: tab === '2' ? 'black' : 'gray' }}>22 de Noviembre</span>} value="2" />
                            <Tab icon={<TodayIcon color="action" />} iconPosition='start' sx={{ fontWeight: 'bold', paddingTop: 0 }} label={<span style={{ color: tab === '3' ? 'black' : 'gray' }}>23 de Noviembre</span>} value="3" />
                        </TabList>
                        <Box sx={{ borderRadius: 3, marginTop: 2, width: '100%', height: 'auto', ml: 'auto', mr: 'auto', display: 'flex', flexDirection: responsive ? 'column' : 'row' }}>
                            <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TabPanel value="1" sx={{ m: 0, p: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                                    <Dia1 />
                                </TabPanel>
                            </Grid>
                            <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TabPanel value="2" sx={{ m: 0, p: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                                    <Dia2 />
                                </TabPanel>
                            </Grid>
                            <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TabPanel value="3" sx={{ m: 0, p: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                                    <Dia3 />
                                </TabPanel>
                            </Grid>
                        </Box>
                    </TabContext>
                </Box>
            </Grid>
        </Grid>
    )
}
