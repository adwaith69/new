import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const State = () => {

  var [name, setname] = useState("ram")
  var [b,newname]= useState()
  
  const handleinput = (e) => {
    console.log(e.target.value)
    setname(e.target.value)
  

  }

  var bname = () => {
    newname(name)
  }
  return (
      <div>
          <h1>Welcome to State</h1>
      <h3>welcome {b}</h3>
      <TextField variant='outlined' onChange={handleinput} />
      <br /><Button variant='contained' onClick={bname}>submit</Button>
    </div>
  )
}

export default State