import * as React from 'react';
import { Box, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Navigate, useNavigate } from 'react-router-dom';
import {
    GridRowsProp,
    useGridApiRef,
    GridRowModesModel,
    DataGridPro,
    GridApi,
    GridRowModes,
    GridColumns,
    GridRowParams,
    MuiEvent,
    GridToolbarContainer,
    GridActionsCellItem,
    GridEventListener,
    GridEvents,
    GridRowId,
    GridRowModel,
} from '@mui/x-data-grid-pro';


const initialRows: GridRowsProp = [
    {
        id: 22,
        age: 25,
        dateCreated: 33,
        lastLogin: 22,
        patientname: "maxi",
        Address: "no2 gandiraod 23",
        number: 23,
        status: "progress"
    },
    {
        id: 22,

        age: 25,
        dateCreated: 33,
        lastLogin: 22,
        patientname: "maxi",
        Address: "no2 gandiraod 23",
        number: 23,
        status: "progress"
    },
    {
        id: 22,

        age: 25,
        dateCreated: 33,
        lastLogin: 22,
        patientname: "maxi",
        Address: "no2 gandiraod 23",
        number: 23,
        status: "progress"
    },
    {
        id: 22,

        age: 25,
        dateCreated: 33,
        lastLogin: 22,
        patientname: "maxi",
        Address: "no2 gandiraod 23",
        number: 23,
        status: "progress"
    },
    {
        id: 22,

        age: 25,
        dateCreated: 33,
        lastLogin: 22,
        patientname: "maxi",
        Address: "no2 gandiraod 23",
        number: 23,
        status: "progress"
    },
    {
        id: 22,
        age: 25,
        dateCreated: 33,
        lastLogin: 22,
        patientname: "maxi",
        Address: "no2 gandiraod jam",
        number: 23,
        status: "progress"
    },


];


function AllPatientsView() {
    const [rows, setRows] = React.useState(initialRows);
    const navigate = useNavigate()
    const handleEditClick = (params: GridRowParams) => () => {
    };
    const handleViewClick = (params: GridRowParams) => () => {
        console.log(params.row)
        navigate("/dashboard/viewPatients", {
            state: {
                detail: params.row
            }
        })
    }
    const handleDeleteClick = (params: GridRowParams) => () => {
    }
    const columns: GridColumns = [
        { field: 'id', headerName: 'patient id', type: "string", width: 300 },
        { field: 'patientname', headerName: 'Patient Name', type: 'string', width: 300 },
        {
            field: 'age',
            headerName: 'age',
            type: 'number',
            width: 100,

        },
        {
            field: 'Address',
            headerName: 'address',
            type: 'string',
            width: 300,

        },
        {
            field: 'number',
            headerName: 'number',
            type: 'number',
            width: 300,


        },
        {
            field: 'status',
            headerName: 'status',
            type: 'string',
            width: 200,

        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: (params) => {
                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(params)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(params)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<VisibilityIcon />}
                        onClick={handleViewClick(params)}
                        label="visible"
                        color="inherit"
                    />,
                ];
            },
        },
    ];
    const [pageSize, setPageSize] = React.useState<number>(5);
    return (
        <div className="mt-2">
            <Paper>
                <div>
                    <div className="revenueDash-font">Total Revenue</div>
                </div>
                <Box
                    sx={{
                        height:
                            700,
                        width: '100%',
                        padding: "20px",
                        '& .actions': {
                            color: 'text.secondary',
                        },
                        '& .textPrimary': {
                            color: 'text.primary',
                        },
                    }}
                >
                    <DataGridPro
                        rows={rows}
                        columns={columns}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        rowsPerPageOptions={[5, 10, 20]}
                        pagination
                        experimentalFeatures={{ newEditingApi: true }}
                    />
                </Box>
            </Paper>
        </div>
    );
}

export default AllPatientsView