import { Typography, Box } from "@mui/material";


export function Footer() {
    return (<Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
            UNILAB - Universidade da Integração Internacional da Lusofonia Afro-Brasileira
        </Typography>
        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
        >
            DTI - Diretoria de Tecnologia da Informação
        </Typography>
    </Box>);
}