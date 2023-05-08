import { useCallback, useState } from "react";
import Bar from "./Bar";

function App() {
  const [pokemon, setPokemon] = useState({ id: null, name: "", sprites: "" });

  console.log(pokemon);
  const search = useCallback(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`)
      .then((data) => {
        return data.json();
      })
      .then((poke) => {
        setPokemon({
          ...pokemon,
          id: poke.id,
          sprites: poke.sprites.front_default,
        });
      });
  }, [pokemon]);

  return (
    <div>
      <Bar />
      <button onClick={search}>search</button>
      
      <input
        type="text"
        onChange={(e) => {
          setPokemon({ ...pokemon, name: e.target.value.toLowerCase() });
        }}
      />
      <img src={pokemon.sprites} alt="" />
    </div>
  );
}

export default App;
