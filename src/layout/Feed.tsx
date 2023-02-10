import React from 'react'
import Box from '@mui/material/Box';
import NavRoutes from './NavRoutes';


export default function Feed() {
    return (
        <Box
            component="main"
            sx={{
                flex: 4,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#EDE9E8"
            }} >
            <NavRoutes />
        </Box>
    )
}
