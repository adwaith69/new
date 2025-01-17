import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var [wel, setwel] = useState()
    var[a,b]= useState()
    const R = () => {
        setwel("Welcome to React")
        b("React is trending")
    }

    const A = () => {
        setwel("Welcome to Angular")
        b("Angular was trending")
    }
        const V = () => {
            setwel("Welcome to Vue")
            b("Vue is not yet trending")
    } 
    
    useEffect(() => {
        A()
    },[])

  return (
      <div>
          
          <h1> {wel}</h1>
          <h2>{a}</h2>
          <Button variant='contained' color='secondary' onClick={R}>React</Button>
          <Button variant='contained' color='error'onClick={A}>Angular</Button>
          <Button variant='contained' color='success' onClick={V}>Vue</Button>

    </div>
  )
}

export default Name