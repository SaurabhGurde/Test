import express from 'express';
import _ from 'lodash';
import cors from 'cors';
const PORT = 8000;
import getBlogRoutes from "./routes/getBlogs.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', getBlogRoutes);



app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`))  