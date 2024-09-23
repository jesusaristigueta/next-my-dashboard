"use client";

import { Provider } from "react-redux";
import { store } from ".";
import React from "react";
import { setFavoritePokemons } from "./pokemons/pokemonsSlice";


interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {

  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') || '{}');
    //console.log(favorites);
    store.dispatch(setFavoritePokemons(favorites));
  }, []);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
