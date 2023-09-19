import { IconButton, Typography } from "@mui/material";
import {
  DataGrid,
  ptBR,
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";
import { Results } from "../../../types/User";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
type Props = {
  data: Results | undefined;
  perPage: number;
  isFetching: boolean;
  rowsPerPage?: number[];

  handleOnPageChange: (page: number) => void;
  handleFilterChange: (filterModel: GridFilterModel) => void;
  handleOnPageSizeChange: (perPage: number) => void;
};

export function UserTable({
  data,
  perPage,
  isFetching,
  rowsPerPage,
  handleOnPageChange,
  handleFilterChange,
  handleOnPageSizeChange
}: Props) {
  const componentProps = {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, renderCell: renderNameCell },
    { field: "description", headerName: "Descrição", flex: 1, renderCell: renderNameCell },
    {
      field: "id",
      headerName: "Actions",
      type: "string",
      width: 150,
      renderCell: renderActionsCell,
    },
  ];

  function mapDataToGridRows(data: Results) {
    const { data: services } = data;
    return services.map((category) => ({
      id: category.id,
      name: category.name,
      created_at: category.created_at,
    }));
  }

  function renderActionsCell(params: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        aria-label="delete"
        data-testid="delete-button"
      >
        <DeleteIcon />
      </IconButton>
    );
  }

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/services/edit/${rowData.id}`}
      >
        <Typography color="primary">{rowData.value}</Typography>
      </Link>
    );
  }

  function renderIsActiveCell(rowData: GridRenderCellParams) {
    return (
      <Typography color={rowData.value ? "primary" : "secondary"}>
        {rowData.value ? "Active" : "Inactive"}
      </Typography>
    );
  }

  const rows = data ? mapDataToGridRows(data) : [];
  const rowCount = data?.meta.total || 0;

  return (
    <Box sx={{ display: "flex", height: 600 }}>
      <DataGrid
        rows={rows}
        pagination={true}
        columns={columns}
        pageSize={perPage}
        filterMode="server"
        rowCount={rowCount}
        loading={isFetching}
        paginationMode="server"
        checkboxSelection={false}
        disableColumnFilter={true}
        disableColumnSelector={true}
        disableDensitySelector={true}
        rowsPerPageOptions={rowsPerPage}
        componentsProps={componentProps}
        onPageChange={handleOnPageChange}
        components={{ Toolbar: GridToolbar }}
        onFilterModelChange={handleFilterChange}
        onPageSizeChange={handleOnPageSizeChange}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </Box>
  );
}