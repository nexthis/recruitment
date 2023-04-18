import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import requestMiddleware from '../../middleware/request-middleware';
import Order from '../../models/Order';

export const addOrderSchema = Joi.object().keys({
  client: Joi.string().required(),
  products: Joi.array().required()
});

interface AddReqBody {
  client: string;
  products: Array<string>;
}

const add: RequestHandler = async (req: Request<{}, {}, AddReqBody>, res) => {
  const { client, products } = req.body;

  const order = new Order({ client, products });
  await order.save();

  res.send({
    message: 'Saved',
    book: order.toJSON()
  });
};

export default requestMiddleware(add, { validation: { body: addOrderSchema } });
