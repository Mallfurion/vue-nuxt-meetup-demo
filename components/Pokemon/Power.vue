<template>
  <div class="power-chip" :class="props.type">
    <span>{{ props.type.toUpperCase() }}</span>
  </div>
</template>

<script setup lang="ts">
import { POWER_TYPE } from "~/models/pokemon";

interface Props {
  type: POWER_TYPE;
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.power-chip {
  @apply font-semibold py-1 px-2 rounded-lg w-fit;
}

.grass {
  @apply text-white bg-green-600;
}

.fire {
  @apply text-white bg-red-600;
}

.normal {
  @apply text-white bg-gray-600;
}

.electric {
  @apply bg-yellow-500;
}

.water {
  @apply text-white bg-blue-600;
}
</style>
