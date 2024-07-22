import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import initializeDatabase from '../initDatabase.js';
import config from './config/config.js';
import swaggerConfig from './config/openapiSwagger.js';
import corsMiddleware from './middlewares/corsMiddleware.js';
import errorHandler from './middlewares/errorHandler.js';
import routes from './routes/routes.js';

const app = express();

//Config e Middleware
app.use(express.json());
app.use(cors({origin: '*',}));
app.use(corsMiddleware);
app.use(errorHandler);

// Rotas
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

const PORT = config.port || 3000;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
