<!-- src/views/BlogPage.vue -->
<template>
    <div class="bg-white">
      <!-- Breadcrumb Navigation -->
      <div class="container mx-auto px-4 py-2">
        <div class="flex items-center text-sm text-gray-500">
          <router-link to="/" class="hover:text-gray-700">HOME</router-link>
          <span class="mx-2">›</span>
          <span>BLOG</span>
        </div>
      </div>
  
      <!-- Page Title -->
      <div class="container mx-auto px-4 text-center py-8">
        <h1 class="text-2xl font-bold">Blog</h1>
      </div>
  
      <!-- Blog Grid -->
      <div class="container mx-auto px-4 mb-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <!-- First row of blog posts -->
          <div 
            v-for="(post, index) in blogPosts.slice(0, 4)" 
            :key="index" 
            class="flex flex-col mb-6 group transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 bg-white"
          >
            <!-- Blog Image -->
            <div class="mb-3 overflow-hidden">
              <img 
                :src="post.image" 
                :alt="post.title" 
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <!-- Blog Title -->
            <h2 class="text-base font-medium text-center mb-2 px-3 group-hover:text-yellow-500 transition-colors">{{ post.title }}</h2>
            
            <!-- Blog Excerpt -->
            <p class="text-sm text-gray-600 text-center mb-2 px-3">{{ post.excerpt }}</p>
            
            <!-- Read More Link -->
            <div class="text-center mt-auto mb-4">
              <router-link 
                :to="{ name: 'BlogDetail', params: { id: post.id }}" 
                class="text-sm uppercase font-medium text-yellow-500 hover:text-yellow-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all group-hover:after:w-full"
              >
                Read More
              </router-link>
            </div>
          </div>
  
          <!-- Second row of blog posts -->
          <div 
            v-for="(post, index) in blogPosts.slice(4, 8)" 
            :key="index + 4" 
            class="flex flex-col mb-6 group transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 bg-white"
          >
            <!-- Blog Image -->
            <div class="mb-3 overflow-hidden">
              <img 
                :src="post.image" 
                :alt="post.title" 
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <!-- Blog Title -->
            <h2 class="text-base font-medium text-center mb-2 px-3 group-hover:text-yellow-500 transition-colors">{{ post.title }}</h2>
            
            <!-- Blog Excerpt -->
            <p class="text-sm text-gray-600 text-center mb-2 px-3">{{ post.excerpt }}</p>
            
            <!-- Read More Link -->
            <div class="text-center mt-auto mb-4">
              <router-link 
                :to="{ name: 'BlogDetail', params: { id: post.id }}" 
                class="text-sm uppercase font-medium text-yellow-500 hover:text-yellow-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all group-hover:after:w-full"
              >
                Read More
              </router-link>
            </div>
          </div>
  
          <!-- Third row of blog posts -->
          <div 
            v-for="(post, index) in blogPosts.slice(8, 12)" 
            :key="index + 8" 
            class="flex flex-col mb-6 group transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 bg-white"
          >
            <!-- Blog Image -->
            <div class="mb-3 overflow-hidden">
              <img 
                :src="post.image" 
                :alt="post.title" 
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <!-- Blog Title -->
            <h2 class="text-base font-medium text-center mb-2 px-3 group-hover:text-yellow-500 transition-colors">{{ post.title }}</h2>
            
            <!-- Blog Excerpt -->
            <p class="text-sm text-gray-600 text-center mb-2 px-3">{{ post.excerpt }}</p>
            
            <!-- Read More Link -->
            <div class="text-center mt-auto mb-4">
              <a 
                href="#" 
                class="text-sm uppercase font-medium text-yellow-500 hover:text-yellow-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all group-hover:after:w-full"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
  
        <!-- See More Button -->
        <div class="text-center mt-10">
          <button class="border border-gray-400 px-10 py-2 text-sm hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-colors duration-300">
            SEE MORE
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogPage',
    data() {
      return {
        blogPosts: [
          {
            id: 1,
            title: 'Open water dive',
            image: '/images/blog/dive.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          },
          {
            id: 2,
            title: 'Title Lorem ipsum dolor sit amet consectetur',
            image: '/images/blog/shore.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          },
          {
            id: 3,
            title: 'Title Lorem ipsum dolor sit amet consectetur',
            image: '/images/blog/divers.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          },
          {
            id: 4,
            title: 'Title Lorem ipsum dolor sit amet consectetur',
            image: '/images/blog/diver.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          },
          {
            id: 5,
            title: 'Title Lorem ipsum dolor sit amet consectetur',
            image: '/images/blog/diver.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          },
          {
            id: 6,
            title: 'Title Lorem ipsum dolor sit amet consectetur',
            image: '/images/blog/divers.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          },
          {
            id: 7,
            title: 'Title Lorem ipsum dolor sit amet consectetur',
            image: '/images/blog/shore.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          },
          {
            id: 8,
            title: 'Title Lorem ipsum dolor sit amet consectetur',
            image: '/images/blog/dive.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          },
          {
            id: 9,
            title: 'Title Lorem ipsum dolor sit amet consectetur',
            image: '/images/blog/dive.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          },
          {
            id: 10,
            title: 'Title Lorem ipsum dolor sit amet consectetur',
            image: '/images/blog/shore.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          },
          {
            id: 11,
            title: 'Title Lorem ipsum dolor sit amet consectetur',
            image: '/images/blog/divers.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          },
          {
            id: 12,
            title: 'Title Lorem ipsum dolor sit amet consectetur',
            image: '/images/blog/diver.png',
            excerpt: 'Lorem ipsum dolor sit amet consectetur. Leo sed lobortis odio ligula tellus justo tellus...'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optional: Add any custom styles here */
  </style>