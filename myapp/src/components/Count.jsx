import { Button } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {

    var [result, set] = useState(0)
    

    var add = () => {
        set(result += 1)
    }
        var sub = () => {
            set(result -= 1)
        }
  
        return (
            <div>
                <h3>count {result}</h3>
                <Button variant='contained' onClick={add}>+</Button>
                <Button variant='contained' onClick={sub}>-</Button>

            </div>
        )
    }

export default Count