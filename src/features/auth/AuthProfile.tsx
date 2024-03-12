import React from 'react';
import { Box, Paper, Typography } from "@mui/material";
import { selectAuthUser } from './authSlice';
import { useAppSelector } from '../../app/hooks';
import { useGetUserQuery } from '../users/userSlice';

export const AuthProfile = () => {

    const userAuth = useAppSelector(selectAuthUser);
    const id = userAuth.id as string;
    const { data: user, isFetching } = useGetUserQuery({ id });

    return (
        <Box sx={{ mt: 4, mb: 4 }}>
            <Paper>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    p={5}>
                    <Box p={2} mb={1}>

                        <Typography component="h1" variant="h5">Informações do Usuário</Typography>
                    </Box>

                </Box>
                <Box p={3} mb={3}>
                    <Typography variant="h5">Nome: {userAuth?.name}</Typography>
                    <Typography variant="h5">E-mail: {userAuth?.email}</Typography>
                    <Typography variant="h5">Login: {userAuth?.login}</Typography>
                    <Typography variant="h5">Nível: {userAuth?.role}</Typography>
                    <Typography variant="h5">Divisão SIG: {userAuth?.division_sig}</Typography>
                    {isFetching ? <></> : <Typography variant="h5">Divisão No 3s: {user?.data?.division.name}</Typography>}
                    OBS: Ao abrir um chamado a informação de setor/divisão cadastrada é a que vem do SIG.
                    A divisão do sistema 3s é utilizada para gerenciar os chamados e serviços.
                </Box>

            </Paper>
        </Box>
    )
}