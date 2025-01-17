import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <h3> myapp</h3>
                  <Link to='/log'>
                  <Button variant="contained">login</Button>
                  </Link>
                  &nbsp; &nbsp;
                  <Link to='/Signup'>
                  <Button variant="contained">Signup</Button>
                  </Link>
                  &nbsp; &nbsp;

                  <Link to='/state'>
                  <Button variant="contained">State</Button>
                  </Link>  
                  <Link to='/Count'>
                  <Button variant="contained">Counter</Button>
                  </Link>
                  
                  <Link to='/Name'>
                  <Button variant="contained">Name</Button>
                  </Link>
                    
                  <Link to='/Api'>
                  <Button variant="contained">Api</Button>
                  </Link>
                  <Link to='/Ccard'>
                  <Button variant="contained">Card</Button>
                  </Link>
                  
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                  
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                  <br /><img src="https://d-cb.jc-cdn.com/sites/crackberry.com/files/styles/large/public/article_images/2017/11/TATA-BG_0.jpg" length="200px" width="100px"  />
                  &nbsp; &nbsp;
                 
               
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar