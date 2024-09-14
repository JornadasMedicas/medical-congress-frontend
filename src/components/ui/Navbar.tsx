import { AppBar, Box, Button, Container, Divider, IconButton, Menu, MenuItem, Toolbar, Typography, Link } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { logo_ver } from '../../helpers/images';
import { useNavigate } from 'react-router-dom';
import { ReduxJornadasSlidesSelector } from '../../interfaces/ReduxTrayectoria';
import { useSelector } from 'react-redux';

const navItem = [
    { name: 'Inicio', pathTo: 'carousel' },
    { name: 'Trayectoria', pathTo: 'career' },
    { name: 'Registro', pathTo: 'register' },
    { name: 'Contacto', pathTo: 'contact' }
]

export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const { activeSection } = useSelector((state: ReduxJornadasSlidesSelector) => state.section);
    const [activeItem, setActiveItem] = useState<string>('Inicio');
    const navigate = useNavigate();

    console.log(activeItem);
    

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const goToSection = (pathTo: string) => {
        setAnchorElNav(null);

        switch (pathTo) {
            case 'carousel':
                navigate('/?section=carousel', { replace: true });
                setActiveItem(activeSection);
                break;

            case 'career':
                navigate('/?section=career', { replace: true });
                setActiveItem(activeSection);
                break;

            case 'register':
                navigate('/register', { replace: true });
                setActiveItem(activeSection);
                break;

            case 'contact':
                navigate('/?section=contact', { replace: true });
                setActiveItem(activeSection);
                break;

            default:
                break;
        }
    };

    return (
        <AppBar position="fixed" sx={{ display: 'flex', backgroundColor: 'orange' }}>
            <Container maxWidth={'xl'}>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', alignItems: 'center' }}>
                        <Link href='/home' underline='none' sx={{ mb: -1 }}>
                            <img src={`data:image/png;base64,${logo_ver}`} alt="Logo_ver" width={'auto'} height={'55px'} />
                        </Link>
                        <Divider orientation="vertical" variant='middle' flexItem sx={{ ml: 1.5 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/home"
                            sx={{
                                mr: 1,
                                ml: 1.5,
                                fontFamily: 'sans-serif',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: '#9e3832',
                                textDecoration: 'none',
                            }}
                        >
                            JORNADAS MÉDICAS
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navItem.map((item) => (
                            <Button onClick={() => goToSection(item.pathTo)} key={item.name} sx={{ color: activeItem === item.name ? '#9e3832' : '#ffffff', fontWeight: 600, textTransform: 'capitalize', fontSize: '16px', transition: 'all 0.5s ease' }}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>

                    {/* responsive */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {navItem.map((page) => (
                                <MenuItem key={page.name} onClick={() => goToSection(page.pathTo)}>
                                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Link href='/home' underline='none' sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <img src={`data:image/png;base64,${logo_ver}`} alt="Logo_ver" width={'auto'} height={'55px'} />
                    </Link>
                    <Divider orientation="vertical" variant='middle' flexItem sx={{ ml: 1.5, display: { xs: 'flex', md: 'none' } }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            ml: 1,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'sans-serif',
                            fontWeight: 700,
                            color: '#9e3832',
                            fontSize: '20px',
                            textDecoration: 'none',
                        }}
                    >
                        JORNADAS MÉDICAS
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
