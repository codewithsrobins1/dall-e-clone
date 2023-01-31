import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoute.js';
import dalleRoutes from './routes/dalleRoutes.js';

const PORT = 8080;

//  Utilize ENV Variables
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({
    limit: '50mb'
}));

//  API ENDPOINTS
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.get('/', async(req, res) => {
    res.send('Hello from DALL-E')
})

const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => (
            'Server has started on port http://localhost:8080'
        ));
    } catch (err) {
        console.log(err)
    }
}

startServer();