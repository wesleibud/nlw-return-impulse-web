import express from 'express';
import cors from 'cors';
import { routes } from './routers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP Server running!');
});