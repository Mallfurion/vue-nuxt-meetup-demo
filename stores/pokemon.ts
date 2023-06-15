import { defineStore } from "pinia";
import { pokemonData } from "~/data/pokemon";

export const usePokemonStore = defineStore("pokemon", () => {
  // state
  const pokemons = ref(pokemonData);
  //action
  const getNewPokemon = async () => {
    const { data, error } = await useFetch<any>(`https://pokeapi.co/api/v2/pokemon/${random()}`);

    if (error.value) {
      throw new Error(error.value.message);
    }

    addPokemon(data.value);

    return data.value;
  };

  const levelUp = (pokemonName: string) => {
    const pokemon = pokemons.value.find((p) => p.name === pokemonName);
    if (pokemon && pokemon.level < 10) {
      pokemon.level++;
    }
  };

  const addPokemon = (data: any) => {
    pokemons.value.push({
      name: data.name,
      avatar: data.sprites.front_default,
      level: 1,
      power: data.types[0].type.name,
      external: true,
    });
  };

  return {
    pokemons,
    getNewPokemon,
    levelUp,
  };
});
