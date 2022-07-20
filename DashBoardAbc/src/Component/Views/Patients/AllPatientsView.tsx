import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
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
        name: "maniamran",
        age: 25,
        dateCreated: 33,
        lastLogin: 22,
    },

];


function AllPatientsView() {
    const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
    const apiRef = useGridApiRef();
    const handleRowEditStart = (
        params: GridRowParams,
        event: MuiEvent<React.SyntheticEvent>,
    ) => {
        event.defaultMuiPrevented = true;
    };
    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        event.defaultMuiPrevented = true;
    };
    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };
    const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });
    }

    console.log("jsm", rowModesModel)
    const columns: GridColumns = [
        { field: 'id', headerName: 'patient id', width: 300, editable: true },
        { field: 'patient name', headerName: 'Patient Name', type: 'string', width: 300, editable: true },
        {
            field: 'age',
            headerName: 'age',
            type: 'date',
            width: 100,
            editable: true
        },
        {
            field: 'Address',
            headerName: 'address',
            type: 'dateTime',
            width: 300,
            editable: true
        },
        {
            field: 'number',
            headerName: 'number',
            type: 'dateTime',
            width: 300,
            editable: true

        },
        {
            field: 'status',
            headerName: 'status',
            type: 'string',
            width: 200,
            editable: true

        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                console.log("overall", rowModesModel[id])
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"

                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }
                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<VisibilityIcon />}
                        label="visible"
                        color="inherit"
                    />,
                ];
            },
        },
    ];
    const [pageSize, setPageSize] = React.useState<number>(5);
    return (
        <Box
            sx={{
                height: 500,
                width: '100%',
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
                apiRef={apiRef}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20]}
                onRowEditStart={handleRowEditStart}
                //processRowUpdate={processRowUpdate}
                rowModesModel={rowModesModel}
                pagination
                onRowEditStop={handleRowEditStop}
                editMode="row"
                // components={{
                //   Toolbar: EditToolbar,
                // }}
                componentsProps={{
                    toolbar: { apiRef },
                }}
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}

export default AllPatientsView