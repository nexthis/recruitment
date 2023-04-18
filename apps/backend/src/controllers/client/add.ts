import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import requestMiddleware from '../../middleware/request-middleware';
import Client from '../../models/Client';

export const addClientSchema = Joi.object().keys({
  name: Joi.string().required(),
  city: Joi.string().required(),
  postcode: Joi.string().required(),
  streetNumber: Joi.string().required(),
  streetName: Joi.string().required()
});

interface AddReqBody {
  name: string;
  city: string;
  postcode: string;
  streetNumber: number;
  streetName: string;
}

const add: RequestHandler = async (req: Request<{}, {}, AddReqBody>, res) => {
  const { name, city, postcode, streetNumber, streetName } = req.body;

  const client = new Client({ name, city, postcode, streetNumber, streetName});
  await client.save();

  res.send({
    message: 'Saved',
    book: client.toJSON()
  });
};

export default requestMiddleware(add, { validation: { body: addClientSchema } });
