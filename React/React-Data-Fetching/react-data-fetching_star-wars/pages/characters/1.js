import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const fetcher = async (id) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const id = 1;

export default function Character() {
  const { data, error, isLoading } = useSWR("/api/user", () => fetcher(id));

  console.log("Fetched character data: ", data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { name, height, eye_color, birth_year } = data;

  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        eyeColor={eye_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
