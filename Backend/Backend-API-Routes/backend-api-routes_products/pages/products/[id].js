import useSWR from "swr";
import { useRouter } from "next/router";

export default function SingleProduct() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  console.log("What's in data:", data);

  //   const { id, name, description, currency, category } = data;

  return (
    <>
      <h2>{data.name}</h2>
      <ul>
        <li> {data.category}</li>
        <li>{data.description}</li>
        <li>
          {data.price}
          {data.currency}
        </li>
      </ul>
    </>
  );
}
