import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  DataGrid,
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridToolbar,
  ptBR,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Results } from "../../../types/Order";
type Props = {
  data: Results | undefined;
  perPage: number;
  isFetching: boolean;
  rowsPerPage?: number[];

  handleOnPageChange: (page: number) => void;
  handleFilterChange: (filterModel: GridFilterModel) => void;
  handleOnPageSizeChange: (perPage: number) => void;
};

export function OrderTable({
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
    { field: "id", headerName: "Id", flex: 1, renderCell: renderNameCell },
    { field: "serviceName", headerName: "Serviço", flex: 1, renderCell: renderNameCell },
    { field: "description", headerName: "Descrição", flex: 1, renderCell: renderNameCell },
    { field: "customerName", headerName: "Cliente", flex: 1, renderCell: renderNameCell },
    { field: "status", headerName: "Estado", width: 100, renderCell: renderNameCell },


  ];

  function mapDataToGridRows(data: Results) {
    const { data: orders } = data;
    return orders.map((order) => ({
      id: order.id,
      description: order.description,
      status: order.status,
      serviceName: order?.service?.name,
      customerName: order?.customer?.name,
      created_at: order.created_at,
    }));
  }



  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/orders/${rowData.id}`}
      >
        <Typography color="primary">{rowData.value}</Typography>
      </Link>
    );
  }


  const rows = data ? mapDataToGridRows(data) : [];
  const rowCount = data?.meta.total || 0;

  return (
    <Box sx={{ display: "flex",  height: 500, width: '100%' }}>
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