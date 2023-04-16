import {
  Model, Schema, model, Document
} from 'mongoose';
import type { Client } from 'api';

export interface IClient extends Client, Document {}

interface ClientModel extends Model<IClient> {}

const schema = new Schema<IClient>(
  {
    name: { type: String, index: true, required: true },
    city: { type: String, index: true, required: true },
    postcode: { type: String, required: true },
    streetNumber: { type: Number, required: true },
    streetName: { type: String, required: true }
  },
  { timestamps: true }
);

const client: ClientModel = model<IClient, ClientModel>('Client', schema);

export default client;
