import { Grid, Typography } from "@mui/material";
import React from "react";
import imagem from "../assets/img/logo-sgit.jpg";
import CardMedia from '@mui/material/CardMedia';

export function PanelTitle() {
    return (<>
    <br />
        <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
                <Typography component="h4" variant="h4">
                    Mapa de Risco UNILAB
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                Painel gerencial para acompanhamento do mapa de risco. Painel gerencial para acompanhamento do mapa de risco.
                </Typography>
            </Grid>
            <Grid item  xs={12} md={5}>
                <CardMedia
                    component="img"
                    sx={{ width: 400 }}
                    image={imagem}
                    alt="Logo Proplan"
                />
            </Grid>
        </Grid>


        <br />
    </>);
}