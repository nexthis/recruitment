import { RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import Client from '../../models/Client';

const all: RequestHandler = async (req, res) => {
  const result = await Client.find();

  res.send(result);
};

export default requestMiddleware(all);
