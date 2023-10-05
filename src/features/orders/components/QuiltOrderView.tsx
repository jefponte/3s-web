import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Box, Paper, Card, CardContent } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { red, lightBlue, teal, lime } from '@mui/material/colors';
import * as React from 'react';
import { Order, Results } from '../../../types/Order';
import { Link } from 'react-router-dom';

export const QuiltOrderView = ({ data }: { data: Results | undefined }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };




  if (data === undefined || data?.data === undefined) {
    return <></>;
  }
  const ordersOpeneds = data.data.filter(order => {
    return (
      order.status === 'opened'
      || order.status === 'reopened');
  });
  const ordersInProgress = data.data.filter(order => {
    return (order.status === 'in progress'
      || order.status === 'pending it resource'
      || order.status === 'pending customer response');
  });
  const ordersClosed = data.data.filter(order => {
    return (
      order.status === 'canceled'
      || order.status === 'closed'
      || order.status === 'committed');
  });
  const colorByStatus = (status: string) => {
    switch (status) {
      case 'opened':
        return lime[900];
      case 'in progress':
        return lightBlue[300];
      case 'closed':
        return teal[200];
      case 'committed':
        return teal[300];

      default:
        return red[300];
    }

  }
  const CardAccordion = ({ title, orders, initialState }: { title: string, orders: Order[], initialState: boolean }) => {
    const [expanded, setExpanded] = React.useState<boolean>(initialState);
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded((prev) => !prev);
      };




    return (<Accordion expanded={expanded} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {title} ({orders.length})
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List
          sx={{ width: '100%' }}
          component="nav"
          aria-labelledby="nested-list-subheader">

          {orders.map((order) => {
            const description = (order.description.length >= 150) ? order.description.slice(0, 150) + "..." : order.description;
            return (
              <Link to={`/orders/${order.id}`} key={order.id} style={{ textDecoration: 'none', color: 'inherit' }} >
                <ListItemButton sx={{
                  bgcolor: colorByStatus(order.status), borderRadius: 1, '--Grid-borderWidth': '1px',
                  borderTop: 'var(--Grid-borderWidth) solid', borderColor: 'divider'
                }} onClick={handleClick}>
                  <ListItemText primary={`#${order.service.id} - ${order.service.name} - ${description}`} />
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>);
  }
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xl={8} lg={8} md={6} sm={12} xs={12}>
          {/* <CardAccordion title="Ocorrências em atraso" orders={ordersOpeneds} initialState={true} /> */}
          <CardAccordion title="Ocorrências em aberto" orders={ordersOpeneds} initialState={true} />
          <CardAccordion title="Ocorrências em atendimento" orders={ordersInProgress} initialState={true} />
          <CardAccordion title="Ocorrências fechadas" orders={ordersClosed} initialState={false} />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>

          <Card>
            <Paper elevation={6}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Filtros e Informações
                </Typography>

              </CardContent>
            </Paper>
          </Card>

        </Grid>
      </Grid>



    </div>
  );
}



