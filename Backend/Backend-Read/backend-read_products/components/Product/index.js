import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <article>
        <h4>Reviews</h4>
        <h5>
          <q>{data.reviews[0].title}</q>
          <br />
          <span>Rating: {data.reviews[0].rating}</span>
        </h5>

        <p>
          <q>{data.reviews[0].text}</q>
        </p>
      </article>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
