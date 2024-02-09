import useSWR from "swr";
import Link from "next/link";

export default function JokeList() {
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
              {data.id}: {data.name}
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

{
  /* <Link href={`/${joke.id}`}>{joke.joke}</Link> */
}
