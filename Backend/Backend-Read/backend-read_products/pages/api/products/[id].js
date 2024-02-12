import dbConnect from "@/db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  const products = await Products.findById(id);

  console.log(products);

  if (!products) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(products);
}

// export default function handler(request, response) {
//   const { id } = request.query;

//   const product = products.find((product) => product.id === id);

//   if (!product) {
//     return response.status(404).json({ status: "Not Found" });
//   }

//   response.status(200).json(product);
// }
