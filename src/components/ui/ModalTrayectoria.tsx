import { Box, Button, Dialog, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PropsDatModal, ReduxModalSelector } from '../../interfaces/IModal';
import { closeModalProps } from '../../store/slices/modal';

const ModalTrayectoria = () => {
    const dispatch = useDispatch();
    const { props } = useSelector((state: ReduxModalSelector) => state.modal);
    const responsive: boolean = useMediaQuery("(max-width : 1020px)");
    const [data, setData] = useState<PropsDatModal>({ img: '', name: '', responsiveWidth: '', width: '' });

    const handleClose = () => {
        dispatch(closeModalProps(null));
    }

    useEffect(() => {
        if (props.args != null) {

            const modules = props.args.modules.filter((item: PropsDatModal) => {
                return item.name === props.name;
            });

            const workshops = props.args.workshops.filter((item: PropsDatModal) => {
                return item.name === props.name;
            })

            workshops.length === 0 ? setData(modules[0]) : setData(workshops[0]);
        }
    }, [props]);

    return (
        <Stack>
            <Dialog
                open={props.open}
                maxWidth="xl"
                fullScreen={responsive ? false : true}
                PaperProps={{
                    sx: {
                        backgroundColor: 'transparent', // paper background transparent
                        boxShadow: 'none', // remove dialog shadow
                    },
                }}
                sx={{
                    backdropFilter: 'blur(4px)'
                }}
            >
                <Box sx={{ height: '100%' }}>
                    <Box sx={{ paddingLeft: 0, paddingRight: 0, textAlign: 'center', mb: 7, mr: 1, ml: 1 }}>
                        <Typography textTransform={'uppercase'} className='fonts animate__animated animate__fadeInUp' fontFamily={'sans-serif'} fontWeight={'500'} fontSize={responsive ? '30px' : '42px'} color='primary' mb={1} mt={1} sx={{ '::first-letter': { color: 'text.secondary' } }}>{props.name}</Typography>
                        <img alt='img' width={responsive ? data.responsiveWidth : data.width} height={'auto'} src={`data:image/png;base64,${data !== undefined && data.img}`} style={{ boxShadow: '0 0px 25px 0 rgba(1,18,38, 0.15)' }} />
                    </Box>
                    <Box sx={{ height: 'auto', width: '100%', textAlign: 'center', position: 'absolute', bottom: 0 }}>
                        <Button
                            sx={{ backgroundColor: 'background.default', mb: 1.5 }}
                            onClick={handleClose}
                        >
                            Cerrar
                        </Button>
                    </Box>
                </Box>
            </Dialog >
        </Stack>
    )
}

export default ModalTrayectoria;
