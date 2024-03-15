import React from 'react';
import { Box, Typography, Paper } from "@mui/material";
import { selectAuthUser } from '../features/auth/authSlice';
import { useAppSelector } from '../app/hooks';

export const ForbiddenPage = () => {
    const userAuth = useAppSelector(selectAuthUser);
    return (

        <Box>
            <Paper>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    p={5}>
                    <Typography variant="h1">403</Typography>
                    <Typography variant="h2">Olá {userAuth.name}, esta página não é permitida com as suas credenciais. </Typography>
                </Box>
            </Paper>
        </Box>
    )
}
