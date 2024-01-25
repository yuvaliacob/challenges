import { useEffect, useState } from "react";

export default function PokemonList() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0')
  const [pokemonResponse, setPokemonResponse] = useState()

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          url
        );
        const data = await response.json();
        setPokemonResponse(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  if (!pokemonResponse){
    return null
  }

  return (
    <main>
      {pokemonResponse.previous && <button type="button" onClick={() => {setUrl(pokemonResponse.previous)}}>Previous Page</button>}
      {pokemonResponse.next && <button type="button" onClick={() => {setUrl(pokemonResponse.next)}}>Next Page</button>}
      <ul>
        {pokemonResponse.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
