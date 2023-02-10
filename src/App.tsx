
import { useState } from 'react';
import NavBar from './layout/NavBar';
import { Box, Stack, Grid, Container } from '@mui/material';
import Divider from '@mui/material/Divider';
import Main from './pages/Home';
import LeftSideBar from './layout/LeftSideBar';
import Feed from './layout/Feed';
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#2a9461"
    }
  }
});
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", width: "100%", flexDirection: "column-reverse" }}>
        <NavBar />
        <Feed />
      </Box>
    </ThemeProvider>


  )
}

export default App
