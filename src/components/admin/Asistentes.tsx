import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Card, FormControl, InputLabel, Paper, Select, TableContainer } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AsistentesPaginationTable from './AsistentesPaginationTable';
import { useDispatch, useSelector } from 'react-redux';
import { getAssitants, getTotalAssitants } from '../../services/endpoints';
import { ReduxGeneralSelector } from '../../interfaces/ReduxGeneral';
import { ReqAssistants } from '../../interfaces/IAdmin';
import { AssistantsRows, columns } from '../../helpers/assistantsTable';
import { manageAssistantsTableActionFilters, setAssistantsTableAction } from '../../store/slices/admin';
import { modulosFiltros, talleresFiltros } from '../../helpers/data';

export const Asistentes = () => {
    const dispatch = useDispatch();
    const { assistantsTable } = useSelector((state: ReduxGeneralSelector) => state.admin);
    const { filters } = assistantsTable;
    const [totalRows, setTotalRows] = useState<number>();
    const [rows, setRows] = useState<any>();

    const handleFilters = (value: string | number) => {
        if (value.toString() === '0') {
            dispatch(manageAssistantsTableActionFilters({ module: '', workshop: '' }))
        } else if (value.toString().length > 1) {
            dispatch(manageAssistantsTableActionFilters({ module: value.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase(), workshop: '' }))
        } else {
            dispatch(manageAssistantsTableActionFilters({ module: '', workshop: value.toString() }))
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
    }, [assistantsTable.tablePage, filters.email, filters.module, filters.workshop]);

    useEffect(() => {
        dispatch(manageAssistantsTableActionFilters({ email: '', module: '', workshop: '' }))
    }, [])

    return (
        <Grid container className='animate__animated animate__fadeIn' rowSpacing={3} columns={12} sx={{ flexDirection: { xs: "column", md: "row" } }}>
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
            <Card sx={{ width: '100%' }}>
                <Paper sx={{ height: '100%', width: '100%', minHeight: '74vh' }}>
                    <TableContainer sx={{ height: '100%', width: '100%' }}>
                        <DataGrid
                            sx={{
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
                                '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
                                    width: '10px',
                                },
                                '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
                                    background: '#f1f1f1',
                                },
                                '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#012250',
                                },
                                '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
                                    background: '#012250',
                                }
                            }}
                            hideFooterSelectedRowCount
                            rowHeight={60}
                            disableColumnMenu
                            filterMode="server"
                            disableColumnFilter
                            rows={rows != undefined ? rows : []}
                            paginationMode='server'
                            getRowId={(row) => row.id}
                            rowCount={totalRows}
                            pageSizeOptions={[10]}
                            columns={columns}
                            slots={{ pagination: AsistentesPaginationTable }}
                            loading={false}
                        />
                    </TableContainer>
                </Paper>
            </Card>
        </Grid>
    )
}
