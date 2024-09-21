import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // Lanzar error para pruebas y manejo del error.tsx
  //throw new Error(`Error fetching pokemons`);

  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">

      <span className="text-3xl font-bold my-2 w-full text-center">Listado de Pokémons <small>estático</small></span>

      <PokemonGrid pokemons={pokemons} />

    </div>
  );
}