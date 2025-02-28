<template>
    <div class="beginner-banner flex items-center content-center h-[300px] relative overflow-hidden mx-20">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="/unnder-fish.png" 
          alt="Underwater scene with fish" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-center">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-center">
            <!-- Text -->
            <div class="text-left">
              <h2 class="text-4xl font-bold">
                <span class="text-yellow-400">FOR</span>
                <span class="text-white ml-4">BEGINNER</span>
              </h2>
            </div>
            
            <!-- Button -->
            <div>
              <a 
                href="#" 
                class="px-6 py-3 border-2 border-white text-white hover:bg-white hover:bg-opacity-20 transition duration-300 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BeginnerBanner'
  }
  </script>
  
  <style scoped>
  .beginner-banner {
    background-color: rgba(0, 65, 130, 0.5); /* Fallback blue color */
  }
  
  /* Optional: Add a subtle gradient overlay */
  .beginner-banner::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(0,43,89,0.3) 0%, rgba(0,54,112,0) 100%);
    pointer-events: none;
  }
  </style>