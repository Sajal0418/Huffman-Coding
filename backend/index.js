const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();

app.use(bodyParser.join());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/huffmanDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));atch(err => console.log(err));

const PORT= process.env.PORT ||5000;
app.listen(PORT,()=> console.log(`Connected to ${PORT}`));


