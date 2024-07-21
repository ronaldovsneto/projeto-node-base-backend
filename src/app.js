import dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import initializeDatabase from '../initDatabase.js';
import swaggerConfig from './config/openapiSwagger.js';
import errorHandler from './middlewares/errorHandler.js';
import routes from './routes/routes.js';

const app = express();

dotenv.config();

app.use(express.json());

app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});