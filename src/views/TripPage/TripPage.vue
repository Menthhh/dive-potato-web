<!-- App.vue -->
<template className="src/views/TripPage/TripDetails.vue">
  <div class="container mx-auto px-4 py-2">
      <div class="flex items-center text-sm text-gray-500">
        <router-link to="/" class="hover:text-gray-700">HOME</router-link>
        <span class="mx-2">›</span>
        <span>TRIP</span>
      </div>
    </div>
  <div class="flex flex-col py-10 text-2xl items-center content-center">
   
    <h1 class="mb-10">GO ON A TRIP</h1>
    <DestinationGrid />
  </div>
</template>

<script>
import DestinationGrid from "./components/DestinationGrid.vue";

export default {
  components: {
    DestinationGrid,
  },
};
</script>