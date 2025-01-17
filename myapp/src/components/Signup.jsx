import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div class="name">
          <h1>Signup</h1>

          <TextField id="outlined-basic" label="Username" variant="outlined" /> <br />
          <TextField id="outlined-basic" label="Password" variant="outlined" /> <br />
          <Button variant="text">login</Button>  
    </div>
  )
}

export default Signup