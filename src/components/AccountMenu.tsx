import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectAuthUser } from '../features/auth/authSlice';
import { LogoutItemMenu } from './LogoutItemMenu';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";


type Props = {
    toggleTheme: () => void;
    isDark?: boolean;
}
export function AccountMenu({ isDark, toggleTheme }: Props) {
    const userAuth = useAppSelector(selectAuthUser);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Sua Conta">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 1 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>{userAuth?.name?.substr(0, 1)}</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        Perfil
                    </MenuItem>
                </Link>
                <MenuItem onClick={toggleTheme}>
                    <ListItemIcon>
                        {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
                    </ListItemIcon>
                    Mudar Tema
                </MenuItem>
                <Divider />

                {/* <MenuItem onClick={handleClose}>
                    Nível Admin
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Nível Técnico
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Nível Cliente
                </MenuItem> */}
                <LogoutItemMenu />
            </Menu>
        </React.Fragment>
    );
}