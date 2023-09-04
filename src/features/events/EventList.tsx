import { Search } from "@mui/icons-material";
import { Box, Card, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Modal, Typography } from "@mui/material";
import { DataGrid, ptBR } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../services/api";
import { Event } from "./eventSlice";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export function EventList() {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event>({} as Event);

  const handleOpen = (params: any) => {
    setSelectedEvent(params?.row);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const columns = [
    { field: 'id', headerName: "Nº", flex: 1 },
    { field: 'area', headerName: "Área", width: 200 },
    { field: 'process', headerName: "Processo ", width: 200 },
    { field: 'riskEvent', headerName: "Evento de Risco", width: 200 },
    { field: 'riskClass', headerName: "Classificação do Risco Inerente", width: 200 },
    { field: 'treatmentOption', headerName: "Resposta ao risco - Opção de Tratamento " },
    { field: 'actions', headerName: "Resposta o risco - Ações Propostas", width: 250 },
    { field: 'status', headerName: "Situação", width: 250 }
  ];

  const [events, setevEnts] = useState([]);
  useEffect(() => {
    fetchData(setevEnts);
  }, []);

  return (
    <Card variant="outlined">
      <Box sx={{ height: 450, width: '100%' }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              Risco Nº {selectedEvent.id}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedEvent.riskEvent}
            </Typography>
            <MenuList>
              <Divider />
              <Link to={`/events/${selectedEvent.id}`}>
                <MenuItem>
                  <ListItemIcon>
                    <Search fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Ver Detalhes</ListItemText>
                </MenuItem>
              </Link>
            </MenuList>


          </Box>
        </Modal>
        <DataGrid
          rows={events}
          columns={columns}
          loading={events.length === 0}
          rowHeight={74}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          onCellClick={handleOpen}
        />
      </Box>
    </Card>
  )
}
