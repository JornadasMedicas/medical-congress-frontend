import React, { useEffect, useRef, useState } from 'react'
import Grid from '@mui/material/Grid2';
import { useInView } from 'react-intersection-observer';
import { setActiveSection } from '../../store/slices/sections';
import { useDispatch } from 'react-redux';
import { categorias, initValuesFormJornadas, initValuesFormJornadasErrors, modulos, text } from '../../helpers/data';
import ReCAPTCHA from "react-google-recaptcha";
import { Autocomplete, Button, Checkbox, CircularProgress, Divider, FormControl, InputLabel, Link, ListItemText, MenuItem, Select, TextField, useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { navBarHeigth, navBarHeigthResponsive } from './Home';
import { Box } from '@mui/system';
import { JornadasValuesInterface, RegistFormInterface } from '../../interfaces/IRegistForm';
import Swal from 'sweetalert2';
import { validateJornadasFields } from '../../helpers/validateRegistForm';
import { postRegistMail } from '../../services/endpoints';
import { regexAcron, regexCD, regexMailPre, regexRFC, regexReg, regexTel } from '../../helpers/regex';

export const Registro = () => {
    const dispatch = useDispatch();
    const captcha = useRef<any>(null);
    const { pathname } = useLocation();
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const [visible, setVisible] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [values, setValues] = useState<RegistFormInterface>(initValuesFormJornadas);
    const [errors, setErrors] = useState<JornadasValuesInterface>(initValuesFormJornadasErrors);
    const [loading, setLoading] = useState<boolean>(false);
    let disableCheckboxes: boolean = false;
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

    const enableButton = (values: RegistFormInterface) => {
        const confirmText = text(values);
        Swal.fire(
            confirmText
        ).then((result) => {
            if (result.isConfirmed) {
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
        disabled === false ? setDisabled(true) : setDisabled(false)
    }

    const handleSubmit = async () => {
        const { isOk, errors } = validateJornadasFields(values);

        if (isOk) {
            setDisabled(true);
            setLoading(true);

            const res: any = await postRegistMail(values);
            
            if (res.data) {
                setDisabled(false);
                setLoading(false);

                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    html: 'Su pase de entrada (código QR) se enviará a su correo electrónico en breve. <hr><b>No olvide llevarlo consigo pues será su registro de asistencia.<b>',
                    confirmButtonColor: '#d3c19b'
                });

                setErrors(initValuesFormJornadasErrors);
                setValues(initValuesFormJornadas);
            } else if (res.error) {
                setDisabled(false);
                setLoading(false);

                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: res.error.response ? res.error.response.data.msg : 'No se ha podido procesar su solicitud. Intente más tarde',
                    showConfirmButton: true,
                    confirmButtonColor: '#d37c6b'
                });
                setErrors(initValuesFormJornadasErrors);
            }
        } else {
            setErrors(errors);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Verifica los campos e intenta de nuevo',
            });
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Grid container sx={{ pt: responsive ? `${navBarHeigthResponsive}px` : `${navBarHeigth}px`, mt: 2, mb: 2 }}>
            <Grid size={12} ref={ref2} sx={{ mb: 2 }}>
                <Box ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''} sx={{ visibility: inView ? 'visible' : 'hidden', width: '100%' }}>
                    <Divider sx={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: responsive ? '25px' : '30px', color: 'secondary.main', width: responsive ? '80%' : '30%', m: 'auto' }}>
                        REGISTRO
                    </Divider>
                </Box>
            </Grid>
            <Grid size={12} sx={{ mb: 3 }}>
                <Box sx={{ width: responsive ? '90%' : '47%', height: '100%', m: 'auto', p: 3, borderRadius: 5, boxShadow: '0 7px 10px 3px rgba(1,18,38, 0.15)', backgroundColor: 'primary.main' }}>
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
                                onChange={(e) => setValues({ ...values, acronimo: regexAcron.test(e.target.value) ? e.target.value.toUpperCase() : values.acronimo })}
                                error={errors.acronimo.error}
                                helperText={errors.acronimo.error ? errors.acronimo.msg : ''}
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
                                onChange={(e) => setValues({ ...values, nombre: regexReg.test(e.target.value) ? e.target.value.toUpperCase() : values.nombre })}
                                error={errors.nombre.error}
                                helperText={errors.nombre.error ? errors.nombre.msg : ''}
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
                                onChange={(e) => setValues({ ...values, apellidos: regexReg.test(e.target.value) ? e.target.value.toUpperCase() : values.apellidos })}
                                error={errors.apellidos.error}
                                helperText={errors.apellidos.error ? errors.apellidos.msg : ''}
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
                                slotProps={{
                                    htmlInput: { maxLength: 13 }
                                }}
                                onChange={(e) => setValues({ ...values, rfc: regexRFC.test(e.target.value) ? e.target.value.toUpperCase() : values.rfc })}
                                error={errors.rfc.error}
                                helperText={errors.rfc.error ? errors.rfc.msg : ''}
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
                                onChange={(e) => setValues({ ...values, correo: regexMailPre.test(e.target.value) ? e.target.value : values.correo })}
                                error={errors.correo.error}
                                helperText={errors.correo.error ? errors.correo.msg : ''}
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
                                onChange={(e) => setValues({ ...values, tel: regexTel.test(e.target.value) ? e.target.value : values.tel })}
                                error={errors.tel.error}
                                helperText={errors.tel.error ? errors.tel.msg : ''}
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
                                onChange={(e) => setValues({ ...values, ciudad: regexCD.test(e.target.value) ? e.target.value.toUpperCase() : values.ciudad })}
                                error={errors.ciudad.error}
                                helperText={errors.ciudad.error ? errors.ciudad.msg : ''}
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
                                onChange={(e) => setValues({ ...values, dependencia: regexCD.test(e.target.value) ? e.target.value.toUpperCase() : values.dependencia })}
                                error={errors.dependencia.error}
                                helperText={errors.dependencia.error ? errors.dependencia.msg : ''}
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
                                        label='Módulo al que asiste (opcional)'
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
                                        error={errors.modulo.error}
                                        helperText={errors.modulo.error ? errors.modulo.msg : ''}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid columns={2} sx={{ mt: 0 }}>
                            <fieldset style={{ border: '2px inset #5dadb6', borderRadius: '20px' }}>
                                <legend style={{ margin: 'auto', fontSize: responsive ? 24 : 25, paddingLeft: '1rem', paddingRight: '1rem' }}>Taller Químicos</legend>
                                <Grid sx={{ textAlign: 'left', paddingLeft: 2, paddingBottom: 2 }}>
                                    <Checkbox
                                        sx={{ '&.Mui-checked': { color: '#2a7dd3' } }}
                                        disabled={disableCheckboxes}
                                        checked={values.t1.checked}
                                        onChange={(e) => setValues({ ...values, t1: { ...values.t1, checked: e.target.checked } })}
                                    /> <b>22 de Noviembre</b> - Estrategias Integradas para el Manejo del Paciente Crítico {/* - <b style={{ color: 'red' }}>cupos agotados</b> */}
                                </Grid>
                            </fieldset>
                            {/* <fieldset style={{ border: '2px inset #d6c09b', borderRadius: '20px', marginTop: '15px', width: '100%' }}>
                                <legend style={{ margin: 'auto', fontSize: responsive ? 24 : 25, paddingLeft: '1rem', paddingRight: '1rem' }} >Talleres Estomatología</legend>
                                <Grid sx={{ textAlign: 'left', paddingLeft: 2, paddingBottom: 2 }}>
                                    <Checkbox
                                        sx={{ '&.Mui-checked': { color: '#2a7dd3' } }}
                                        disabled={disableCheckboxes}
                                        checked={values.t2.checked}
                                        onChange={(e) => setValues({ ...values, t2: { ...values.t2, checked: e.target.checked } })} />
                                    <b>23 de Noviembre</b> - Complicaciones y Errores en el Tratamiento de Restauración Interproximales <br />
                                    <Checkbox
                                        sx={{ '&.Mui-checked': { color: '#2a7dd3' } }}
                                        disabled={disableCheckboxes}
                                        checked={values.t3.checked}
                                        onChange={(e) => setValues({ ...values, t3: { ...values.t3, checked: e.target.checked } })} /><b>24 de Noviembre</b> - Utilización de Distintas Técnicas Quirúrgicas en Pacientes de Labio y Paladar Hendido<br />
                                    <Checkbox
                                        sx={{ '&.Mui-checked': { color: '#2a7dd3' } }}
                                        disabled={disableCheckboxes}
                                        checked={values.t4.checked}
                                        onChange={(e) => setValues({ ...values, t4: { ...values.t4, checked: e.target.checked } })} /><b>24 de Noviembre</b> - Cirugía Maxilofacial en Cuba
                                </Grid>
                            </fieldset> */}
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
                            <Grid sx={{ display: 'block', mb: -1, textAlign: 'center' }} className='animate__animated animate__fadeInUp'>
                                <Checkbox sx={{
                                    '&.Mui-checked': {
                                        color: '#2a7dd3',
                                    }
                                }} defaultChecked onChange={manageDisabled} />Acepto que mis datos personales sean tratados de acuerdo con el <Link sx={{ color: '#2a7dd3' }} href="https://www.ssaver.gob.mx/transparencia/wp-content/uploads/sites/7/2022/06/Aviso-de-privacidad-simplificado-e-integral-Capacitacion.pdf" target="_blank">
                                    <b>aviso de privacidad de capacitación.</b>
                                </Link>
                            </Grid>
                        </Grid>
                        {
                            visible &&
                            <>
                                <Grid sx={{ display: 'block', textAlign: 'center', position: 'relative' }}>
                                    <Button hidden disabled={disabled} className='animate__animated animate__fadeInUp' variant='contained' onClick={handleSubmit} sx={{ backgroundColor: "text.secondary", ":hover": { backgroundColor: '#b09a6b' }, color: 'primary.main' }}>
                                        Enviar
                                    </Button>
                                    {loading && (
                                        <CircularProgress
                                            size={24}
                                            sx={{
                                                color: '#da8777',
                                                position: 'absolute',
                                                top: '53%',
                                                left: '50%',
                                                marginTop: '-12px',
                                                marginLeft: '-12px',
                                            }}
                                        />
                                    )}
                                </Grid>
                            </>
                        }
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
    )
}
