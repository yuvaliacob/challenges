import { getAllProducts } from "services/productServices.js";

// Endpoint for All Listings

export default function handler(request, response) {
  const products = getAllProducts();

  response.status(200).json(products);
}
