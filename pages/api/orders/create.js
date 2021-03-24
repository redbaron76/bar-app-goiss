import Order from "../../../models/orders";
import dbConnect from "../../../utils/db";

export default async (req, res) => {
  if (req.method === "POST") {
    await dbConnect();
    const data = req.body;

    if (data.userId) {
      const order = new Order();
      order.userId = data.userId;
      order.items = data.items;
      await order.save();

      console.log("order", order);

      res.status(200).json(true);
    }

    res.status(200).json(false);
  }
  // res.status(200).json({ name: 'John Doe' })
};
