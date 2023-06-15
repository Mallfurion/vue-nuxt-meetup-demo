<template>
  <div class="container shell">
    <div class="menu">
      <ul>
        <li><NuxtLink to="/">Welcome</NuxtLink></li>
        <li><NuxtLink to="/composition">Composition API</NuxtLink></li>
        <li><NuxtLink to="/sfcs-nuxt">SFCs & Nuxt</NuxtLink></li>
      </ul>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.shell {
  @apply mt-8 mx-auto;
}
.menu {
  @apply mb-8;
  ul {
    @apply flex;

    li {
      @apply mr-8 text-lg font-semibold cursor-pointer;
    }
  }
}
</style>
