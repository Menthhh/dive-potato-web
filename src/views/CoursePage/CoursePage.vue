<template>
  <div class="container mx-auto px-4 py-2">
    <div class="flex items-center text-sm text-gray-500">
      <router-link to="/" class="hover:text-gray-700">HOME</router-link>
      <span class="mx-2">›</span>
      <span>COURSE</span>
    </div>
  </div>
  <div class="flex flex-col py-10 text-2xl items-center content-center">
    <h1 class="mb-10">FIND THE RIGHT DIVING COURSE FOR YOU</h1>
    <CourseGrid />
  </div>
</template>

<script>
import CourseGrid from "./components/CourseGrid.vue";

export default {
  components: {
    CourseGrid,
  },
};
</script>