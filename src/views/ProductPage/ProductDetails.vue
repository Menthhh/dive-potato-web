<!-- src/views/ProductDetail.vue -->
<template>
  <div class="bg-white">
    <!-- Breadcrumb Navigation -->
    <div class="container mx-auto px-4 py-2">
      <div class="flex items-center text-sm text-gray-500">
        <router-link to="/" class="hover:text-gray-700">HOME</router-link>
        <span class="mx-2">›</span>
        <router-link to="/equipments" class="hover:text-gray-700">PRODUCT</router-link>

      </div>
    </div>

    <!-- Product Content Section -->
    <div class="container mx-auto px-4 py-4 max-w-6xl">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Thumbnail Images - Left -->
        <div class="hidden md:block md:w-16 space-y-2">
          <div v-for="(thumbnail, index) in product.thumbnails" :key="index"
            class="border cursor-pointer hover:border-yellow-500"
            :class="{ 'border-yellow-500': selectedThumbnail === index }" @click="selectedThumbnail = index">
            <img :src="thumbnail" :alt="`Thumbnail ${index + 1}`" class="w-full h-auto" />
          </div>
        </div>

        <!-- Main Product Image - Middle -->
        <div class="md:w-1/2 mb-6 md:mb-0">
          <img :src="product.image" :alt="product.name" class="w-full h-auto" />
        </div>

        <!-- Product Details - Right -->
        <div class="md:w-2/5">
          <!-- Product Name -->
          <h1 class="text-xl font-bold uppercase mb-2">{{ product.name }}</h1>

          <!-- Product Price -->
          <p class="text-lg font-medium mb-6">{{ product.price }} ฿</p>

          <hr class="my-4">

          <!-- Color Selection -->
          <div class="mb-5">
            <label class="block mb-2">Color</label>
            <div class="relative">
              <select class="w-full p-2 border appearance-none pr-8 bg-white">
                <option>Blue</option>
                <option>Black</option>
                <option>Red</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Size Selection -->
          <div class="mb-5">
            <label class="block mb-2">Size</label>
            <div class="flex space-x-2">
              <button v-for="size in product.sizes" :key="size"
                class="w-10 h-10 flex items-center justify-center border"
                :class="size === selectedSize ? 'border-black font-medium' : 'border-gray-300 text-gray-600'"
                @click="selectedSize = size">
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Quantity Selection -->
          <div class="mb-5">
            <div class="flex items-center">
              <button class="border border-gray-300 w-8 h-8 flex items-center justify-center"
                @click="decrementQuantity">
                -
              </button>
              <input type="text" v-model="quantity" class="border-t border-b border-gray-300 w-10 h-8 text-center" />
              <button class="border border-gray-300 w-8 h-8 flex items-center justify-center"
                @click="incrementQuantity">
                +
              </button>
              <span class="ml-4 text-sm text-gray-600">Only {{ product.stock }} Remaining</span>
            </div>
          </div>

          <!-- Add to Cart Button & Wishlist -->
          <div class="flex mb-8">
            <button
              class="bg-black text-white py-2 px-4 w-full mr-2 hover:bg-gray-800 transition-colors uppercase text-sm font-medium">
              Add to cart
            </button>
            <button class="border border-gray-300 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          <!-- Product Description -->
          <div>
            <h2 class="font-bold mb-3">Product Description</h2>
            <div class="text-sm text-gray-700 space-y-4">
              <p>
                Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada
                consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio. Lectus
                imperdiet pharetra vitae mi venenatis a egestas egestas vitae. Morbi natoque sit vulputate pulvinar
                tellus odio pharetra nunc pellentesque.
              </p>
              <p>
                Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt
                sed quam nibh et nibh. Netus leo ultricies commodo diam. Ut vestibulum molestie amet scelerisque
                pellentesque iaculis consequat. Amet consectetur proin tellus sit enim. Risus adipiscing et risus
                consectetur vestibulum mattis. Tristique sapien sagittis enim quisque urna quis est. Enim aliquam mauris
                sit libero mauris eu hendrerit nibh. Tortor sit quam magna libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      selectedThumbnail: 0,
      selectedSize: 'S',
      quantity: 1,
      product: {
        id: 1,
        name: 'BEANIE',
        price: '1,590.00',
        image: '/images/products/beanie.png',
        thumbnails: [
          '/images/products/beanie.png',
          '/images/products/beanie.png',
          '/images/products/beanie.png',
          '/images/products/beanie.png',
          '/images/products/beanie.png'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 5,
        description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio.'
      }
    }
  },
  methods: {
    incrementQuantity() {
      if (this.quantity < this.product.stock) {
        this.quantity++;
      }
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }
  }
}
</script>