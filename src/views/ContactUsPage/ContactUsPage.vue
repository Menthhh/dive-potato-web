<!-- src/views/ContactUs.vue -->
<template>
  <div class="relative min-h-screen flex flex-col items-center content-center">
    <!-- Full underwater background image -->
    <div class="absolute inset-0 z-0">
      <img src="/images/contact/underwater-bg.png" alt="Underwater scene with divers" class="w-full object-cover" />
    </div>

    <!-- Content overlay -->
    <div class="relative z-10 container mx-auto py-16 ">
      <!-- Contact Us Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-yellow-400 mb-2">CONTACT US</h1>
        <h2 class="text-4xl font-semibold text-white">ติดต่อเรา</h2>
      </div>

      <!-- Contact Information Grid -->
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 ">
        <!-- Address Section -->
        <div class="flex items-start">
          <div class="flex-shrink-0 bg-yellow-400 rounded-full p-4 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-white text-xl font-semibold mb-2">Address</h3>
            <p class="text-white">143 Prasertmanukit Road, Ladprao</p>
            <p class="text-white">Jarakeibua Bankok 10230</p>
            <a href="#" class="text-yellow-400 inline-flex items-center mt-2">
              Google map
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Phone Section -->
        <div class="flex items-start">
          <div class="flex-shrink-0 bg-yellow-400 rounded-full p-4 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 class="text-white text-xl font-semibold mb-2">Phone number</h3>
            <p class="text-white">(+66)65-395-6496</p>
          </div>
        </div>

        <!-- Email Section -->
        <div class="flex items-start">
          <div class="flex-shrink-0 bg-yellow-400 rounded-full p-4 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 class="text-white text-xl font-semibold mb-2">Email</h3>
            <p class="text-white">info@divepotato.com</p>
          </div>
        </div>

        <!-- Line Section -->
        <div class="flex items-start">
          <div class="flex-shrink-0 bg-yellow-400 rounded-full p-4 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19.365 9.89c.5 0 .9.4.9.9 0 .5-.4.9-.9.9H17.07v1.55h2.295c.5 0 .9.4.9.9 0 .5-.4.9-.9.9H16.17c-.5 0-.9-.4-.9-.9V9.89c0-.5.4-.9.9-.9h3.195zm-6.42 5.25c.5 0 .9-.4.9-.9V9.89c0-.5-.4-.9-.9-.9s-.9.4-.9.9v4.35c0 .5.4.9.9.9zm-3.195 0c.5 0 .9-.4.9-.9v-1.55h1.395c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H9.75v-.9h1.395c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H8.85c-.5 0-.9.4-.9.9v5.25c0 .5.4.9.9.9h.9zm-4.5 0c.495 0 .9-.4.9-.9V9.89c0-.5-.405-.9-.9-.9s-.9.4-.9.9v4.35c0 .5.405.9.9.9z" />
              <path
                d="M12 1.5C5.925 1.5 1.5 5.925 1.5 12S5.925 22.5 12 22.5 22.5 18.075 22.5 12 18.075 1.5 12 1.5zM6.75 14.55c-.795 0-1.425-.63-1.425-1.425V9.375c0-.795.63-1.425 1.425-1.425h10.5c.795 0 1.425.63 1.425 1.425v3.75c0 .795-.63 1.425-1.425 1.425h-10.5z" />
            </svg>
          </div>
          <div>
            <h3 class="text-white text-xl font-semibold mb-2">Line</h3>
            <p class="text-white">@divepotato</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Follow Us Section - Positioned at the bottom with underwater background visible -->
    <div class="relative z-10 pb-16 mt-16">
      <div class="text-center">
        <h3 class="text-3xl font-bold text-white mb-8">FOLLOW US</h3>
        <div class="flex justify-center space-x-8">
          <a href="#" class="bg-yellow-400 rounded-full p-4 hover:bg-yellow-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-900" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9 21.59 18.03 20.37 19.58 18.57C21.13 16.77 21.98 14.48 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
            </svg>
          </a>
          <a href="#" class="bg-yellow-400 rounded-full p-4 hover:bg-yellow-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-900" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7Z" />
            </svg>
          </a>
          <a href="#" class="bg-yellow-400 rounded-full p-4 hover:bg-yellow-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-900" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
          <a href="#" class="bg-yellow-400 rounded-full p-4 hover:bg-yellow-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-900" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style>
/* Additional custom styles can be added here */
</style>