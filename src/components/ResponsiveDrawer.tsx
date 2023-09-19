import {
  Divider,
  List,
  ListItem,
  Toolbar,
  Typography,
  Box,
  Drawer,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo3s from "../assets/img/logo-3s.png";
import Logo3sBlack from "../assets/img/logo-3s-black.png";
import styled from "styled-components";




const ImageLogo = styled(({ ...otherProps }) => <img alt="Logo UNILAB" src={Logo3s} {...otherProps} />)`
    width: 300px;
    padding: 10px;
  `;

  const ImageLogoBlack = styled(({ ...otherProps }) => <img alt="Logo UNILAB" src={Logo3sBlack} {...otherProps} />)`
  width: 300px;
  padding: 10px;
`;




const drawerWidth = 240;

type Props = {
  open: boolean;
  onClose: () => void;
  isDark: boolean;
};

export default function ResponsiveDrawer({ open, onClose, isDark }: Props) {



  const routes = [
    { path: "/", name: "Início" },
    { path: "/services", name: "Serviços" },
    { path: "/divisions", name: "Divisão" },
    { path: "/users", name: "Usuários" },
    { path: "/orders", name: "Ocorrências" },
  ];


  const drawer = (
    <div>
      <Toolbar>
        {isDark ? <ImageLogo /> : <ImageLogoBlack/>}
      </Toolbar>
      <Divider />
      <List>
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            onClick={onClose}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>{route.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "background.default",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}