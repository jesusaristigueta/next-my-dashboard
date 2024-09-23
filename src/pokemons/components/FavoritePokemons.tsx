"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import React from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {

  const favoritePokemons = useAppSelector(state => state.pokemons.favorites);

  const favPokemonsArray = Object.values(favoritePokemons); //Warning si se hace directo

  // const [pokemons, setPokemons] = React.useState(favPokemonsArray);

  // React.useEffect(() => {
  //   setPokemons(favPokemonsArray);
  // }, [favPokemonsArray])

  //console.log(favPokemonsArray);

  return (
    // <PokemonGrid pokemons={favPokemonsArray} />
    // <PokemonGrid pokemons={pokemons} />
    <>
      {
        favPokemonsArray.length === 0
          ? (<NoFavorites />)
          : (<PokemonGrid pokemons={favPokemonsArray} />)
      }
    </>
  )
}


export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-600" />
      <span className="text-xl font-bold text-slate-700 capitalize">No tienes Pokémones favoritos.</span>
      <p className="text-slate-500 text-sm">Añade algunos favoritos en la sección de favoritos.</p>
    </div>
  )
}