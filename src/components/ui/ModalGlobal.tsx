import { Button, Dialog, DialogActions, DialogTitle, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReduxModalSelector } from '../../interfaces/Modal';
import { closeModalProps } from '../../store/slices/modal';
import Grid from '@mui/material/Grid2';

const ModalGlobal = () => {
    const dispatch = useDispatch();
    const { props } = useSelector((state: ReduxModalSelector) => state.modal);
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    const handleClose = () => {
        dispatch(closeModalProps(null));
    }

    return (
        <>
            <Dialog
                open={props.open}
                sx={{
                    '& .MuiDialog-container': {
                        '& .MuiPaper-root': {
                            width: '100%',
                            height: '90vh',
                            maxWidth: props.width === undefined ? 'md' : props.width,
                        },
                    }
                }}
            >
                <DialogTitle sx={{ ml: 'auto', mr: 'auto', fontSize: '30px' }}>
                    <Typography className='animate__animated animate__fadeInUp' sx={{ fontSize: responsive ? '30px' : '50px', fontFamily: 'sans-serif', color: 'secondary.main', textAlign: 'center' }}>{props.name}</Typography>
                </DialogTitle>
                <Grid container columns={12} sx={{ height: '100%', ml: 2, mr: 2, mb: 2, position: 'relative' }}>
                    <Grid size={12} sx={{ textAlign: 'center', height: responsive ? '46.5vh' : '45vh' }}>
                        <DialogActions>
                            <Button sx={{ backgroundColor: 'background.default', position: 'absolute', bottom: 0, m: 2 }} onClick={handleClose}>Cerrar</Button>
                        </DialogActions>
                    </Grid>
                </Grid>
            </Dialog>
        </>
    )
}

export default ModalGlobal;
