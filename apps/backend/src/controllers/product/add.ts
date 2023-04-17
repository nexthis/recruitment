import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import requestMiddleware from '../../middleware/request-middleware';
import Product from '../../models/Product';

export const addProductSchema = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required()
});

interface AddReqBody {
  name: string;
  price: number;
}

const add: RequestHandler = async (req: Request<{}, {}, AddReqBody>, res) => {
  const { name, price } = req.body;

  const product = new Product({ name, price });
  await product.save();

  res.send({
    message: 'Saved',
    book: product.toJSON()
  });
};

export default requestMiddleware(add, { validation: { body: addProductSchema } });
