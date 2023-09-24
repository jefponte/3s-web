import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import { Order } from "../../../types/Order";

type Props = {
  order: Order;
  isdisabled?: boolean;
  isLoading?: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      <Box p={2}>
        <Box mb={2}>
          <Typography variant="h4">Chamado {order.id} - {order.status}</Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Typography>
                Serviço Solicitado:  {order?.service?.name} - {order?.service?.description}
              </Typography>
              <Typography>
                Setor Responsável: {order?.service?.division?.name}
              </Typography>
              <Typography>
                Descrição: {order?.description}
              </Typography>

            </CardContent>
            {/* <CardActions>
              <Button size="small">Alterar Serviço</Button>
            </CardActions> */}
          </Card><br />
          <Card>
            <CardContent>
              <Typography>
                Patromônio: {order?.tag}
              </Typography>
              <Typography>
                Solução:  {order?.solution}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
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
          </Card><br/>
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
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>

        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Descrição: {order.description}
              </Typography>
              <Typography variant="h5" component="div">
                ABCD
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

        </Grid>
        <Grid item xs={12}>
          <Box display="flex" gap={2}>
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
      </Grid>

    </Box>
  );
}