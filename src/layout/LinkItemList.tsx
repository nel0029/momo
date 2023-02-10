import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box'

export default function LinkItemList(props: any) {
    const { icon, to, label } = props;
    return (
        <ListItem button disablePadding>
            <RouterLink
                to={to}
                style={{
                    textDecoration: 'none',
                    color: 'unset',
                    display: 'flex',
                    width: '100%',
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "start",
                }}>
                <Box sx={{
                    px: {
                        xs: "0px",
                        lg: "16px"
                    },
                    py: "8px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start"
                }}>
                    <ListItemIcon sx={{
                        display: "flex",
                        alignItems: "center",
                        flex: 1
                    }}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText sx={{ display: { xs: "none", lg: "block" } }} primary={label} />
                </Box>
            </RouterLink>
        </ListItem>
    )
}
