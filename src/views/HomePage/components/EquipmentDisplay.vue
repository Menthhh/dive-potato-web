<template>
  <div class="container mx-auto px-4 py-12">
    <h2 class="text-center text-2xl font-thin mb-16">{{ title }}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 hover:cursor-pointer">
      <div 
        v-for="item in equipmentItems" 
        :key="item.id" 
        class="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <div class="mb-6 h-48 flex items-center justify-center group relative">
          <!-- Hover effect on image -->
          <img 
            :src="item.imageUrl" 
            :alt="item.name" 
            class="max-h-full max-w-full object-contain group-hover:opacity-80 transition-opacity duration-300"
          />
          <!-- Hover overlay (optional) -->
          <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-xl">
              {{ item.name }}
            </p>
          </div>
        </div>
        <h3 class="text-center text-primary font-semibold mb-4">{{ item.name }}</h3>
        <p class="text-center font-bold">{{ formatPrice(item.price) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EquipmentDisplay',
  props: {
    title: {
      type: String,
      default: 'EQUIPMENT'
    },
    equipmentItems: {
      type: Array,
      default: () => [
        {
          id: 1,
          name: 'Beanie',
          price: 2700.00,
          imageUrl: 'equipment1.png'
        },
        {
          id: 2,
          name: 'Black Pearl - 2 Pieces - Longjohn - 2mm',
          price: 13500.00,
          imageUrl: 'equipment1.png'
        },
        {
          id: 3,
          name: 'Jax',
          price: 1360.00,
          imageUrl: 'equipment1.png'
        },
        {
          id: 4,
          name: 'MTX-RC Set',
          price: 39990.00,
          imageUrl: 'equipment1.png'
        }
      ]
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
}
</script>

<style scoped>
/* Optional: Add custom styles here if needed */
</style>
