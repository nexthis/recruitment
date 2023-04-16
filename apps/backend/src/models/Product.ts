import {
  Model, Schema, model, Document
} from 'mongoose';
import type { Product } from 'api';

export interface IProduct extends Product, Document {}

interface ProductModel extends Model<IProduct> {}

const schema = new Schema<IProduct>(
  {
    name: { type: String, index: true, required: true },
    price: { type: Number, index: true, required: true }
  },
  { timestamps: true }
);

const product: ProductModel = model<IProduct, ProductModel>('Product', schema);

export default product;
