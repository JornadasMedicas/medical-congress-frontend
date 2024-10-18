import { GridColDef } from '@mui/x-data-grid';
import moment from 'moment';
import 'moment/locale/es-mx';

export const columns: GridColDef[] = [
    { field: 'acronimo', headerName: 'ACRONIMO', flex: 1, headerAlign: 'center', align: 'center', sortable: false },
    { field: 'nombre', headerName: 'NOMBRE', flex: 2, headerAlign: 'center', align: 'center', sortable: false },
    {
        field: 'correo', headerName: 'CORREO', flex: 1.5, headerAlign: 'center', align: 'center', sortable: false
    },
    {
        field: 'tel', headerName: 'TELEFONO', flex: 1, headerAlign: 'center', align: 'center', sortable: false
    },
    {
        field: 'created_at', headerName: 'FEC. REGISTRO', flex: 1.5, headerAlign: 'center', align: 'center', sortable: false
    }
];

export const AssistantsRows = (assistants: any) => {
    moment.locale('es-mx')

    const rows = assistants.map((data: any) => {    
        return {
            id: data.id,
            acronimo: data.acronimo,
            nombre: data.nombre,
            correo: data.correo,
            tel: data.tel,
            created_at: moment(data.created_at).utc().format('LLLL')
        }
    });

    return rows;
}