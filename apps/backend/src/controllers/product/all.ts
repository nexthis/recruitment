import { RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import Order from '../../models/Order';
import Product from '../../models/Product';

const all: RequestHandler = async (req, res) => {
  const result: Array<any> = [];
  const products = await Product.find();

  // eslint-disable-next-line no-restricted-syntax
  for (const item of products) {
    // eslint-disable-next-line no-await-in-loop, max-len
    const orders = await Order.find({ products: item.id });

    // @ts-ignore
    // eslint-disable-next-line no-await-in-loop, max-len
    const idCount = orders.reduce((counter, value) => value.products.filter(val => val._id.toString() === item._id.toString()).length, 0);

    const payload = {
      ...item.toObject(),
      count: idCount,
      client: orders.length,
      totalPrice: item.price * idCount
    };
    result.push(payload);
  }

  res.send(result);
};

export default requestMiddleware(all);
