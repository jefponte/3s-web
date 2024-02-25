import { Button, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Modal, Typography } from "@mui/material";
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
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Search from "@mui/icons-material/Search";
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
type NotificationMap = {
  id: string;
  type: string;
  description: string;
  order_id: string;
  userName: string;
  createdAt: string;
  createdAtTime: string;
}

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

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationMap | null>(null);

  const handleOpenModal = (params: any) => {
    console.log(params?.row);
    setNotification(params?.row);
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);
  const componentProps = {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  };

  const columns: GridColDef[] = [
    { field: "order_id", headerName: "Ocorrência", flex: 1 },
    { field: "type", headerName: "Tipo", flex: 1 },
    { field: "userName", headerName: "Usuário", flex: 1 },
    { field: "description", headerName: "Mensagem", flex: 1 },
    { field: "createdAt", headerName: "Data", flex: 1 },
    { field: "createdAtTime", headerName: "Hora", flex: 1 }
  ];

  function mapDataToGridRows(data: Results) {
    const { data: notifications } = data;
    return notifications.map((notification) => ({
      id: notification.id,
      type: notification.type,
      order_id: notification.order.id,
      userName: notification.user.name,
      description: notification.message,
      createdAt: new Date(notification.created_at).toLocaleDateString("pt-BR"),
      createdAtTime: new Date(notification.created_at).toLocaleTimeString("pt-BR"),
    }));
  }

  const rows = data ? mapDataToGridRows(data) : [];
  const rowCount = data?.meta.total || 0;

  return (
    <>
    <Modal
        open={openModal}
        onClose={handleCloseModal}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Chamado Nº {notification?.order_id}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {notification?.userName}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {notification?.description}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {notification?.createdAt}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {notification?.createdAtTime}
          </Typography>
          <MenuList>
            <Button component={Link} to={`/orders/${notification?.order_id}`}>
              <MenuItem>
                <ListItemIcon>
                  <Search fontSize="small" />
                </ListItemIcon>
                <ListItemText>Ver Detalhes</ListItemText>
              </MenuItem>
            </Button>
          </MenuList>
        </Box>
      </Modal>
      <Box sx={{ display: "flex", height: 600, width: '100%' }}>
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
        onCellClick={handleOpenModal}
      />
    </Box>
    </>

  );
}