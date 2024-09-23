import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

/*
  {
    '1': { id: '1', name: 'Pikachu' },
    '2': { id: '2', name: 'Pikachu' },
    '3': { id: '3', name: 'Pikachu' },
  }
*/
/* DESPUES
  {
    favorites: {
      '1': { id: '1', name: 'Pikachu' },
      '2': { id: '2', name: 'Pikachu' },
      '3': { id: '3', name: 'Pikachu' },
    }
  }
*/

interface PokemonsState {
  favorites: {[key: string]: SimplePokemon};
}

// const getInitialState = (): PokemonsState => {
//   // if(typeof localStorage === 'undefined') return {}; //No es una solucion perfecta. No hay match con la hidratacion

//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') || '{}');
//   return favorites;
// }

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
  // '1': { id: '1', name: 'bulbasaur' },
  // '3': { id: '3', name: 'venusaur' },
  // '5': { id: '5', name: 'charmeleon' }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        //return;
      } else {
        state.favorites[id] = pokemon;
      }

      //! No se debe de hacer en Redux !
      // localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));

    },

  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer