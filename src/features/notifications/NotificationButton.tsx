import AttachFileIcon from '@mui/icons-material/AttachFile';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Notification, Results } from '../../types/Notification';
import { useGetNotificationsQuery } from './notificationSlice';
import NotificationsIcon from '@mui/icons-material/Notifications';

export function NotificationButton() {
    const [lastId, setLastId] = useState<string>();
    const [newMessageCount, setNewMessageCount] = useState(0);
    const [newDataState, setNewDataState] = useState<Notification[]>([] as Notification[]);

    const [options, setOptions] = useState({
        page: 1,
        search: "",
        perPage: 10,
        rowsPerPage: [10, 50, 100],
    });
    const { data, isFetching, error, refetch } = useGetNotificationsQuery(options);


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setNewMessageCount(0);
        setNewDataState([] as Notification[]);
        setAnchorEl(null);
    };
    const messageByType = (notification: Notification) => {
        switch (notification.type) {
            case "text":
                return "Enviou uma mensagem no chat";
            case "file":
                return "Enviou um arquivo no chat";
            case "status_log":
                return `Realizou uma ação: ${notification.message}`;
            default:
                return "Mudou estado da ocorrência";
        }
    }
    const iconByType = (notification: Notification) => {
        switch (notification.type) {
            case "text":
                return <ChatBubbleIcon />;
            case "file":
                return <AttachFileIcon />;
            case "status_log":
                return <AutorenewIcon />;
            default:
                return <ChatBubbleIcon />;
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch();
        }, 60000);
        return () => {
            clearInterval(intervalId);
        };
    }, [refetch]);
    useEffect(() => {
        if (data != null && data.data[0].id != lastId) {
            setLastId(data.data[0].id);
            const index = data.data.findIndex(element => element.id === lastId);
            if (index != -1) {
                const newData = data.data.slice(0, index);
                setNewMessageCount(newMessageCount + newData.length);
                setNewDataState([...newData, ...newDataState]);
            }
        }
    }, [data]);

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title={(newDataState.length === 0) ? "Você não tem notificações" : `Você tem ${newDataState.length} notificações`}>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ mx: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Badge badgeContent={newMessageCount} color="primary">
                            {open ? (<NotificationsIcon sx={{ color: "#FFFFFF", width: 32, height: 32 }} />) : (<NotificationsNoneIcon sx={{ color: "#FFFFFF", width: 32, height: 32 }} />)}
                        </Badge>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}

                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <List sx={{ width: '100%', maxWidth: 360 }}>

                    {newDataState?.map((element) => {
                        const [primeiroNome] = element.user.name.split(' ');



                        return (
                            <React.Fragment key={element.id}>
                                <Link to={`orders/${element.order.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            {iconByType(element)}
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={primeiroNome.charAt(0).toUpperCase() + primeiroNome.toLowerCase().slice(1)}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {messageByType(element)}
                                                    </Typography>
                                                    {`  — ${new Date(element.created_at).toLocaleDateString()} - ${new Date(element.created_at).toLocaleTimeString()}`}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>

                                </Link><Divider variant="inset" component="li" />
                            </React.Fragment>
                        );
                    })}
                    {newDataState.length === 0 ? (
                        <>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={"Nenhuma Nova Notificação"}
                                />
                            </ListItem>
                        </>) : (<></>)}

                    {/* <Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem onClick={handleClose}>
                            Ver Tudo
                        </MenuItem>
                    </Link> */}

                </List>
            </Menu>
        </React.Fragment>
    );
}
