import AddIcon from '@mui/icons-material/Add';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';
import { Grid, List } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import ModalConfirmDialog from "../common/modalCofirm/modalConfirm"
import {
    Link,
    Outlet,
    useLoaderData,
    useNavigate
} from "react-router-dom";
import loading from "./loading";
import CustomSnackBar from '../common/snackBar/customSnackBar';
import { checkUser } from '../utils/localStorage';

export async function loader() {
    const contacts = await loading("contact");
    return contacts;
}

export default function Root() {
    const { contacts }: any = useLoaderData();
    const navigate = useNavigate()
    useEffect(() => {
      checkUser()

    }, [])

    const settings = ['Profile', 'Logout'];

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Box minWidth={"100%"}>
                <CustomSnackBar />
                <ModalConfirmDialog/>
                <AppBar
                    position="relative"

                    sx={{
                        backgroundColor: '#1d2d44',
                        width: "100%",

                        "& .MuiButtonBase-root": {
                            marginLeft: "10px"
                        }
                    }}>
                    <Container maxWidth="xl">
                        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                <ImageListItem key={1} sx={{ width: "50px", height: "50px" }}>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/b/bf/L%C3%A1_c%E1%BB%9D_c%E1%BB%A7a_%C4%90%E1%BA%A3ng_c%E1%BB%99ng_s%E1%BA%A3n_Vi%E1%BB%87t_Nam.png"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="p"
                                        // href="/"
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'none', md: 'flex' },
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            letterSpacing: 'auto',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            marginLeft: "10px"
                                        }}
                                    >
                                        My Logo

                                    </Typography>
                                </Link>
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Grid container minHeight={"100%"}>
                    <Grid item xs={2} sx={{ border: "1px solid #ccc" }} >
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingLeft: "5px" }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    Menu
                                </ListSubheader>
                            }
                        >
                            <Link to="add-on" style={{ textDecoration: "none", color: "#495057" }}>
                                <ListItemButton>
                                    <ListItemIcon >
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: "-20px" }} primary="Thêm mới" />
                                </ListItemButton>
                            </Link>

                            <Link to="manger" style={{ textDecoration: "none", color: "#495057" }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SendIcon />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: "-20px" }} primary="Quản lý ảnh" />
                                </ListItemButton>
                            </Link>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: "-20px" }} primary="Đã tạo" />
                            </ListItemButton>

                            <ListItemButton onClick={handleClick}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: "-20px" }} primary="Đã lưu" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText sx={{ marginLeft: "-20px" }} primary="Starred" />
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText sx={{ marginLeft: "-20px" }} primary="Starred" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Grid>
                    <Grid item xs={10}>
                        <Box padding={2}>
                            <Outlet />
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </>

    );
}