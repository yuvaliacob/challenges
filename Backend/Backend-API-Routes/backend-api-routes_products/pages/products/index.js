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

  //   const { id, name, description, currency, category } = data;

  return (
    <>
      <h2>Products</h2>
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            <h3>
              {data.id}: <Link href={`/products/${data.id}`}>{data.name}</Link>
            </h3>
            <ul>
              <li> {data.category}</li>
              <li>{data.description}</li>
              <li>
                {data.price}
                {data.currency}
              </li>
            </ul>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}
