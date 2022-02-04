import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import {Route, Routes } from 'react-router-dom';
import Pay from './Pay/Pay';
import MyOrder from '../MyOrder/MyOrder';
import Review from './Review/Review';
// import MyOrder from './Pages/MyOrder/MyOrder';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      

      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="contained" className="mb-2">Home</Button></Link> <br/>
      <Divider />
      <Link to='/dashboard/myOrders' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="mt-2">My Orders</Button></Link> <br/>
      <Link to='/dashboard/pay' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="my-2">Pay</Button></Link> <br/>
      <Link to='/dashboard/review' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="mb-2">Review</Button></Link> <br/>

      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="mt-2">Make an admin</Button></Link> <br/>
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="my-3">Manage All Orders</Button></Link> <br/>
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="mb-2">Add Product</Button></Link> <br/>
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="">Manage Product</Button></Link> <br/> <br />
      <Divider />
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="contained" color="error"className="my-2">Logout</Button></Link> <br/>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ mx: "auto", width: 300 }}>
          Hunger's Garage Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        {/* <Routes>
        <Route path="/" element={<Dashboard />}>
      <Route path="/dashboard/pay" element={<Pay />}>
        <Route path="dashboard/myOrders" element={<MyOrder />} />
      </Route>
    </Routes>
     */}
    {/* <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/dashboard/pay" element={<Pay />} />
        <Route path="dashboard/myOrders" element={<MyOrder />} />
      </Route>
    </Routes> */}
  <Outlet />
    
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
{/* <Route path="/dashboard/review" element={<Review />} /> */}