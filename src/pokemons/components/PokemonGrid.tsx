import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">

      {pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        </div>
      ))}

    </div>
  )
}
