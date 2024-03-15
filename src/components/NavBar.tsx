const oldApplication = import.meta.env.VITE_API_URL;

import {
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";
import { Link } from "react-router-dom";

import { AccountMenu } from "./AccountMenu";
import { NotificationButton } from "../features/notifications/NotificationButton";


const NavBar = () => {
    const routes = [
        { path: '/', name: "Início" },
        { path: `${oldApplication}?page=ocorrencia&cadastrar=1`, name: "Abrir Chamado" },
        { path: `${oldApplication}?page=painel_kamban`, name: "Paineis" },
        { path: "/users", name: "Usuários" },
        { path: "/divisions", name: "Unidades" },
        { path: "/services", name: "Serviços" }
    ];


    return (
        <div className="py-1">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {routes.map((route) => (

                                <Link
                                    key={route.path}
                                    to={route.path}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText>{route.name}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>

                            ))}
                        </ul>
                        <div className="btn-group">
                            <NotificationButton />
                            <AccountMenu isDark={false} toggleTheme={() => { }} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
