import dbConnect from "@/db/connect";
import Product from "@/components/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const products = await Product.find();

      response.status(200).json(products);
    } catch (error) {
      console.error(error);
    }
  }
}
