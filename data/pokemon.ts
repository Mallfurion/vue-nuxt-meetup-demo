import { POWER_TYPE, Pokemon } from "~/models/pokemon";

export const pokemonData: Pokemon[] = [
  { name: "Bulbasaur", power: POWER_TYPE.GRASS, avatar: "bulbasaur.jpeg", level: 1 },
  { name: "Charmander", power: POWER_TYPE.FIRE, avatar: "charmander.jpeg", level: 1 },
  { name: "Eevee", power: POWER_TYPE.NORMAL, avatar: "eevee.jpeg", level: 1 },
  { name: "Pikachu", power: POWER_TYPE.ELECTRIC, avatar: "pikachu.jpeg", level: 1 },
  { name: "Squirtle", power: POWER_TYPE.WATER, avatar: "squirtle.jpeg", level: 1 },
];
