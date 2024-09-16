import Express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import Routes from './router/routes.js'
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from 'cors';

dotenv.config();

const app = Express();
const PORT = process.env.PORT || 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process with failure code
  });

// Define allowed origins
const allowedOrigins = ['https://aayuga-front-end.vercel.app', 'http://localhost:5173'];

// Configure CORS options
const corsOptions = {
   origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
         callback(null, true);
      } else {
         console.error('CORS error: Origin not allowed', origin);
         callback(new Error('Not allowed by CORS'));
      }
   },
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   allowedHeaders: ['Content-Type', 'Authorization']
};

// Use CORS middleware
app.use(cors(corsOptions));
app.use(Express.json()); // Built-in middleware for JSON parsing
app.use(Routes);
app.get('/', (req, res) => {
   res.send({ "Message": "Hello from Aayuga team!" });
});

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
});
