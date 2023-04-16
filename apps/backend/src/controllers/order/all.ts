import { RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import Order from '../../models/Order';

const all: RequestHandler = async (req, res) => {
  const order = await Order.find().populate('client').populate('products');
  res.send(order);
};

export default requestMiddleware(all);
