import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from './route/posts.js';

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limint: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limint: "30mb", extended: true }));
app.use(cors);

const CONNECTION_URL = 'mongodb+srv://jkes6203:aA126182900@cluster0.ned2p.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT:${PORT}`)))
    .catch((err) => console.error(err.message));

// mongoose.set('useFindAndModify', false);  Jack add 20220924 no need