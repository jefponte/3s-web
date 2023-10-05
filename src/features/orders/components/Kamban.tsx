import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Grid,
    Typography, Paper
} from "@mui/material";
import React, { useState } from "react";
import { Order, Results } from "../../../types/Order";
import { TimelineStatusLog } from "./TimelineStatusLog";
import { Link } from "react-router-dom";
import useTranslate from '../../polyglot/useTranslate';
import { red, lightBlue, teal, lime } from '@mui/material/colors';

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
export const Kamban = ({ data }: { data: Results | undefined }) => {
    const translate = useTranslate('status');
    const CardKambanOrder = ({ order }: { order: Order }) => {
        return <>
            <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
                <Card sx={{ backgroundColor: colorByStatus(order.status)}}>
                    <CardActionArea component={Link} to={`/orders/${order.id}`}>
                        <CardContent>

                            <Typography>
                                # {order?.id}
                            </Typography>
                            <Typography>
                                Serviço: {order?.service.name}
                            </Typography>
                            {/* <Typography>
                                Descrição: {order?.service.name}
                            </Typography> */}

                            <Typography>
                                Descrição: {translate(order?.status)}
                            </Typography>

                            <Typography>
                                Cliente: {order?.customer.name}
                            </Typography>
                            {/* <Typography>
                                Técnico: {order?.provider?.name}
                            </Typography> */}
                            <Typography>
                                Aberto em: {order.created_at}
                            </Typography>
                            {/* <Typography>
                                Fechado em: {order?.finished_at}
                            </Typography> */}

                        </CardContent>
                    </CardActionArea >
                </Card>
            </Grid>
        </>;
    }


    const KambanColumn = ({ title, orders }: { title: string; orders: Order[] }) => {
        return (
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>

                <Box>
                    <Card>
                        <Paper elevation={6}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Grid container spacing={3} sx={{padding: 4}}>
                                    {orders.map((order) => {
                                        return (<CardKambanOrder key={order.id} order={order} />);
                                    })}
                                </Grid>
                            </CardContent>
                        </Paper>
                    </Card>
                </Box>

            </Grid>);
    }
    // console.log("Todas");
    // console.log(data?.data);
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

    return (
        <>
            <Grid container spacing={3}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Grid container spacing={3}>
                            <KambanColumn title={`Abertos (${ordersOpeneds.length})`} orders={ordersOpeneds} />
                            <KambanColumn title={`Em Atendimento (${ordersInProgress.length})`} orders={ordersInProgress} />
                            <KambanColumn title={"Fechados"} orders={ordersClosed} />
                        </Grid>
                    </Grid>
            </Grid>

        </>
    )
}

