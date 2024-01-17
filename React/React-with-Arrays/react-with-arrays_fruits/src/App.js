import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1339,
      name: "🫐 Blueberry",
      color: "purple",
    },
    {
      id: 1340,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1341,
      name: "🥝 Kiwi",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits &&
        fruits.map(({ id, name, color }) => (
          <Card key={id} name={name} color={color} />
        ))}
    </div>
  );
}
