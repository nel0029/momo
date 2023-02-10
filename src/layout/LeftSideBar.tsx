import React from 'react'
import Box from '@mui/material/Box';
import PostCard from './PostCard';
import NavBar from './NavBar';

export default function LeftSideBar() {
    return (
        <Box sx={{ backgroundColor: "white" }}>
            <NavBar />
            <NavBar />
            <NavBar />
        </Box>
    )
}
