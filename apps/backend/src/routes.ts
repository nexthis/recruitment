import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

import * as ProductController from './controllers/product';

import * as OrderController from './controllers/order';

import * as ClientController from './controllers/client';

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};

const router = Router();

const SWAGGER_YAML_FILEPATH = path.join(__dirname, '../openapi.yml');

router.get('/order/all', OrderController.all);
router.post('/order/add', OrderController.add);

router.get('/product/all', ProductController.all);
router.post('/product/add', ProductController.add);

router.get('/client/all', ClientController.all);
router.post('/client/add', ClientController.add);

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
