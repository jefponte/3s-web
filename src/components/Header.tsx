import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, IconButton, Toolbar } from "@mui/material";
import LogoUNILAB from "../assets/img/logo-unilab.png";
import  styled  from "@emotion/styled";
import { AccountMenu } from "./AccountMenu";
import { NotificationButton } from "../features/notifications/NotificationButton";


const ImageLogo = styled("img")`
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

        {isAuth && (
          <>
            <NotificationButton />
            <AccountMenu isDark={isDark} toggleTheme={toggle} />
          </>
        )}
        <ImageLogo />
      </Toolbar>
    </Box>
  );
}