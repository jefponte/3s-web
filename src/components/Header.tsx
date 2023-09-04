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
import Link from '@mui/material/Link';


import Modal from '@mui/material/Modal';




const ImageLogo = styled(({ ...otherProps }) => <img alt="Logo UNILAB" src={LogoUNILAB} {...otherProps} />)`
  width: 300px;
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
  const handleOpenAbout = () => setOpenAbout(true);
  const handleCloseAbout = () => setOpenAbout(false);

  const [openContact, setOpenContact] = React.useState(false);
  const handleOpenContact = () => setOpenContact(true);
  const handleCloseContact = () => setOpenContact(false);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
              <Link href="/">
                <MenuItem>
                  <Typography
                    sx={{ color: (theme) => theme.palette.primary.main }}
                    textAlign="center">Início</Typography>
                </MenuItem>
              </Link>


              <MenuItem onClick={handleOpenAbout}>
                <Typography
                  sx={{ color: (theme) => theme.palette.primary.main }}
                  textAlign="center">Sobre</Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenContact}>
                <Typography
                  sx={{ color: (theme) => theme.palette.primary.main }}
                  textAlign="center">Contato</Typography>
              </MenuItem>
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link href="/">
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Início
              </Button>
            </Link>
            <Button
              onClick={handleOpenAbout}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Sobre
            </Button>
            <Button
              onClick={handleOpenContact}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Contato
            </Button>

          </Box>


        </Toolbar>
      </Container>


      <Modal
        open={openAbout}
        onClose={handleCloseAbout}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="center" variant="h6" component="h2">
            Sobre
          </Typography>
          <Typography id="modal-modal-description" align="center" sx={{ mt: 2 }}>
            Painel desenvolvido em parceria entre PROPLAN e DTI para o acompanhamento das metas e ações da UNILAB, nos níveis táticos e operacionais, a partir dos objetivos estratégicos presentes no PDI (Plano de Desenvolvimento Institucional) vigente.
          </Typography>
        </Box>
      </Modal>



      <Modal
        open={openContact}
        onClose={handleCloseContact}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="center" variant="h6" component="h2">
            Dúvidas e ou Sugestões?
          </Typography>
          <Typography id="modal-modal-description" align="center" sx={{ mt: 2 }}>
            Encaminhe sua mensagem por este e-maill: painelplanejamento@unilab.edu.br.
          </Typography>
        </Box>
      </Modal>

    </AppBar>
  );
};



