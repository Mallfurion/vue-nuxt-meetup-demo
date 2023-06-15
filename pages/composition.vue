<template>
  <div class="section">
    <h1>
      <span>You are attending </span>
      <span :class="{ 'text-green-400': updated }">{{ meetingName }}</span>
    </h1>

    <!-- calls event.stopPropagation() and event.preventDefault() -->
    <button @click.stop.prevent="updateMeetingName" ref="buttonRef">Update Meeting Name</button>

    <div v-if="updated">
      <input type="text" v-model.trim="meetingName" />
    </div>

    <hr />
  </div>
</template>

<script setup lang="ts">
const meetingName = ref("JSHeroes");

const updateMeetingName = () => {
  meetingName.value = "Vue & Nuxt";
  shootConfetti();
};
const updated = computed(() => meetingName.value !== "JSHeroes");

/**
 * watchers and templateRefs
 */

const buttonRef = ref();

// watch(meetingName, async (newVal) => {
//   buttonRef.value.disabled = newVal === "Vue & Nuxt" ? true : false;
// });

watchEffect(async () => {
  buttonRef.value.disabled = meetingName.value === "Vue & Nuxt" ? true : false;
});

useHead({
  title: "Composition API | JSHeroes",
});
</script>

<style scoped lang="scss"></style>
