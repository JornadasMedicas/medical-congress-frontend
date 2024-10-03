import React, { useEffect, useRef, useState } from 'react'
import Grid from '@mui/material/Grid2';
import { useInView } from 'react-intersection-observer';
import { setActiveSection } from '../store/slices/sections';
import { useDispatch } from 'react-redux';
import { categorias, initValuesFormJornadas, initValuesFormJornadasErrors, modulos, text } from '../helpers/data';
import ReCAPTCHA from "react-google-recaptcha";
import { Autocomplete, Button, Checkbox, Divider, FormControl, InputLabel, Link, ListItemText, MenuItem, Select, TextField, useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { navBarHeigth, navBarHeigthResponsive } from './Home';
import { Box } from '@mui/system';
import { JornadasValuesInterface, RegistFormInterface } from '../interfaces/RegistForm';
import Swal from 'sweetalert2';
import { validateJornadasFields } from '../helpers/validateRegistForm';

export const Registro = () => {
    const dispatch = useDispatch();
    const captcha = useRef<any>(null);
    const { pathname } = useLocation();
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const [visible, setVisible] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [values, setValues] = useState<RegistFormInterface>(initValuesFormJornadas);
    const [errors, setErrors] = useState<JornadasValuesInterface>(initValuesFormJornadasErrors);

    const { ref, inView } = useInView({//regist typography
        triggerOnce: false,
        threshold: 0.1
    });

    const { ref: ref2 } = useInView({//section change
        triggerOnce: false,
        threshold: 0.1,
        onChange: (inView: boolean) => {
            if (inView) {
                inView && dispatch(setActiveSection('Registro'));
            }
        }
    });

    const enableButton = (values: any) => {
        const confirmText = text(values);
        Swal.fire(
            confirmText
        ).then((result) => {
            if (result.isConfirmed) {
                console.log('confirm');
                setVisible(true);
            } else {
                captcha.current.reset();
            }
        })
    }

    const disableButton = () => {
        setVisible(false);
    }

    const manageDisabled = () => {
        disabled == false ? setDisabled(true) : setDisabled(false)
    }

    const handleSubmit = () => {

        const { isOk, errors } = validateJornadasFields(values);
        console.log('Ok');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Grid container sx={{ pt: responsive ? `${navBarHeigthResponsive}px` : `${navBarHeigth}px`, mt: 2, mb: 2 }}>
            <Grid size={12} ref={ref2} sx={{ mb: 2 }}>
                <Box ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''} sx={{ visibility: inView ? 'visible' : 'hidden', width: '100%' }}>
                    <Divider sx={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: responsive ? '25px' : '30px', color: 'secondary.main', width: responsive ? '80%' : '40%', m: 'auto' }}>
                        REGISTRO
                    </Divider>
                </Box>
            </Grid>
            <Grid size={12} sx={{ mb: 3 }}>
                <Box sx={{ width: responsive ? '90%' : '45%', height: '100%', m: 'auto', p: 3, borderRadius: 5, boxShadow: '0 7px 10px 3px rgba(1,18,38, 0.15)', backgroundColor: 'primary.main' }}>
                    <FormControl fullWidth sx={{ mt: 2, gap: 3 }}>
                        <Grid>
                            <InputLabel
                                id='cat-select'
                                sx={{
                                    '&.Mui-focused': {
                                        color: 'black',
                                    }
                                }}>
                                Categoría *
                            </InputLabel>
                            <Select
                                labelId='cat-select'
                                label='Categoría --'
                                fullWidth
                                value={values.categoria}
                                sx={{
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'text.secondary'
                                    }
                                }}
                                onChange={(e) => setValues({ ...values, categoria: e.target.value })}
                            >
                                {categorias.map((cat, index) =>
                                    <MenuItem key={index} value={cat}>{cat}</MenuItem>
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <TextField
                                label='Acrónimo * (C. / Dr. / L.E. / Q.C. /  Q.F.B. / Lic. / C.D. / etc - será utilizado para su constancia)'
                                fullWidth
                                autoComplete='off'
                                value={values.acronimo}
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused': {
                                        '& fieldset': {
                                            borderColor: 'text.secondary', // Cambia el color del borde
                                        }
                                    },
                                    "& label": {
                                        color: 'background.default'
                                    },
                                    "& label.Mui-focused": {
                                        color: 'black'
                                    }
                                }}
                                /* slotProps={{
                                    inputLabel: { color: 'black' }
                                }} */
                                onChange={(e) => setValues({ ...values, acronimo: e.target.value.toUpperCase() })}
                            /* error={errors.acronimo?.error}
                            helperText={errors.acronimo?.error ? errors.acronimo?.msg : ''} */
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                label='Nombre (s) *'
                                fullWidth
                                autoComplete='off'
                                value={values.nombre}
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused': {
                                        '& fieldset': {
                                            borderColor: 'text.secondary', // Cambia el color del borde
                                        }
                                    },
                                    "& label": {
                                        color: 'background.default'
                                    },
                                    "& label.Mui-focused": {
                                        color: 'black'
                                    }
                                }}
                                onChange={(e) => setValues({ ...values, nombre: e.target.value.toUpperCase() })}
                            /* error={errors.nombre?.error}
                            helperText={errors.nombre?.error ? errors.nombre?.msg : ''} */
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                label='Apellidos *'
                                fullWidth
                                autoComplete='off'
                                value={values.apellidos}
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused': {
                                        '& fieldset': {
                                            borderColor: 'text.secondary', // Cambia el color del borde
                                        }
                                    },
                                    "& label": {
                                        color: 'background.default'
                                    },
                                    "& label.Mui-focused": {
                                        color: 'black'
                                    }
                                }}
                                onChange={(e) => setValues({ ...values, nombre: e.target.value.toUpperCase() })}
                            /* error={errors.nombre?.error}
                            helperText={errors.nombre?.error ? errors.nombre?.msg : ''} */
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                label='RFC (opcional)'
                                fullWidth
                                autoComplete='off'
                                value={values.rfc}
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused': {
                                        '& fieldset': {
                                            borderColor: 'text.secondary', // Cambia el color del borde
                                        }
                                    },
                                    "& label": {
                                        color: 'background.default'
                                    },
                                    "& label.Mui-focused": {
                                        color: 'black'
                                    }
                                }}
                                onChange={(e) => setValues({ ...values, nombre: e.target.value.toUpperCase() })}
                            /* error={errors.nombre?.error}
                            helperText={errors.nombre?.error ? errors.nombre?.msg : ''} */
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                label='Correo Electrónico *'
                                fullWidth
                                autoComplete='off'
                                value={values.correo}
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused': {
                                        '& fieldset': {
                                            borderColor: 'text.secondary', // Cambia el color del borde
                                        }
                                    },
                                    "& label": {
                                        color: 'background.default'
                                    },
                                    "& label.Mui-focused": {
                                        color: 'black'
                                    }
                                }}
                                onChange={(e) => setValues({ ...values, nombre: e.target.value.toUpperCase() })}
                            /* error={errors.nombre?.error}
                            helperText={errors.nombre?.error ? errors.nombre?.msg : ''} */
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                label='No. Teléfono *'
                                fullWidth
                                autoComplete='off'
                                value={values.tel}
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused': {
                                        '& fieldset': {
                                            borderColor: 'text.secondary', // Cambia el color del borde
                                        }
                                    },
                                    "& label": {
                                        color: 'background.default'
                                    },
                                    "& label.Mui-focused": {
                                        color: 'black'
                                    }
                                }}
                                onChange={(e) => setValues({ ...values, nombre: e.target.value.toUpperCase() })}
                            /* error={errors.nombre?.error}
                            helperText={errors.nombre?.error ? errors.nombre?.msg : ''} */
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                label='Ciudad de Procedencia *'
                                fullWidth
                                autoComplete='off'
                                value={values.ciudad}
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused': {
                                        '& fieldset': {
                                            borderColor: 'text.secondary', // Cambia el color del borde
                                        }
                                    },
                                    "& label": {
                                        color: 'background.default'
                                    },
                                    "& label.Mui-focused": {
                                        color: 'black'
                                    }
                                }}
                                onChange={(e) => setValues({ ...values, nombre: e.target.value.toUpperCase() })}
                            /* error={errors.nombre?.error}
                            helperText={errors.nombre?.error ? errors.nombre?.msg : ''} */
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                label='Escuela, Institución o Dependencia (opcional)'
                                fullWidth
                                autoComplete='off'
                                value={values.dependencia}
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused': {
                                        '& fieldset': {
                                            borderColor: 'text.secondary', // Cambia el color del borde
                                        }
                                    },
                                    "& label": {
                                        color: 'background.default'
                                    },
                                    "& label.Mui-focused": {
                                        color: 'black'
                                    }
                                }}
                                onChange={(e) => setValues({ ...values, nombre: e.target.value.toUpperCase() })}
                            /* error={errors.nombre?.error}
                            helperText={errors.nombre?.error ? errors.nombre?.msg : ''} */
                            />
                        </Grid>
                        <Grid>
                            <Autocomplete
                                id='select-modulo'
                                options={modulos}
                                getOptionLabel={option => option}
                                value={values.modulo}
                                onChange={(e, value) => setValues({ ...values, modulo: value })}
                                renderOption={(props, options) => (
                                    <MenuItem {...props}>
                                        <ListItemText primary={options} />
                                    </MenuItem>
                                )}
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        label='Módulo al que asiste *'
                                        sx={{
                                            '& .MuiOutlinedInput-root.Mui-focused': {
                                                '& fieldset': {
                                                    borderColor: 'text.secondary', // Cambia el color del borde
                                                }
                                            },
                                            "& label": {
                                                color: 'background.default'
                                            },
                                            "& label.Mui-focused": {
                                                color: 'black'
                                            }
                                        }}
                                    /* error={errors.modulo?.error}
                                    helperText={errors.modulo?.error ? errors.modulo?.msg : ''} */
                                    />
                                )}
                            />
                        </Grid>
                        <Grid>
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey={`${process.env.REACT_APP_SITE_KEY}`}
                                size='normal'
                                theme='light'
                                style={{ width: '305px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }}
                                onChange={() => enableButton(values)}
                                onExpired={disableButton}
                                onClick={(e) => handleSubmit}
                            />

                            <Grid sx={{ display: 'block', mb: -1 }} className='animate__animated animate__fadeInUp'>
                                <Checkbox sx={{
                                    '&.Mui-checked': {
                                        color: '#2a7dd3',
                                    }
                                }} defaultChecked onChange={manageDisabled} />Acepto que mis datos personales sean tratados de acuerdo con el <Link sx={{ color: '#2a7dd3' }} href="https://www.ssaver.gob.mx/transparencia/wp-content/uploads/sites/7/2022/06/Aviso-de-privacidad-simplificado-e-integral-Capacitacion.pdf" target="_blank">
                                    <b>aviso de privacidad de capacitación.</b>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid sx={{ display: 'block', textAlign: 'center' }}>
                            <Button disabled={disabled} className='animate__animated animate__fadeInUp' variant='contained' onClick={handleSubmit} sx={{ display: 'inline-block', backgroundColor: "text.secondary", ":hover": { backgroundColor: '#b09a6b' }, color: 'primary.main' }}>
                                Enviar
                            </Button>
                        </Grid>
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
    )
}
