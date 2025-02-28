<template>
    <div class="relative w-full h-[500px]">
      <div class="slider-container w-full h-full flex overflow-hidden">
        <!-- Left (previous) image - narrower side panel -->
        <div class="side-panel h-full border-r border-white" style="width: 10%">
          <img
            :src="getPrevImage()"
            alt="Previous Slide"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Center (current) image - wide center panel -->
        <div class="center-panel h-full border-r border-white" style="width: 80%">
          <img
            :src="images[currentIndex]"
            alt="Current Slide"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Right (next) image - narrower side panel -->
        <div class="side-panel h-full" style="width: 10%">
          <img
            :src="getNextImage()"
            alt="Next Slide"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <!-- Thumbnails Row at Bottom -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        <div 
          v-for="(image, index) in images" 
          :key="`thumb-${index}`"
          @click="goToSlide(index)"
          class="cursor-pointer transition-all duration-300 overflow-hidden"
          :class="[
            index === currentIndex 
              ? 'border-2 border-white w-20 h-16' 
              : 'border border-gray-400 w-16 h-12 opacity-70'
          ]"
        >
          <img :src="image" alt="Thumbnail" class="w-full h-full object-cover" />
        </div>
      </div>
      
      <!-- Navigation Buttons -->
      <button
        @click="prevSlide"
        class="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full transition-all z-30"
      >
        &#10094;
      </button>
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full transition-all z-30"
      >
        &#10095;
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        images: [
          '/banner01.png',
          '/banner02.png',
          '/banner03.png',
        ],
        autoplayInterval: null,
      };
    },
    mounted() {
      // Optional: Start autoplay
      this.startAutoplay();
    },
    beforeUnmount() {
      this.stopAutoplay();
    },
    methods: {
      getPrevImage() {
        const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        return this.images[prevIndex];
      },
      getNextImage() {
        const nextIndex = (this.currentIndex + 1) % this.images.length;
        return this.images[nextIndex];
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      goToSlide(index) {
        this.currentIndex = index;
      },
      startAutoplay() {
        this.autoplayInterval = setInterval(() => {
          this.nextSlide();
        }, 5000); // Change slide every 5 seconds
      },
      stopAutoplay() {
        if (this.autoplayInterval) {
          clearInterval(this.autoplayInterval);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container styling */
  .slider-container {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  /* Panel styling */
  .center-panel {
    flex-shrink: 0;
    transition: all 0.5s ease;
  }
  
  .side-panel {
    flex-shrink: 0;
    overflow: hidden;
    transition: all 0.5s ease;
  }
  
  /* Make sure images maintain proper scaling */
  img {
    transition: all 0.3s ease;
  }
  
  /* Optional: Add animations and transitions */
  .slide-enter-active, .slide-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .slide-enter-from, .slide-leave-to {
    opacity: 0;
  }
  </style>