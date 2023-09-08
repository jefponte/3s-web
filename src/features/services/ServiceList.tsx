import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, GridToolbar, ptBR } from '@mui/x-data-grid';
import { enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { useDeleteServiceMutation, useGetServicesQuery } from './serviceSlice';


export default function ServiceList() {
  const { data, isFetching, error } = useGetServicesQuery();
  const [deleteService, deleteServiceStatus] = useDeleteServiceMutation();

  const rows: GridRowsProp = data ? data.data.map((service) => ({
    id: service.id,
    name: service.name,
    description: service.description
  })) : [];

  const columns: GridColDef[] = [
    {
      field: 'name',
      renderCell: renderNameCell,
      headerName: 'Nome', flex: 1
    },
    { field: 'description', headerName: 'Descrição', flex: 1 },
    {
      field: 'id',
      headerName: 'Deletar',
      type: "string",
      flex: 1,
      renderCell: renderDeleteActionCell
    },

  ];

  async function handleDeleteService(id: string) {
    await deleteService({ id });
  }
  useEffect(() => {
    if(deleteServiceStatus.isSuccess) {
      enqueueSnackbar("Serviço deletado com sucesso!", {variant: "success"});
    }
  }, [deleteServiceStatus, enqueueSnackbar]);

  function renderDeleteActionCell(params: GridRenderCellParams) {
    const { id } = params;
    return (
      <IconButton
        color="secondary"
        onClick={() => handleDeleteService(params.value)}
        arial-label="delete"
      >
        <DeleteIcon />

      </IconButton>);
  }
  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/services/edit/${rowData.id}`}
      >
        <Typography color="primary">{rowData.value}</Typography>
      </Link>);
  }
  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/services/create"
          style={{ marginBottom: "1rem" }}
        >
          Novo Serviço
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", height: 600 }}
      >


        <DataGrid
          rows={rows} columns={columns}
          slots={{ toolbar: GridToolbar }}
          disableColumnSelector={true}
          disableColumnFilter={true}
          disableDensitySelector={true}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 }
            },
          }}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>

    </Box>
  )
}
