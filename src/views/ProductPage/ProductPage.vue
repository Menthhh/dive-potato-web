<!-- src/views/ProductListing.vue -->
<template>
  <div class="bg-white">
    <!-- Breadcrumb Navigation -->
    <div class="container mx-auto px-4 py-2">
      <div class="flex items-center text-sm text-gray-500">
        <router-link to="/" class="hover:text-gray-700">HOME</router-link>
        <span class="mx-2">›</span>
        <span>PRODUCT</span>
      </div>
    </div>

    <!-- Page Title -->
    <div class="container mx-auto px-4 text-center py-10">
      <h1 class="text-2xl font-bold uppercase">ALL PRODUCT</h1>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 mb-16">
      <div class="flex flex-col md:flex-row">
        <!-- Filter Sidebar - Left -->
        <div class="w-full md:w-64 md:pr-8 mb-8 md:mb-0">
          <div class="flex justify-between items-center mb-4">
            <h2 class="font-bold uppercase">FILTER</h2>
            <button class="text-sm text-gray-500 hover:text-gray-700">CLEAR</button>
          </div>

          <!-- Category Filter -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-3 cursor-pointer">
              <h3 class="font-medium uppercase">CATEGORY</h3>
              <span>▼</span>
            </div>
            <div class="space-y-2">
              <div v-for="(category, index) in categories" :key="index" class="flex items-center">
                <input 
                  type="checkbox" 
                  :id="`category-${index}`" 
                  class="mr-2"
                />
                <label :for="`category-${index}`" class="text-sm">{{ category }}</label>
              </div>
            </div>
          </div>

          <!-- Brand Filter -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-3 cursor-pointer">
              <h3 class="font-medium uppercase">BRAND</h3>
              <span>▼</span>
            </div>
            <div class="space-y-2">
              <div v-for="(brand, index) in brands" :key="index" class="flex items-center">
                <input 
                  type="checkbox" 
                  :id="`brand-${index}`" 
                  class="mr-2"
                />
                <label :for="`brand-${index}`" class="text-sm">{{ brand }}</label>
              </div>
            </div>
          </div>

          <!-- Size Filter -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-3 cursor-pointer">
              <h3 class="font-medium uppercase">SIZE</h3>
              <span>▼</span>
            </div>
            <div class="space-y-2">
              <div v-for="(size, index) in sizes" :key="index" class="flex items-center">
                <input 
                  type="checkbox" 
                  :id="`size-${index}`" 
                  class="mr-2"
                />
                <label :for="`size-${index}`" class="text-sm">{{ size }}</label>
              </div>
            </div>
          </div>

          <!-- Price Filter -->
          <div>
            <div class="flex justify-between items-center mb-3 cursor-pointer">
              <h3 class="font-medium uppercase">PRICE</h3>
              <span>▼</span>
            </div>
            <div>
              <input type="range" class="w-full mb-2" min="0" max="5000" step="100" v-model="priceRange" />
              <div class="flex justify-between">
                <input type="text" class="w-16 p-1 border text-sm" placeholder="0" v-model="minPrice" />
                <span class="mx-2 self-center">-</span>
                <input type="text" class="w-16 p-1 border text-sm" placeholder="5000" v-model="maxPrice" />
              </div>
            </div>
          </div>
        </div>

        <!-- Product Grid - Right -->
        <div class="flex-1">
          <!-- Sort Controls -->
          <div class="flex justify-end mb-6">
            <div class="flex items-center">
              <span class="mr-2 text-sm font-medium">SORT BY</span>
              <select class="border p-1 text-sm min-w-32">
                <option>New Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </div>
          </div>

          <!-- Product Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="(product, index) in products" :key="index" class="flex flex-col mb-6">
              <!-- Product Image -->
              <div class="mb-2 hover:opacity-90 transition-opacity">
                <router-link :to="`/product/${product.id}`">
                  <img :src="product.image" :alt="product.name" class="w-full h-60 object-cover" />
                </router-link>
              </div>
              
              <!-- Product Info -->
              <div class="text-center">
                <router-link :to="`/product/${product.id}`" class="text-sm hover:text-yellow-500">
                  {{ product.name }}
                </router-link>
                <div class="mt-1">
                  <span v-if="product.salePrice" class="text-red-500 font-medium mr-2">{{ product.salePrice }} ฿</span>
                  <span :class="product.salePrice ? 'text-gray-500 line-through text-sm' : 'font-medium'">{{ product.price }} ฿</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Load More -->
          <div class="text-center mt-10">
            <button class="border border-black px-8 py-2 hover:bg-black hover:text-white transition-colors">
              SEE MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListing',
  data() {
    return {
      categories: ['APEKS', 'GULL', 'SUUNTO', 'MOBBY\'S', 'DPT'],
      brands: ['APEKS', 'GULL', 'SUUNTO', 'MOBBY\'S', 'DPT'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      priceRange: 2500,
      minPrice: '',
      maxPrice: '',
      products: [
        {
          id: 1,
          name: 'Beanie',
          image: '/images/products/beanie.png',
          price: '1,900.00',
          salePrice: '1,590.00'
        },
        {
          id: 2,
          name: 'Black Pearl - 2 Pieces - Longjohn - 2mm',
          image: '/images/products/jax.png',
          price: '1,360.00',
          salePrice: null
        },
        {
          id: 3,
          name: 'jax',
          image: '/images/products/beanie.png',
          price: '1,360.00',
          salePrice: null
        },
        {
          id: 4,
          name: 'MTX-RC Set',
          image: '/images/products/jax.png',
          price: '1,360.00',
          salePrice: null
        },
        {
          id: 5,
          name: 'jax',
          image: '/images/products/jax.png',
          price: '1,360.00',
          salePrice: null
        },
        {
          id: 6,
          name: 'Beanie',
          image: '/images/products/beanie.png',
          price: '1,360.00',
          salePrice: null
        },
        {
          id: 7,
          name: 'Beanie',
          image: '/images/products/jax.png',
          price: '1,950.00',
          salePrice: '1,590.00'
        },
        {
          id: 8,
          name: 'jax',
          image: '/images/products/beanie.png',
          price: '1,360.00',
          salePrice: null
        },
        {
          id: 9,
          name: 'Black Pearl - 2 Pieces - Longjohn - 2mm',
          image: '/images/products/jax.png',
          price: '1,360.00',
          salePrice: null
        }
      ]
    }
  }
}
</script>