import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { AppBar, Toolbar } from "@mui/material";
import Image from "../assets/img/bg-topo.png";
import LogoUNILAB from "../assets/img/logo-unilab.png";
import styled from "styled-components";
import { Link } from "react-router-dom";





const ImageLogo = styled(({ ...otherProps }) => <img alt="Logo UNILAB" src={LogoUNILAB} {...otherProps} />)`
  width: 250px;
  padding: 30px;
`;

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openAbout, setOpenAbout] = React.useState(false);


  const [openContact, setOpenContact] = React.useState(false);
  const handleOpenContact = () => setOpenContact(true);
  const handleCloseContact = () => setOpenContact(false);


  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const routes = [
    { path: "/", name: "Início" },
    { path: "/services", name: "Serviços" },
    { path: "/divisions", name: "Divisão" }
  ];


  return (
    <AppBar position="static" style={styles.paperContainer}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImageLogo />


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >

                  <MenuItem>
                    <Typography
                      sx={{ color: (theme) => theme.palette.primary.main }}
                      textAlign="center"> {route.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}>

                  {route.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};



