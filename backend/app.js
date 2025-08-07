import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import AppError from './utils/appError.js';
import globalErrorHandler from './controllers/errorController.js';

import quizRouter from './routes/quizRoutes.js'

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const corsOptions = {
  origin: ["http://localhost:5173", "https://352147081dec.ngrok-free.app"],
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'development') {
  // Logging middleware for development environment
  app.use(morgan('dev'));
}

app.get('/test', (req, res) => {
  console.log('Server is running');
  res.send('Server is running');
})

app.use('/api/v1/quiz', quizRouter);

app.all(/(.*)/, (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;