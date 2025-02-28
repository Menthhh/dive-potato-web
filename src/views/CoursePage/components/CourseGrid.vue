<template>
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="destination in destinations" 
          :key="destination.id" 
          class="flex flex-col mb-8 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-100 p-4 rounded-lg"
        >
          <div class="overflow-hidden rounded-lg">
            <img 
              :src="getImageUrl(destination.image)" 
              :alt="destination.name"
              class="w-full h-48 object-cover transition-all duration-300 transform hover:scale-110"
            />
          </div>
          <h2 class="text-lg font-bold my-4 text-gray-800 transition-colors duration-300 group-hover:text-black">{{ destination.name }}</h2>
          <p class="text-sm mb-4 text-gray-600">{{ destination.description }}</p>
          <router-link :to="'/courses/' + destination.id">
            <button 
                class="w-full border border-black py-2 px-4 mt-auto transition-colors duration-300 rounded-md hover:bg-black hover:text-white"
            >
                View
            </button>
        </router-link>


        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CourseGrid',
    methods: {
      getImageUrl(imageName) {
        // Option 1: If using public folder
        return `/images/${imageName}`;
        
        // Option 2: If using import
        // return new URL(`../assets/images/${imageName}`, import.meta.url).href;
        
        // Option 3: If images are from external source
        // return `https://your-domain.com/images/${imageName}`;
      }
    },
    data() {
      return {
        destinations: [
          {
            id: 1,
            name: 'RAJA AMPAT MISOOL',
            image: 'trip01.png',
            description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
          },
          {
            id: 2,
            name: 'KOH LOREM IPSUM',
            image: 'trip01.png',
            description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
          },
          {
            id: 3,
            name: 'KOH LOREM IPSUM',
            image: 'trip01.png',
            description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
          },
          {
            id: 4,
            name: 'KOH LOREM IPSUM',
            image: 'trip01.png',
            description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
          },
          {
            id: 5,
            name: 'KOH LOREM IPSUM',
            image: 'trip01.png',
            description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
          },
          {
            id: 6,
            name: 'RAJA AMPAT MISOOL',
            image: 'trip01.png',
            description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
          },
          {
            id: 7,
            name: 'KOH LOREM IPSUM',
            image: 'trip01.png',
            description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
          },
          {
            id: 8,
            name: 'KOH LOREM IPSUM',
            image: 'trip01.png',
            description: 'Lorem ipsum dolor sit amet consectet ur. Amet aliquam quis commodo pulv inar. Ante dolor malesuada id consec tetur. Tincidunt orci odio volutpat hen drerit amet nunc. Amet lectus volutpa etiam nibh risus libero. Massa proin'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optional: Add custom styling here if needed */
  
  /* Adding hover effects on the destination items */
  .destination-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
  
  /* Custom transition for image hover */
  img:hover {
    transform: scale(1.1);
  }
  
  /* Smooth hover effect on the button */
  button:hover {
    background-color: black;
    color: white;
    border-color: black;
  }
  </style>
  