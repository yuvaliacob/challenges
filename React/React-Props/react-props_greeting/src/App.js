import "./styles.css";

export default function App() {
  return <Greeting name="Mary" />;
}

function Greeting({ name }) {
  return <h1>{name === "Mary" ? "Hello, coach!" : `Hello, ${name}`}</h1>;
}
