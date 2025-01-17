const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://adwaithsp24:adwaith9669@cluster0.dtp8f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected!'));