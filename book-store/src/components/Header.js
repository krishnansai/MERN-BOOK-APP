import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tab, Tabs } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState(0);
  return (
    <div>
        <AppBar sx={{backgroundColor:'#232F3D'}} position="sticky">
            <Toolbar>

           <Typography><MenuBookIcon /></Typography>
           <Tabs 
           sx={{ml:'auto'}}
            textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
                <Tab LinkComponent={NavLink} to="/books" label="Books" />
                <Tab LinkComponent={NavLink} to="/about" label="About us" />

           </Tabs>
           </Toolbar>
        </AppBar>
    </div>
  );
};

export default Header;