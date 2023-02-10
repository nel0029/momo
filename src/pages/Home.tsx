import React from 'react'
import { Box, Toolbar, Grid, Divider } from '@mui/material';
import formHelperTextClasses from '@mui/material/FormHelperText/formHelperTextClasses';
import LeftSideBar from '../layout/LeftSideBar';
import PostCard from '../layout/PostCard';

export default function Home() {
    const boxHover = {
        height: "100%",
        width: "95%",
        position: "sticky",
        top: 0,
        overflow: "auto",
        display: {
            xs: "none",
            md: "block"
        }
    }
    return (
        <Grid
            container
            sx={{
                height: "100%",
                overflow: "auto",
            }}>
            <Grid
                item
                xs={12}
                md={8}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRight: 1,
                    borderLeft: 1,
                    borderColor: "#D3D3D3"
                }}>

                <Toolbar sx={{
                    position: "sticky",
                    top: 0,
                    bgcolor: "primary.main",
                    zIndex: 100,
                    width: "100%"
                }}>
                    Home HEADER
                </Toolbar>

                <Box sx={{ maxWidth: "600px" }}>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </Box>

            </Grid>
            <Grid
                item
                xs={0}
                md={4}
                sx={boxHover}
                className="left-sidebar">
                <Toolbar sx={{ position: "sticky", top: 0, zIndex: 100, bgcolor: "white" }}>
                    Home HEADER
                </Toolbar>
                <LeftSideBar />
            </Grid>
        </Grid >
    )
}
