import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSendLogOutMutation } from './authApiSlice';
import { Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';


export const Logout = () => {

    const navigate = useNavigate();
    const [logout, statusLogout] = useSendLogOutMutation();
    const { enqueueSnackbar } = useSnackbar();


    const handleLogout = () => {
        logout({});
    }

    useEffect(() => {
        if (statusLogout.isSuccess) {
            enqueueSnackbar("Logout realizado", { variant: "success" });
            navigate("/login");
        }
        if (statusLogout.error) {
            enqueueSnackbar("Falha no logout", { variant: "error" });
        }
    }, [enqueueSnackbar, statusLogout.error, statusLogout.isSuccess]);


    return (
        <>
            <IconButton sx={{ ml: 1 }} onClick={handleLogout} color="inherit">
                <LogoutIcon /> Logout
            </IconButton>
        </>

    )
}