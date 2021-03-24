import mongoose, { model, Schema } from "mongoose";

// SCHEMA

const ProductSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  info: { type: String },
  price: { type: Number },
  type: { type: Number },
  qty: { type: Number }
});

const OrderSchema = new Schema(
  {
    userId: { type: String },
    items: [ProductSchema]
  },
  {
    collection: "orders"
  }
);

// MODEL

const Order = mongoose.models.Order || model("Order", OrderSchema);

export default Order;
