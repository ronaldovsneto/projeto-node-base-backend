import dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import initializeDatabase from '../initDatabase.js';
import swaggerConfig from './config/openapiSwagger.js';
import errorHandler from './middlewares/errorHandler.js';
import routes from './routes/routes.js';
import corsMiddleware from './middlewares/corsMiddleware.js';
import cors from 'cors';

const app = express();

dotenv.config();

//Config
app.use(express.json());
app.use(cors({origin: '*',}));

// Rotas
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

//middleware
app.use(errorHandler);
app.use(corsMiddleware);


const PORT = process.env.PORT || 3000;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});