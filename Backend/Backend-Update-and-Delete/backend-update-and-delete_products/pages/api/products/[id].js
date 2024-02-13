import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }

  if (request.method === "PUT") {
    try {
      const updatedProduct = request.body;

      await Product.findByIdAndUpdate(id, updatedProduct);

      response.status(200).json({ status: "Product successfully updated." });
    } catch (error) {
      response.status(500).json({ error: "Failed to update the product." });
    }
  }
}
