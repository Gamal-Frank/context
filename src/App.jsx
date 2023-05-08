import { useCallback, useState } from "react";
import Bar from "./Bar";

function App() {
  const [pokemon, setPokemon] = useState({ id: null, name: "", sprites: "",height:"",weight:"",species:"" });

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
          height:poke.height,
          weight:poke.weight,
          species:poke.species.name
        });
      });
  }, [pokemon]);

  return (
    <div className="h-[100vh] bg-bokemon">
      <Bar />

      <div className=" flex justify-center items-center flex-col ">
        <input
          className=" border-gray-950 border-[1px] shadow-lg rounded-lg w-[500px] mt-44"
          type="text"
          onChange={(e) => {
            setPokemon({
              ...pokemon,
              name: e.target.value.toLowerCase().replace(/\s/g, ""),
            });
          }}
        />
        <button
          className="mt-5 border-[1px] border-red-500 bg-slate-500 rounded-lg shadow-lg p-2 active:bg-red-500 active:text-white"
          onClick={search}
        >
          search
        </button>
        <div className="flex flex-col items-center">
        <img className={pokemon.sprites?"w-[200px] h-[200px]":""} src={pokemon.sprites} alt="" />
        <div className=" flex flex-row justify-between w-[800px] mt-10">
        <div className="text-3xl"><h1 className="font-bold text-xl">Height</h1>{pokemon.height}</div>
        <div className="text-3xl"><h1 className="font-bold text-xl">Weight</h1>{pokemon.weight}</div>
        <div className="text-3xl"><h1 className="font-bold text-xl">Species</h1>{pokemon.species}</div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
