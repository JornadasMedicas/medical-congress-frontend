import { Box, Button, Dialog, DialogTitle, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReduxModalSelector } from '../../interfaces/Modal';
import { closeModalProps } from '../../store/slices/modal';
import Grid from '@mui/material/Grid2';
import { medicineModule } from '../../helpers/careerImages';

const ModalGlobal = () => {
    const dispatch = useDispatch();
    const { props } = useSelector((state: ReduxModalSelector) => state.modal);
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    const handleClose = () => {
        dispatch(closeModalProps(null));
    }

    console.log(props.args != null && props.args.data);


    return (
        <>
            <Dialog
                open={props.open}
                sx={{ //fix responsive
                    '& .MuiDialog-container': {
                        '& .MuiPaper-root': {
                            width: responsive ? '100%' : '50%',
                            height: responsive ? '70%' : '100%',
                            maxWidth: props.width === undefined ? 'xl' : props.width,
                        }
                    }
                }}
            >
                <DialogTitle sx={{ ml: 'auto', mr: 'auto', fontSize: '30px' }}>
                    <Typography className='animate__animated animate__fadeInUp' sx={{ fontSize: responsive ? '30px' : '50px', fontFamily: 'sans-serif', color: 'secondary.main', textAlign: 'center' }}>{props.name}</Typography>
                </DialogTitle>
                <Grid container sx={{ ml: 2, mr: 2, height: '100%' }}>
                    <Grid size={12} sx={{ textAlign: 'center' }}>
                        <Box sx={{ height: '100%', overflow: 'hidden', position: 'relative', backgroundColor: 'red' }}>
                            <img style={{ width: '100%', height: 'auto' }} alt='medicine' src={`data:image/png;base64,${medicineModule}`}></img>
                        </Box>
                    </Grid>
                    <Grid size={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: responsive ? 'flex-end': 'flex-start', overflow: 'hidden' }}>
                        <Button sx={{ backgroundColor: 'background.default', mb: 2, width: '100px', ml: 'auto', mr: 'auto' }} onClick={handleClose}>Cerrar</Button>
                    </Grid>
                </Grid>
            </Dialog>
        </>
    )
}

export default ModalGlobal;
