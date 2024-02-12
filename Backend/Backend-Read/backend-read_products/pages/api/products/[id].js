import dbConnect from "@/db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  const products = await Product.findById(id);

  console.log(products);

  if (!products) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(products);
}
