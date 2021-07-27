import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';

const app=express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL="mongodb+srv://AdityaPundir:Harry@1998@cluster0.3o12i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT= process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
      .then(()=>{app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)})})
      .catch((err)=>{console.log(err.message)})

      mongoose.set('useFindAndModify', false);     
