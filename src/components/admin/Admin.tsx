import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Tab, useMediaQuery } from '@mui/material';
import { navBarHeigth, navBarHeigthResponsive } from '../public/Home';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Groups2Icon from '@mui/icons-material/Groups2';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Asistentes } from './Asistentes';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../../store/slices/sections';
import { Login } from './Login';
import { Asistencia } from './Asistencia';

export const Admin = () => {
    const dispatch = useDispatch();
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { pathname } = useLocation();
    const [tab, setTab] = useState<string>('1');
    const [localStorageUser, setLocalStorageUser] = useState<any>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setActiveSection('Admin'));
    }, [pathname, dispatch]);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setLocalStorageUser(user);
    }, []);

    return (
        <>
            {
                localStorageUser === null ?
                    <Login />
                    :
                    <Grid container sx={{ pt: responsive ? `${navBarHeigthResponsive}px` : `${navBarHeigth}px`, mt: 3, mb: 3 }}>
                        <Grid size={12}>
                            <TabContext value={tab}>
                                <TabList
                                    TabIndicatorProps={{
                                        style: {
                                            backgroundColor: "#bd4f2b"
                                        }
                                    }}
                                    onChange={(e, value) => setTab(value)}
                                    variant='fullWidth'
                                    sx={{ maxHeight: 55, borderRadius: 3, boxShadow: 4, ml: 'auto', mr: 'auto', maxWidth: responsive ? '95%' : '40%' }}
                                >
                                    <Tab icon={<PersonAddIcon color="action" />} iconPosition='start' sx={{ fontWeight: 'bold', paddingTop: 0 }} label={<span style={{ color: tab === '1' ? 'black' : 'gray' }}>Asistencia</span>} value="1" />
                                    <Tab icon={<Groups2Icon color="action" />} iconPosition='start' sx={{ fontWeight: 'bold', paddingTop: 0 }} label={<span style={{ color: tab === '2' ? 'black' : 'gray' }}>Asistentes</span>} value="2" />
                                </TabList>
                                <Box sx={{ borderRadius: 3, boxShadow: 4, marginTop: 2, width: responsive ? '95%' : '90%', height: responsive ? 'auto' : '81vh', ml: 'auto', mr: 'auto' }}>
                                    <TabPanel value="1" sx={{ m: 0, p: responsive ? 0 : 2, display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
                                        <Asistencia />
                                    </TabPanel>
                                    <TabPanel value="2" sx={{ m: 0, p: 0, display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                                        <Asistentes />
                                    </TabPanel>
                                </Box>
                            </TabContext>
                        </Grid>
                    </Grid>
            }
        </>
    )
}
