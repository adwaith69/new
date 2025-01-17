import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  var [input, setinput] = useState({ Name: "", Age: "", Department: "", Salary: "" })
  var navigate = useNavigate()
  
  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    axios.post("http://localhost:3008/add", input)
      .then((res) => {
        alert(res.data.message);
        navigate("/view")
    })
  }
  return (
    <div>
      <h1>ADD</h1>
          
          <TextField id="outlined-basic" label="Name" variant="outlined" /> <br />
          <TextField id="outlined-basic" label="Age" variant="outlined" /> <br />
          <TextField id="outlined-basic" label="Department" variant="outlined" /> <br />
          <TextField id="outlined-basic" label="Salary" variant="outlined" /> <br />
          <br />
          <Button variant="contained" color="primary">Sumbit</Button> <br />
    </div>
  )
}

export default Add