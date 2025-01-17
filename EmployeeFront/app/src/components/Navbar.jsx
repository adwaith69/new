import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <h3>Employee</h3>
                  <Link to='/add'>
                      <Button variant="contained">add</Button>
                  </Link>
                  <Link to='/view'>
                      <Button variant="contained">view</Button>
                      
                  </Link>



              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar