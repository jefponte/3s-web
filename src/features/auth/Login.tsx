import {
    Box,
    Paper,
    Typography
} from "@mui/material";
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Credentials, useLoginMutation, useSendLogOutMutation } from './authApiSlice';
import { LoginForm } from './components/LoginForm';


export const Login = () => {
    const [doLogin, statusLogin] = useLoginMutation();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [credentials, setCredentials] = useState<Credentials>({
        login: "",
        password: "",
        device_name: "react_web"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await doLogin(credentials);
    }

    useEffect(() => {
        if (statusLogin.isSuccess) {
            enqueueSnackbar("Login Realizado com Sucesso!", { variant: "success" });
            navigate('/');
        }
        if (statusLogin.error) {
            enqueueSnackbar("Falha no Login", { variant: "error" });
        }
    }, [enqueueSnackbar, statusLogin.error, statusLogin.isSuccess]);
    return (
        <Box>
            <Paper>
                <Box p={2}>
                    <Box mb={2}>
                        <Typography variant="h4">Formulário de Login</Typography>
                    </Box>
                </Box>

                <LoginForm
                    credentials={credentials}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />

            </Paper>
        </Box>
    )
}