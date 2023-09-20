import React, { useEffect } from 'react';
import { Credentials, useLoginMutation, useSendLogOutMutation } from './authApiSlice';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Box, Paper, Typography } from "@mui/material";


const Login = () => {
    const [login, statusLogin] = useLoginMutation();
    const navigate = useNavigate();
    const [logout, statusLogout] = useSendLogOutMutation();
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = async () => {
        const body = {
            "login": "",
            "password": "",
            "device_name": "react"
        } as Credentials;
        await login({ ...body });

        navigate('/');
    }
    const handleLogout = () => {
        logout({});
    }

    useEffect(() => {
        if (statusLogout.isSuccess) {
            enqueueSnackbar("Logout realizado", { variant: "success" });
        }
        if (statusLogout.error) {
            enqueueSnackbar("Falha no logout", { variant: "error" });
        }
    }, [enqueueSnackbar, statusLogout.error, statusLogout.isSuccess]);
    return (
        <Box>
            <Paper>
                <Box p={2}>
                    <Box mb={2}>
                        <Typography variant="h4">Formulário de Login</Typography>
                    </Box>
                </Box>
                <div>


                    <button
                        onClick={handleClick}
                    >Logar</button>
                    <button
                        onClick={handleLogout}
                    >Logout</button>
                </div>
            </Paper>
        </Box>
    )
}

export default Login;