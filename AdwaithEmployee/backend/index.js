// 1.import
const express = require('express')
require('./connection')
var empModel = require('./models/employee')
var cors = require('cors')
//api creation

//2.initialise
const app = express()

//mid
app.use(express.json())
app.use(cors())

//3.api creation
app.get('/', (req, res) => {
    res.send('Hello World!')
})
 
    app.get('/view', async (req,res) => {
        try {
           var data=await empModel.find()
            res.send(data)
        }
        catch (error) {
            console.log(error)
        }


    })

app.delete("/remove/:id", async(req,res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: "Data Deleted" })
    } catch (error) {
        
    }
        
})
    
app.put('/up/:id', async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "Data Updated" })
    } catch (error) {
    }
})

app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: "Data Added" })
    } catch (error) {
        console.log(error)
    
    }
})


app.get('/t', (req, res) => {
    res.send('trial message')
    })

//4. port setting

app.listen(3008, () => {
    console.log('server is running on port 3008')
})
