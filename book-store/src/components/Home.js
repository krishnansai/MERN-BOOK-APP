import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1 alignItems="center">SAI DEMO</h1>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button LinkComponent={Link} to="/books" sx={{marginTop: 12 }} variant="contained">
        <Typography variant="h3">See All Products</Typography>
        </Button>
      </Box>
    </div>
  );
}

export default Home