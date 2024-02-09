import useSWR from "swr";
import Link from "next/link";

export default function AllProducts() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  //   console.log("What's in data:", data);

  return (
    <>
      <h2>Products</h2>
      <ul>
        {data.map(({ id, name, description, currency, category, price }) => (
          <li key={id}>
            <h3>
              {id}: <Link href={`/products/${id}`}>{name}</Link>
            </h3>
            <ul>
              <li> {category}</li>
              <li>{description}</li>
              <li>
                {price}
                {currency}
              </li>
            </ul>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}
