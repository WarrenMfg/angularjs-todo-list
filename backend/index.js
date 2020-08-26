import express from 'express';
import morgan from 'morgan';
import { resolve } from 'path';
const app = express();
const PORT = process.env.PORT || 50000;
app.use(morgan('dev'));
app.use(express.static(resolve(__dirname, '../frontend')));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
