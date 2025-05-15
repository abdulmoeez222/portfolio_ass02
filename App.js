import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Avatar, Menu, MenuItem, Box, Grid } from '@mui/material';
import { PageTitleProvider } from './context/PageTitleContext';
import SideNav from './layouts/SideNav';
import Footer from './layouts/Footer';

const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <PageTitleProvider>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <SideNav />
            <div style={{ flexGrow: 1 }} />
            <Avatar onClick={handleMenu} />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1, p: { xs: 1, sm: 2, md: 3 } }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Router>
    </PageTitleProvider>
  );
}

export default App;
