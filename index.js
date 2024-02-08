import express from 'express';
import { itemsRouter } from './routes/router.js';

const app = express();
app.use(express.json());

// Routes
app.use('/items', itemsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
