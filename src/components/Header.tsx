import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, IconButton, Toolbar } from "@mui/material";
import LogoUNILAB from "../assets/img/logo-unilab.png";
import styled from "styled-components";
import { AccountMenu } from "./AccountMenu";


const ImageLogo = styled(({ ...otherProps }) => <img alt="Logo UNILAB" src={LogoUNILAB} {...otherProps} />)`
  width: 300px;
  padding: 30px;
`;

type HeaderProps = {
  toggle: () => void;
  isDark?: boolean;
  isAuth?: boolean;
  handleDrawerToggle?: () => void;
};

export function Header({ toggle, isAuth = false, isDark = false, handleDrawerToggle }: HeaderProps) {

  return (
    <Box>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        TESTE DEPLOY GITHUB
        <IconButton sx={{ ml: 1 }} onClick={toggle} color="inherit">

          {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {isAuth && <AccountMenu />}
        <ImageLogo />
      </Toolbar>
    </Box>
  );
}