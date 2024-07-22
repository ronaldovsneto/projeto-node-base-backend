import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger UI API',
      version: '1.0.0',
      description: 'APIs da nossa aplicação',
    },
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'integer', description: 'ID do usuário' },
            name: { type: 'string', description: 'Nome do usuário'  },
            email: { type: 'string', description: 'Email de autenticação do usuário'  },
            password: { type: 'string', description: 'Senha do usuário', writeOnly: true  },
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', 
        },
      },
    },
  },
  apis: [`${__dirname}/../routes/*.js`], 
};

const swaggerConfig = swaggerJsdoc(options);

export default swaggerConfig;