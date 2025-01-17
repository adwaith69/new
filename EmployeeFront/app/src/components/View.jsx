import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const View = () => {
  var [data, setdata] = useState([])
  var navigate=useNavigate()
  axios.get("http://localhost:3008/view")
    .then((res) => {
      setdata(res.data)
    })
  const delvalue = (id) => {
    console.log(id)
    axios.delete("http://localhost:3008/remove/" + id)
      .then((res) => {
        alert(res.data.message)
        window.location.reload()
      })
  }
    const updatevalue = (val) => {
      navigate("/add", { state: { val } })
    }
  
     
    
  
    return (
      <div>
        <h1>VIEW</h1>
        <Table>
          <TableHead>
            <TableRow>
           
           
              &nbsp;<TableCell>NAME</TableCell>
              &nbsp;<TableCell>AGE</TableCell>
              &nbsp; <TableCell>DEPARTMENT</TableCell>
              &nbsp;<TableCell>SALARY</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((val) => {
                return (
                  <TableRow>
                    &nbsp;<TableCell>{val.Name}</TableCell>
                    &nbsp;<TableCell>{val.Age}</TableCell>
                    &nbsp;<TableCell>{val.Department}</TableCell>
                    &nbsp;<TableCell>{val.Salary}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="error" onClick={() => { delvalue(val._id) }}>Delete</Button> &nbsp;
                      <Button variant="contained" color="secondary" onClick={() => { updatevalue(val) }}>Update</Button>
                    </TableCell>

          

                
                  </TableRow>
                )
              })}
            
          
          </TableBody>
        </Table>
      </div>
    )
  
}

export default View