<template>
  <button class="add-pokemon" @click="getNewPokemon">Add Pokemon</button>
  <div class="pokemon-container">
    <DisplayPokemon v-for="pokemon of pokemons" :pokemon="pokemon" @increase-level="levelUp">
      <template #announce v-if="pokemon.level === 10">
        <div class="announce">{{ evolveText }}</div>
      </template>
    </DisplayPokemon>
  </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from "~/stores/pokemon";

const { pokemons, levelUp, getNewPokemon } = usePokemonStore();

const evolveText = inject("evolveText");

useHead({
  title: "SFCs and Nuxt | JSHeroes",
});
</script>

<style scoped lang="scss">
.pokemon-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.add-pokemon {
  @apply absolute top-6 right-10;
}

.announce {
  @apply mt-4 text-white bg-red-400 px-2 py-1 rounded-md;
}
</style>
