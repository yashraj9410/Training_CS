import { Options } from 'swagger-jsdoc';
import routes from '../routes/user-routes'
//defining the swagger option
export const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A sample API to demonstrate Swagger with Express and TypeScript'
    },
    servers: [
      {
        url: 'http://localhost:3300'
      }
    ]
  },
  apis: ['../routes/*.ts']
};