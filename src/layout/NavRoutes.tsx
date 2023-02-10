import React from 'react'
import { Box, Stack } from '@mui/material';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Explore from '../pages/Explore'
import Videos from '../pages/Videos';
import Messages from '../pages/Messages';
import Notifications from '../pages/Notifications';
import Profile from '../pages/Profile';
import Marketplace from '../pages/Marketplace';

export default function NavRoutes() {
    return (
        <Box sx={{
            flex: 1,
            display: "flex",
        }}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/videos' element={<Videos />} />
                <Route path='/marketplace' element={<Marketplace />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/notifications' element={<Notifications />} />
            </Routes>
        </Box>
    )
}
