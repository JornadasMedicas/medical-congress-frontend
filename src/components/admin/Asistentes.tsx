import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import { Autocomplete, Box, Card, FormControl, InputLabel, Paper, Select, TableContainer, TextField, Typography, useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AsistentesPaginationTable from './AsistentesPaginationTable';
import { useDispatch, useSelector } from 'react-redux';
import { getAssitants, getAssitantsAutocomplete, getTotalAssitants } from '../../services/endpoints';
import { ReduxGeneralSelector } from '../../interfaces/ReduxGeneral';
import { ReqAssistants, ReqAssistantsAutocomplete, ReqAssistantsAutocompleteInterface } from '../../interfaces/IAdmin';
import { AssistantsRows, columns } from '../../helpers/assistantsTable';
import { manageAssistantsTableActionFilters, setAssistantsTableAction } from '../../store/slices/admin';
import { modulosFiltros, talleresFiltros } from '../../helpers/data';

export const Asistentes = () => {
    const dispatch = useDispatch();
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { assistantsTable } = useSelector((state: ReduxGeneralSelector) => state.admin);
    const { filters } = assistantsTable;
    const [totalRows, setTotalRows] = useState<number>();
    const [rows, setRows] = useState<any>();
    const [options, setOptions] = useState<ReqAssistantsAutocompleteInterface[]>([]);

    const handleFilters = (value: string | number) => {
        if (value.toString() === '0') {
            dispatch(manageAssistantsTableActionFilters({ module: '', workshop: '' }))
        } else if (value.toString().length > 1) {
            dispatch(manageAssistantsTableActionFilters({ module: value.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase(), workshop: '' }))
        } else {
            dispatch(manageAssistantsTableActionFilters({ module: '', workshop: value.toString() }))
        }
    }

    const handleAutoChange = (value: ReqAssistantsAutocompleteInterface | null) => {
        if (value === null) {
            dispatch(manageAssistantsTableActionFilters({ email: '' }));
        } if (value != null) {
            dispatch(manageAssistantsTableActionFilters({ email: value.correo }));
        }
    }

    const searchAssistant = async (value: string) => {
        if (value !== '') {
            let asistente: ReqAssistantsAutocomplete = await getAssitantsAutocomplete(value);
            setOptions(asistente.data);
        } else {
            setOptions([]);
        }
    }

    useEffect(() => {
        const getAssistants = async () => {
            let asistentes: ReqAssistants = await getAssitants({
                limit: '10',
                page: assistantsTable.tablePage,
                email: filters.email,
                module: filters.module,
                workshop: filters.workshop
            });

            let row = AssistantsRows(asistentes.data);
            setRows(row);
        }

        const getTotal = async () => {
            let total: any = await getTotalAssitants({
                email: filters.email,
                module: filters.module,
                workshop: filters.workshop
            });
            setTotalRows(total.data)
            dispatch(setAssistantsTableAction({ key: 'totalRows', value: total.data }))
        }

        getAssistants();
        getTotal();
    }, [assistantsTable.tablePage, filters.email, filters.module, filters.workshop, dispatch]);

    useEffect(() => {
        dispatch(manageAssistantsTableActionFilters({ email: '', module: '', workshop: '' }))
    }, [dispatch]);

    return (
        <Grid container className='animate__animated animate__fadeIn' rowSpacing={3} columns={12} sx={{ display: 'flex', flexDirection: 'row', mt: responsive ? 0 : -4 }}>
            <Grid size={'auto'}>
                <Box sx={{ height: '7vh', width: '100%', mb: -3, pl: 3, pr: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <FormControl sx={{ minWidth: 300 }}>
                        <InputLabel
                            htmlFor="grouped-native-select"
                            sx={{
                                '&.Mui-focused': {
                                    color: 'black',
                                },
                                color: 'black'
                            }}
                        >
                            Filtros
                        </InputLabel>
                        <Select
                            variant='outlined'
                            size='small'
                            native
                            defaultValue={0}
                            id="grouped-native-select"
                            onChange={(e) => handleFilters(e.target.value)}
                            label="Filtros"
                            sx={{
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#bd4f2b'
                                }
                            }}>
                            <option value={'0'}>Todos</option>
                            <optgroup label="MODULOS">
                                {
                                    modulosFiltros.map((item: any) => (
                                        <option value={item.nombre}>{item.nombre}</option>
                                    ))
                                }
                            </optgroup>
                            <optgroup label="TALLERES">
                                {
                                    talleresFiltros.map((item: any) => (
                                        <option value={item.id}>{item.nombre}</option>
                                    ))
                                }
                            </optgroup>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid size={'auto'}>
                <Box sx={{ height: '7vh', width: '100%', mb: -3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Autocomplete
                        autoComplete={false}
                        autoHighlight
                        sx={{ width: '400px', ml: responsive ? '30px' : '0px' }}
                        getOptionLabel={(option: any) => option.nombre}
                        includeInputInList
                        filterOptions={(x) => x}
                        filterSelectedOptions
                        onChange={(e, value) => handleAutoChange(value)}
                        options={options}
                        renderOption={(props, option: ReqAssistantsAutocompleteInterface) => (
                            <Box
                                component='li'
                                sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}
                            >
                                <Grid container spacing={2}>
                                    <Grid size={12}>
                                        <Typography variant='body2'>
                                            {option.nombre} :: {option.correo}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                sx={{ width: responsive ? '80%' : '95%', mt: 0.5 }}
                                size='small'
                                variant='standard'
                                autoComplete='off'
                                placeholder='Nombre o correo...'
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password'
                                }}
                                onChange={(e) => searchAssistant(e.target.value)}
                            />
                        )}
                    />
                </Box>
            </Grid>
            <Card sx={{ width: '100%' }}>
                <Paper sx={{ height: '100%', width: '100%', minHeight: '74vh' }}>
                    <TableContainer sx={{ height: responsive ? 'auto' : '74vh', width: '100%' }}>
                        <DataGrid
                            sx={{
                                backgroundColor: '#ffffff',
                                border: 2,
                                borderColor: 'darkgray',
                                '& .MuiDataGrid-columnHeaderTitle': {
                                    textOverflow: "clip",
                                    whiteSpace: "break-spaces",
                                    lineHeight: 1.5
                                },
                                "& .MuiDataGrid-cell": {
                                    borderRight: 0,
                                    borderTop: 0
                                },
                                '& .MuiDataGrid-columnHeader': {
                                    borderBottom: 1,
                                    fontWeight: 'bold',
                                    borderColor: 'lightblue',
                                    color: 'primary.main'
                                },
                                '& ::-webkit-scrollbar': {
                                    width: '10px',
                                },
                                '& ::-webkit-scrollbar-track': {
                                    background: '#f1f1f1',
                                },
                                '& ::-webkit-scrollbar-thumb': {
                                    backgroundColor: 'background.default',
                                },
                                '& ::-webkit-scrollbar-thumb:hover': {
                                    background: 'background.default',
                                },
                            }}
                            hideFooterSelectedRowCount
                            rowHeight={70}
                            disableColumnMenu
                            filterMode="server"
                            disableColumnFilter
                            rows={rows !== undefined ? rows : []}
                            paginationMode='server'
                            getRowId={(row) => row.id}
                            rowCount={totalRows}
                            pageSizeOptions={[10]}
                            columns={columns}
                            slots={{ pagination: AsistentesPaginationTable }}
                        />
                    </TableContainer>
                </Paper>
            </Card>
        </Grid>
    )
}
