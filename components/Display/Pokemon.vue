<template>
  <div class="pokemon card" :class="{ 'animate-pulse': pokemon.level === 10 }">
    <div class="level" :class="`level-${pokemon.level}`">{{ pokemon.level }}</div>
    <button class="increase-level" @click="$emit('increaseLevel', pokemon.name)">+1</button>
    <div class="pokemon-content" :class="{ 'animate-bounce': pokemon.level === 10 }">
      <img v-if="!pokemon.external" :src="`/images/${pokemon.avatar}`" />
      <img v-else :src="pokemon.avatar" />

      <h3 class="capitalize">{{ pokemon.name }}</h3>

      <PokemonPower :type="pokemon.power"></PokemonPower>
      <slot name="announce"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pokemon } from "~/models/pokemon";

interface Props {
  pokemon: Pokemon;
}
const { pokemon } = defineProps<Props>();

const emit = defineEmits(["increaseLevel"]);
</script>

<style scoped lang="scss">
.pokemon {
  @apply relative;

  .pokemon-content {
    @apply flex flex-col items-center;
  }
  img {
    width: 100px;
    height: 100px;
  }

  .level {
    @apply absolute left-4 top-2 border-2 w-[24px] h-[24px] text-center;
  }

  .level-1,
  .level-2,
  .level-3 {
    @apply border-lime-400;
  }

  .level-4,
  .level-5,
  .level-6 {
    @apply border-yellow-400;
  }

  .level-7,
  .level-8,
  .level-9 {
    @apply border-orange-400;
  }

  .level-10 {
    @apply border-green-800 scale-125 transition-all;
  }

  .increase-level {
    @apply absolute right-4 top-2 py-1 px-2 cursor-pointer bg-sunset text-white;
  }
}
</style>
