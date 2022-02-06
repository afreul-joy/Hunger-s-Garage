// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Link, Outlet } from 'react-router-dom';
// import { Button } from '@mui/material';
// import useAuth from '../../hooks/useAuth';


// const drawerWidth = 240;

// function Dashboard(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // ----------Admin-----------------
//   const {admin}  =useAuth()

//   const drawer = (
//     <div>
//       <Toolbar />

//       <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="contained" className="mb-2">Home</Button></Link> <br/>
//       <Divider />
//       <Link to='/dashboard/myOrders' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="mt-2">My Orders</Button></Link> <br/>
//       <Link to='/dashboard/pay' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="my-2">Pay</Button></Link> <br/>
//       <Link to='/dashboard/review' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="mb-2">Review</Button></Link> <br/>

//     {admin&& <Box> 
//       <Link to='/dashboard/makeAdmin' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="mt-2">Make an admin</Button></Link> <br/>
//       <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="my-3">Manage All Orders</Button></Link> <br/>
//       <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="mb-2">Add Product</Button></Link> <br/>
//       <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="outlined"className="">Manage Product</Button></Link> <br/> <br />
     
      
//        </Box> }
    
//       <Divider />
//       <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="contained" color="error"className="my-2">Logout</Button></Link> <br/>
      
//     </div>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         {/* <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div" sx={{ mx: "auto", width: 300 }}>
//           Hunger's Garage Dashboard
//           </Typography>
//         </Toolbar> */}
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
     
//         <Outlet />   {/* Showing Nested Items  */}
    
//       </Box>
//     </Box>
//   );
// }

// Dashboard.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Dashboard;




import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useFirebase from "../../Hooks/useFirebase";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logOut,admin} = useAuth();
  return (
    <div className="text-center">
      <Row>
        <div className="aside-col col-lg-4 col-md-4 col-12">
          <div className="aside">
            <ul className="mt-3">
              <li>
                <Link style={{ textDecoration: "none" }} to="/dashboard">
                  {" "}
                  <span className="text"> Home </span>{" "}
                </Link>
              </li>
              
 
              {
                admin &&
                <>
                <hr />
                <li>
                <Link style={{ textDecoration: "none" }} to="/dashboard/admin">
                  {" "}
                  <span className="text"> Make Admin </span>
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/addProperties"
                >
                  <span className="text"> Add Properties</span>
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/addAgent"
                >
                  <span className="text"> Add Agents</span>
                </Link>
              </li>
              <hr />
              <li>
                <Link style={{ textDecoration: "none" }} to="/dashboard/delete">
                  {" "}
                  <span className="text"> Delete Properties </span>{" "}
                </Link>
              </li>{" "}
              <hr />
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/deleteAgent"
                >
                  {" "}
                  <span className="text"> Delete Agents </span>{" "}
                </Link>
              </li>
                </>
              }

              <hr />
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/mybooking"
                >
                  {" "}
                  <span className="text"> My Booking </span>{" "}
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/givereview"
                >
                  {" "}
                  <span className="text"> Give Review </span>{" "}
                </Link>
              </li>
              <hr />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>{user.email}</p> Admin
              <hr />
              <button className="btn btn-danger" onClick={logOut}>
                Logout
              </button>
            </ul>
          </div>
        </div>
        <div className="window col-lg-8 col-md-8 col-12" >
          <Outlet></Outlet>
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;