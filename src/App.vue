<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    <main class="flex-grow" style="min-height: 110vh;">
      <keep-alive>
        <router-view />
      </keep-alive>
    </main>
    <footer class="bg-black text-white text-center py-20 ">
      <div class="container mx-auto px-10 text-sm">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Social Media Section -->
                <div class="text-center md:text-left">
                    <h3 class="text-lg font-medium mb-4">Follow us!</h3>
                    <div class="flex justify-center md:justify-start space-x-4">
                        <a href="#" class="bg-white text-black p-2 rounded-full w-10 h-10 flex items-center justify-center">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="bg-white text-black p-2 rounded-full w-10 h-10 flex items-center justify-center">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="bg-white text-black p-2 rounded-full w-10 h-10 flex items-center justify-center">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Address Section -->
                <div class="text-center md:text-left">
                    <h3 class="text-lg font-medium mb-4">Address</h3>
                    <p class="mb-1">Dive Potato Co., Ltd.</p>
                    <p class="mb-1">141 Prasertmanukii Road, Ladprao</p>
                    <p class="mb-1">Jorakaebus Bangkok 10230</p>
                </div>
                
                <!-- Contact Section -->
                <div class="text-center md:text-left">
                    <h3 class="text-lg font-medium mb-4">Contact</h3>
                    <p class="mb-1">Mobile: (+66)65-395-6496</p>
                    <p class="mb-1">LINE ID: @divepotato</p>
                    <p class="mb-1">E-Mail: info@divepotato.com</p>
                    <p class="mb-1">Office Hours: Mon "Close"</p>
                    <p class="mb-1">Tue - Sun 10:00 - 19:00</p>
                </div>
            </div>
            
            <!-- Copyright Section -->
            <div class="mt-8 text-center md:text-left">
                <p>Copyright © 2020 by Dive Potato Co., Ltd.</p>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: {
    AppNavbar
  }
};
</script>