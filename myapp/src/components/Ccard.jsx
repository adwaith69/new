import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import axios from 'axios';
import { Grid } from '@mui/material';

const Ccard = () => {
    const [data, setData] = React.useState([])
    axios.get("https://fakestoreapi.com/products")
        .then((dat) => {
            console.log(dat.data)
            setData(dat.data)
        })
      
    return (
        <div>
            <Grid container spacing={2}>
                {data.map((val) => {
                    return (
                        <Grid item xs={8}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={val.image}
                                        title={val.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {val.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            <h3>{val.category}</h3>
                                            {val.description}
                                            <h2>RS:{val.price}</h2>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                   
                        </Grid>
                    )
                })}
                
                    </Grid>
                
    </div>
  )
}

export default Ccard