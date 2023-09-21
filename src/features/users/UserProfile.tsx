import React from 'react';
import { Box, Paper, Typography } from "@mui/material";
import { selectAuthUser } from '../auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const UserProfile = () => {

    const userAuth = useAppSelector(selectAuthUser);
    console.log(userAuth);

    return (
        <Box>
            <Paper>
                <Box p={2}>
                    <Box mb={2}>
                        <Typography variant="h4">Informações do Usuário</Typography>
                    </Box>
                </Box>
                <Typography variant="h4">Nome: {userAuth?.name}</Typography>
            </Paper>
        </Box>
    )
}