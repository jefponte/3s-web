import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Grid,
    Typography
} from "@mui/material";
import React, { useState } from "react";
import { Order, Results } from "../../../types/Order";
import { TimelineStatusLog } from "./TimelineStatusLog";
import { Link } from "react-router-dom";


export const Kamban = ({ data }: { data: Results | undefined }) => {

    const CardKambanOrder = ({ order }: { order: Order }) => {
        return <>
            <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
                <Card>
                    <CardActionArea component={Link} to={`/orders/${order.id}`}>
                        <CardContent>

                            <Chip label={order?.status} color="info" />
                            <Typography>
                                #{order?.id}
                            </Typography>
                            <Typography>
                                Serviço: {order?.service.name}
                            </Typography>
                            <Typography>
                                Descrição: {order?.service.name}
                            </Typography>
                            <Typography>
                                Cliente: {order?.customer.name}
                            </Typography>
                            <Typography>
                                Técnico: {order?.provider?.name}
                            </Typography>
                            <Typography>
                                Aberto em: {order.created_at}
                            </Typography>
                            <Typography>
                                Fechado em: {order?.finished_at}
                            </Typography>

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
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {title}
                            </Typography>
                            <Grid container spacing={3}>
                                {orders.map((order) => {
                                    return (<CardKambanOrder key={order.id} order={order} />);
                                })}
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>);
    }
    console.log("Todas");
    console.log(data?.data);
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
                        <KambanColumn title={"Abertos (34)"} orders={ordersOpeneds} />
                        <KambanColumn title={"Em Atendimento (34)"} orders={ordersInProgress} />
                        <KambanColumn title={"Fechados"} orders={ordersClosed} />
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

