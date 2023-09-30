import express from 'express';
import _ from 'lodash';
const PORT = 8000;
import getBlogRoutes from "./routes/getBlogs.js"

const app = express();
app.use(express.json());

app.use('/api', getBlogRoutes);



app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`))  