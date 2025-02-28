<template>
  <div v-if="destination" class="bg-white max-w-6xl mx-auto py-5">
    <div class="container mx-auto px-4 py-2">
      <div class="flex items-center text-sm text-gray-500">
        <router-link to="/" class="hover:text-gray-700">HOME</router-link>
        <span class="mx-2">›</span>
        <router-link to="/trips" class="hover:text-gray-700">TRIP</router-link>

      </div>
    </div>
    <!-- Destination Title -->
    <div class="container mx-auto px-4 text-center py-6">
      <h1 class="text-3xl  uppercase">{{ destination.name }}</h1>
    </div>

    <!-- Main Hero Image -->
    <div class="container mx-auto px-4 mb-6">
      <img :src="destination.image" :alt="destination.name"
        class="w-full h-80 object-cover transition-transform duration-300 transform hover:scale-105" />
    </div>

    <!-- Thumbnail Gallery -->
    <div class="container mx-auto px-4 mb-10">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="(photo, index) in thumbnails" :key="index" class="overflow-hidden">
          <img :src="photo" :alt="`${destination.name} thumbnail ${index + 1}`"
            class="w-full h-24 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
        </div>
      </div>
    </div>

    <!-- Destination Description -->
    <div class="container mx-auto px-4 mb-12">
      <p class="text-base leading-relaxed mb-6">
        {{ destination.description }}
      </p>
      <p class="text-base leading-relaxed mb-6">
        Lorem ipsum dolor sit amet consectetur. Amet aliquam quis commodo pulvinar. Ante dolor malesuada id consectetur.
        Tincidunt orci odio volutpat hendrerit amet nunc. Amet lectus volutpat etiam nibh risus libero. Massa proin sit
        leo sit quam vitae sed turpis dis. Convallis sit volutpat fringilla id. Pretium parturient lorem eu auctor nisl.
        Bibendum sapien pulvinar porta vitae quam etiam sodales. Turpis quisque condimentum ut tincidunt lorem
        malesuada.
      </p>
      <p class="text-base leading-relaxed">
        Consequat turpis quam accumsan tristique eu ullamcorper habitant posuere. Ante nulla amet neque tincidunt et
        volutpat in a. Ut rhoncus fringilla vestibulum sem condimentum. Consectetur rhoncus vitae imperdiet vitae purus
        nulla morbi. Pellentesque et habitant id mi sapien gravida.
      </p>
    </div>

    <!-- Room Options -->
    <div class="container mx-auto px-4 mb-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Standard Room 1 -->
        <div class="flex flex-col">
          <div class="mb-4">
            <img src="/images/raja-room/room1.png" alt="Standard Room"
              class="w-full h-32 object-cover hover:scale-105 transition-transform" />
          </div>
          <h3 class="text-lg font-normal text-yellow-500 mb-2">Standard Room</h3>
          <p class="text-lg font-bold mb-3">2,820 USD</p>
          <p class="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Mollis quis lobortis bibendum ultrices. Id pharetra sit ac ipsum
            eleifend. Sit sit venenatis senectus.
          </p>
        </div>

        <!-- Standard Room 2 -->
        <div class="flex flex-col">
          <div class="mb-4">
            <img src="/images/raja-room/room2.png" alt="Standard Room"
              class="w-full h-32 object-cover hover:scale-105 transition-transform" />
          </div>
          <h3 class="text-lg font-normal text-yellow-500 mb-2">Standard Room</h3>
          <p class="text-lg font-bold mb-3">2,820 USD</p>
          <p class="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Mollis quis lobortis bibendum ultrices. Id pharetra sit ac ipsum
            eleifend. Sit sit venenatis senectus.
          </p>
        </div>

        <!-- Suite Room -->
        <div class="flex flex-col">
          <div class="mb-4">
            <img src="/images/raja-room/room3.png" alt="Suite Room"
              class="w-full h-32 object-cover hover:scale-105 transition-transform" />
          </div>
          <h3 class="text-lg font-normal text-yellow-500 mb-2">Suite Room</h3>
          <p class="text-lg font-bold mb-3">3,280 USD</p>
          <p class="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Mollis quis lobortis bibendum ultrices. Id pharetra sit ac ipsum
            eleifend. Sit sit venenatis senectus.
          </p>
        </div>
      </div>
    </div>

  </div>
  <div v-else class="container mx-auto px-4 py-16 text-center">
    <p class="text-xl">Loading destination...</p>
  </div>
</template>

<script>
export default {
  name: 'DestinationDetails',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      destination: null,
      destinations: [
        {
          id: 1,
          name: 'RAJA AMPAT MISOOL',
          image: '/images/raja-room/photo1.png',
          description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
        },
        {
          id: 2,
          name: 'KOH LOREM IPSUM',
          image: '/images/raja-room/photo2.png',
          description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
        },
        {
          id: 3,
          name: 'KOH LOREM IPSUM',
          image: '/images/raja-room/photo3.png',
          description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
        },
        {
          id: 4,
          name: 'KOH LOREM IPSUM',
          image: '/images/raja-room/photo4.png',
          description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
        },
        {
          id: 5,
          name: 'KOH LOREM IPSUM',
          image: '/images/raja-room/photo5.png',
          description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
        }
      ],
      thumbnails: []
    }
  },
  methods: {
    getImageUrl(imageName) {
      return imageName; // Use the direct path now since we're using absolute paths
    }
  },
  created() {
    // Find the destination that matches the ID from the route
    this.destination = this.destinations.find(dest => dest.id === parseInt(this.id));

    // If destination doesn't exist, you could redirect to a 404 page
    if (!this.destination) {
      // this.$router.push('/404');
      console.error('Destination not found');
    } else {
      // Generate thumbnail image paths based on your file structure
      this.thumbnails = [
        '/images/raja-room/photo1.png',
        '/images/raja-room/photo2.png',
        '/images/raja-room/photo3.png',
        '/images/raja-room/photo4.png'
      ];
    }
  }
}
</script>