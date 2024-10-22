import { Box, Pagination, PaginationItem, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAssistantsTableAction } from '../../store/slices/admin';
import { ReduxGeneralSelector } from '../../interfaces/ReduxGeneral';

export const AsistentesPaginationTable = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const { assistantsTable } = useSelector((state: ReduxGeneralSelector) => state.admin);
    
    useEffect(() => {
        dispatch(setAssistantsTableAction({ key: 'tablePage', value: page }));
    }, [page, dispatch])


    const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value - 1);
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={2} columns={12} sx={{ flexDirection: { xs: "column", md: "row" } }}>
                    <Grid size={6} sx={{ paddingLeft: '15px' }}>
                        <Typography sx={{ paddingTop: '5px' }}>{assistantsTable.totalRows} asistentes totales</Typography>
                    </Grid>
                    <Grid size={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Pagination
                            sx={{
                                "& li .Mui-selected": {
                                    color: "#ffffff",
                                    backgroundColor: "background.default"
                                },
                                "& li .Mui-selected:hover": {
                                    color: "#ffffff",
                                    backgroundColor: "background.default"
                                },
                                width: 'auto'
                            }}
                            variant="outlined"
                            shape="circular"
                            page={page + 1}
                            count={Math.ceil(assistantsTable.totalRows / 10)}
                            // @ts-expect-error
                            renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
                            onChange={(e, value) => handleChange(e, value)}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default AsistentesPaginationTable;