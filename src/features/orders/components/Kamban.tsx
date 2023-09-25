import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Grid,
    Typography
} from "@mui/material";
import React, { useState } from "react";
import { Order, Results } from "../../../types/Order";
import { TimelineStatusLog } from "./TimelineStatusLog";
import { Link } from "react-router-dom";

const CardKambanOrder = () => {
    return <>
        <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
            <Card>
                <CardContent>
                    <Chip label="Aberto" color="info" />
                    <Typography>
                        #3354
                    </Typography>
                    <Typography>
                        Serviço: Melhoria do Sistema 3s
                    </Typography>
                    <Typography>
                        Descrição: Por gentileza, solicito ajuda em meu computador...
                    </Typography>
                    <Typography>
                        Cliente: Jefferson Ponte
                    </Typography>
                    <Typography>
                        Técnico: Jefferson Ponte
                    </Typography>
                    <Typography>
                        Aberto em: 25/09/2023
                    </Typography>
                    <Typography>
                        Fechado em: 25/09/2023
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </>;
}


const KambanColumn = () => {
    return (
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <Box>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            ABERTOS (50)
                        </Typography>
                        <Grid container spacing={3}>
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />
                            <CardKambanOrder />

                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </Grid>);
}

export const Kamban = ({ data }: { data: Results | undefined }) => {
    console.log(data);
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

                    <Grid container spacing={3}>
                        <KambanColumn />
                        <KambanColumn />
                        <KambanColumn />
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

