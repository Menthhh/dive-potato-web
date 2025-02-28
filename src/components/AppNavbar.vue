<template>
  <nav class="bg-primary ">
    <div class="container mx-auto flex items-center justify-between px-6 py-4">
    
      <!-- Logo -->
      <div class="logo hover:cursor-pointer">
        <img src="../assets/logo.png" alt="Logo" class="h-10">
      </div>

      <!-- Navigation Links -->
      <ul class="flex space-x-6 text-black text-sm font-thin">
        <li><router-link to="/" class="hover:underline">HOME</router-link></li>
        <li><router-link to="/about" class="hover:underline">ABOUT US</router-link></li>
        <li><router-link to="/courses" class="hover:underline">COURSE</router-link></li>
        <li><router-link to="/trips" class="hover:underline">TRIP</router-link></li>
        <li><router-link to="/blog" class="hover:underline">KNOWLEDGE & BLOG</router-link></li>
        <li><router-link to="/equipments" class="hover:underline">EQUIPMENT</router-link></li>
        <li><router-link to="/contact" class="hover:underline">CONTACT US</router-link></li>
      </ul>

      <!-- Right-side Actions -->
      <div class="flex items-center space-x-6">
        <span class="text-xl cursor-pointer text-black">
          <img src="../assets/search.png" alt="Logo" class="size-5">
        </span>
        <span class="text-black">
          <a href="/login" class="hover:underline">Login</a> |
          <a href="/signup" class="hover:underline">Create Account</a>
        </span>
        <span class="text-xl cursor-pointer text-black">
          <img src="../assets/cart.png" alt="Logo" class="size-5">
        </span>

        <!-- Language Toggle -->
        <span class="flex cursor-pointer font-thin text-gray-500 ">
          <span @click="changeLanguage('ENG')" :class="{ 'text-black': selectedLanguage === 'ENG' }" class="mr-2 hover:underline">ENG</span>
          <p class="text-black">|</p>
          <span @click="changeLanguage('THA')" :class="{ 'text-black': selectedLanguage === 'THA' }" class="ml-2 hover:underline">THA</span>
        </span>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: 'ENG',  // Default language
    };
  },
  methods: {
    changeLanguage(language) {
      this.selectedLanguage = language;
      // Here you can also implement logic to switch content or store language selection in localStorage
    }
  }
};
</script>

<style scoped>
.size-5 {
  width: 20px;
  height: 20px;
}
</style>
