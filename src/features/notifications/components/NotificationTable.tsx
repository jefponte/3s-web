import { IconButton, Typography } from "@mui/material";
import {
  DataGrid,
  ptBR,
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";
import { Results } from "../../../types/Notification";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  data: Results | undefined | any;
  perPage: number;
  isFetching: boolean;
  rowsPerPage?: number[];

  handleOnPageChange: (page: number) => void;
  handleFilterChange: (filterModel: GridFilterModel) => void;
  handleOnPageSizeChange: (perPage: number) => void;
};

export function NotificationTable({
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
    { field: "order_id", headerName: "Ocorrência", flex: 1},
    { field: "user_name", headerName: "Name", flex: 1},
    { field: "description", headerName: "Descrição", flex: 1  },
    { field: "created_at", headerName: "Data", flex: 1  },
    { field: "created_at_time", headerName: "Hora", flex: 1 }
  ];

  function renderActionsCell(params: GridRenderCellParams) {
    return (
      <IconButton
        color="primary"
        aria-label="delete"
        data-testid="delete-button"
      >
        <SearchIcon/>
      </IconButton>
    );
  }
  function mapDataToGridRows(data: Results) {
    const { data: notifications } = data;
    return notifications.map((notification) => ({
      id: notification.id,
      type: notification.type,
      order_id: notification.order.id,
      user_name: notification.user.name,
      description: notification.message,
      created_at: new Date(notification.created_at).toLocaleDateString("pt-BR"),
      created_at_time: new Date(notification.created_at).toLocaleTimeString("pt-BR"),
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
    <Box sx={{ display: "flex", height: 450, width: '100%' }}>
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