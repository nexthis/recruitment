import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

import * as BookController from './controllers/book';

import * as OrderController from './controllers/order';

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};

const router = Router();

const SWAGGER_YAML_FILEPATH = path.join(__dirname, '../openapi.yml');

// Book routes
router.post('/book/add', BookController.add);
router.get('/book/all', BookController.all);
router.get('/book/search', BookController.search);
router.get('/book/id/:bookId', BookController.get);
router.delete('/book/id/:bookId', BookController.remove);

router.get('/order/all', OrderController.all);
router.get('/order/add', OrderController.add);

// Dev routes
if (process.env.NODE_ENV === 'development') {
  const swaggerYaml = yaml.load(
    fs.readFileSync(SWAGGER_YAML_FILEPATH, 'utf8')
  ) as Object;
  router.use('/dev/api-docs', swaggerUi.serve as any);
  router.get(
    '/dev/api-docs',
    swaggerUi.setup(swaggerYaml, swaggerUiOptions) as any
  );
}

export default router;
