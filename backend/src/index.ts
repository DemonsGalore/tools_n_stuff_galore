import express from 'express';
import helmet from 'helmet';
import routes from './routes.js';

const app = express();
app.use(helmet());
app.use(express.json());
// app.use(express.urlencoded({ extended: true })); only use if needed

routes(app);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
