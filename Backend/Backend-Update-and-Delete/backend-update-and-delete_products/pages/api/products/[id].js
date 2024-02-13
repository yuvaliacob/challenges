import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    const updatedProduct = request.body;

    await Product.findByIdAndUpdate(id, updatedProduct);

    if (!updatedProduct) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json({ status: `Product ${id} updated!` });
  }
}
