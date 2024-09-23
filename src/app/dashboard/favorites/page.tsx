import { FavoritePokemons } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokémons API | Favoritros",
  description: "Página estática con favoritos de los 151 Pokémones",
}


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">

      <span className="text-3xl font-bold my-2 w-full text-center">Pokémones favoritos <small className="text-blue-800">Global State</small></span>

      <FavoritePokemons />

    </div>
  );
}
