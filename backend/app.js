import express from 'express';
import morgan from 'morgan';

import AppError from './utils/appError.js';
import globalErrorHandler from './controller/errorController.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  // Logging middleware for development environment
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  console.log('Server is running');
  res.send('Server is running');
})

app.use(globalErrorHandler);

export default app;