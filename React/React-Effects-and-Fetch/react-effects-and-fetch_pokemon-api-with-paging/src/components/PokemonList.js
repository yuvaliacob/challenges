import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const offset = 20 * (page - 1);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  function handelNextPage() {
    setPage((page) => page + 1);
    console.log(page);
  }

  function handlePrevPage() {
    setPage((page) => page - 1);
    console.log(page);
  }

  function renderPrevButton() {
    if (page === 1) {
      return null;
    }
    return <button onClick={handlePrevPage}>Previous Page</button>;
  }

  return (
    <main>
      {renderPrevButton()}
      <button type="button" onClick={handelNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
