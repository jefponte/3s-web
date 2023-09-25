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

const CardKambanOrder = () => {
    return <>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        INFO
                    </Typography>

                </CardContent>
            </Card>
        </Grid>
    </>;
}


const KambanColumn = () => {
    return (
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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

export const Kamban = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Card>
                        <KambanColumn />
                        <KambanColumn />
                        <KambanColumn />
                    </Card>
                </Grid>
            </Grid>

        </>
    )
}

