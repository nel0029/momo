import React from 'react'
import {
    Box,
    Divider,
    List,
    Toolbar,
    Button,
    Drawer,
    Avatar,
    CardMedia,
    Typography
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import LinkItemList from './LinkItemList';
import MovieIcon from '@mui/icons-material/Movie';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StoreIcon from '@mui/icons-material/Store';


export default function NavBar() {

    return (
        <Box sx={{
            flex: 1,
            height: "100%",
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }} >
            <Box sx={{ flex: 1, width: "100%", display: "flex", justifyContent: "center" }}>
                <nav className="nav-side-bar">
                    <Toolbar>
                        <Typography sx={{ display: { xs: "none" } }}>
                            MOMO
                        </Typography>
                    </Toolbar>
                    <List sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                        <LinkItemList
                            to="/"
                            label="Home"
                            icon={<HomeIcon />} />
                        <LinkItemList
                            to="/explore"
                            label="Explore"
                            icon={<ExploreIcon />} />
                        <LinkItemList
                            to="/videos"
                            label="Videos"
                            icon={<MovieIcon />} />
                        <LinkItemList
                            to="/marketplace"
                            label="Marketplace"
                            icon={<StoreIcon />} />
                        <LinkItemList
                            to="/messages"
                            label="Messages"
                            icon={<MailIcon />} />
                        <LinkItemList
                            to="/notifications"
                            label="Notifications"
                            icon={<NotificationsIcon />} />
                    </List>
                </nav>
            </Box>
            <Divider />
            <Box sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                px: {
                    xs: "0px",
                    lg: "8px"
                },
                py: "10px"
            }}>
                <LinkItemList
                    to="/profile"
                    label="Profile"
                    icon={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        <CardMedia
                            component="img"
                            height="100%"
                            width="auto"
                            image="http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
                            alt="Paella dish"
                        />
                    </Avatar>} />
            </Box>
        </Box>
    )
}
