import { RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import Order from '../../models/Order';
import Product from '../../models/Product';
import Client from '../../models/Client';

const add: RequestHandler = async (req, res) => {
  const product = new Product({
    name: 'test',
    price: 45
  });
  await product.save();

  const client = new Client({
    name: 'TeeestClient',
    city: 'Gdańsk',
    postcode: '80-251',
    streetNumber: 5,
    streetName: 'Powiązki'
  });
  await client.save();

  const order = new Order({
    client,
    products: product
  });
  await order.save();

  res.send({ order });
};

export default requestMiddleware(add);
