import {
  Model, Schema, model, Document
} from 'mongoose';
import type { Order } from 'api';
import type { IClient } from './Client';
import type { IProduct } from './Product';

export interface IOrder extends Order, Document {}

interface OrderModel extends Model<Order> {}

const schema = new Schema<Order>(
  {
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    client: { type: Schema.Types.ObjectId, ref: 'Client' }
  },
  { timestamps: true }
);

const order: OrderModel = model<Order, OrderModel>('Order', schema);

export default order;
