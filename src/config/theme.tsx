import { createTheme } from "@mui/material";
import { ptBR } from '@mui/material/locale';

export const appTheme = createTheme({
    palette: {
        background: {
            default: '#FFF',
            paper: '#F5F6F9',
        },
        primary: { main: "#3b0304" },
        secondary: { main: "#E50914" },
        text: { primary: "#000000" }
    },
}, ptBR);