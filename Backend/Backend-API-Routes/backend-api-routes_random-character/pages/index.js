import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR(`/api/random-character`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log("Fetched: ", data);

  if (!data) {
    return;
  }

  const { firstName, lastName, twitterName, geohash } = data;

  return (
    <>
      <h2>Fetched character data:</h2>
      <ul>
        <li>First name: {firstName}</li>
        <li>Last name: {lastName}</li>
        <li>Twitter handle: {twitterName}</li>
        <li>Geohash: {geohash}</li>
      </ul>
    </>
  );
}
