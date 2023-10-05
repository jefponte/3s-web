import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { Order } from "../../../types/Order";
import { TimelineStatusLog } from "./TimelineStatusLog";
import { Link } from "react-router-dom";

type Props = {
  order: Order;
  isdisabled?: boolean;
  isLoading?: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const ReadMore = ({ children }: { children: string | null }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  if (text === undefined) {
    return (<></>);
  }
  if (text === null) {
    return (<></>);
  }
  if (text.length >= 150) {
    return <span>{text}</span>;
  }
  return (
    <>
      {isReadMore ? text.slice(0, 150) + "..." : text}
      <Button onClick={toggleReadMore}
        color="primary"
      >{isReadMore ? "mostrar mais" : " mostrar menos"}</Button>
    </>
  );
};


export function CardOrderSelected({
  order,
  isdisabled = false,
  isLoading = false,
  handleSubmit,
  handleChange
}: Props) {
  return (
    <Box p={2}>
      <Grid container spacing={3}>
        <Grid item xl={5} lg={12} md={6} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Chamado {order.id} - {order.status}
              </Typography>
              <Typography>
                Serviço Solicitado: {order?.service?.name} - {order?.service?.description}
              </Typography>
              <Typography>
                Setor Responsável: {order?.service?.division?.name} - {order?.service?.division?.description}
              </Typography>
              <Typography>
                Descrição: <ReadMore children={order?.description} />
              </Typography>

            </CardContent>
            {/* <CardActions>
              <Button size="small">Alterar Serviço</Button>
            </CardActions> */}
          </Card><br />
          <Card>
            <CardContent>
              {/* <Typography>
                Patromônio: {order?.tag}
              </Typography> */}
              <Typography>
                Solução:  <ReadMore children={order?.solution} />
              </Typography>
            </CardContent>
          </Card>
          <Box display="flex" gap={2} sx={{ mt: 2 }}>
            <Button variant="contained" component={Link} to="/orders">
              Voltar
            </Button>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              component={Link} to={`https://3s.unilab.edu.br/?page=ocorrencia&selecionar=${order.id}`}
              disabled={isdisabled || isLoading}
            >
              {isLoading ? "Loading..." : "Ver no Antigo 3s"}
            </Button>
          </Box>
        </Grid>

        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Informações do Requisitante
              </Typography>
              <Typography>
                Nome: {order?.customer?.name}
              </Typography>
              <Typography>
                Divisão(SIPAC): {order?.division_sig}
              </Typography>
              <Typography>
                E-mail: {order?.email}
              </Typography>
              <Typography>
                Local/Sala: {order?.place}
              </Typography>
              <Typography>
                Ramal: {order?.phone_number}
              </Typography>
            </CardContent>
          </Card><br />
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Atendimento
              </Typography>
              <Typography>
                Setor Responsável: {order?.provider?.division?.name} - {order?.provider?.division?.description}
              </Typography>
              <Typography>
                Tecnico Responsável: {order?.provider?.name}
              </Typography>

            </CardContent>
          </Card>

        </Grid>
        <Grid item xl={3} lg={6} md={12} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Histórico
              </Typography>
              {/* {order?.status_logs?.map((log) => <CardOrderStatusLog key={log.id} status={log} />)} */}
              <TimelineStatusLog statusLogs={order?.status_logs} />
              {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {order?.messages?.map((message) => {

                  return (
                    <React.Fragment key={message.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt={message?.user?.name} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={message?.user?.name}
                          secondary={
                            <React.Fragment>
                              {message.message}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>);
                })}



              </List> */}
            </CardContent>
          </Card>

        </Grid>

      </Grid>

    </Box>
  );
}