<!-- src/views/BlogDetail.vue -->
<template>
  <div class="bg-white">
    <!-- Breadcrumb Navigation -->
    <div class="container mx-auto px-4 py-2">
      <div class="flex items-center text-sm text-gray-500">
        <router-link to="/" class="hover:text-gray-700">HOME</router-link>
        <span class="mx-2">›</span>
        <router-link to="/blog" class="hover:text-gray-700">BLOG</router-link>
      </div>
    </div>

    <!-- Blog Content -->
    <div class="container mx-auto px-4 py-8 max-w-5xl">
      <!-- Blog Title -->
      <h1 class="text-3xl font-bold mb-2">{{ blog.title }}</h1>
      
      <!-- Date and Social Share -->
      <div class="flex justify-between items-center mb-6">
        <div class="text-sm text-gray-500">{{ formatDate(blog.date) }}</div>
        <div class="flex space-x-2">
          <a href="#" class="p-1 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
            </svg>
          </a>
          <a href="#" class="p-1 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
            </svg>
          </a>
          <a href="#" class="p-1 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
            </svg>
          </a>
          <a href="#" class="p-1 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
          <a href="#" class="p-1 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- First section: Image left, text right -->
      <div class="flex flex-col md:flex-row gap-8 mb-12">
        <div class="md:w-1/2">
          <img :src="blog.images[0]" :alt="blog.title" class="w-full h-auto rounded-md" />
        </div>
        <div class="md:w-1/2 prose">
          <p>{{ blog.content.paragraph1 }}</p>
          <p>{{ blog.content.paragraph2 }}</p>
        </div>
      </div>

      <!-- Second section: Text left, image right -->
      <div class="flex flex-col md:flex-row-reverse gap-8 mb-12">
        <div class="md:w-1/2">
          <img :src="blog.images[1]" :alt="blog.title" class="w-full h-auto rounded-md" />
        </div>
        <div class="md:w-1/2 prose">
          <p>{{ blog.content.paragraph3 }}</p>
          <p>{{ blog.content.paragraph4 }}</p>
        </div>
      </div>

      <!-- Final Text Content (optional) -->
      <div class="prose max-w-none mb-8">
        <p>{{ blog.content.paragraph5 }}</p>
        <p>{{ blog.content.paragraph6 }}</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'BlogDetail',
  props: ['id'],
  data() {
    return {
      blog: null,
      // Base mock data that will be used as fallback
      baseMockData: {
        title: 'Open water dive',
        date: '2023-12-12',
        images: [
          '/images/blog/dive-detail-1.png',
          '/images/blog/dive-detail-2.png'
        ],
        content: {
          paragraph1: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio. Lectus imperdiet pharetra vitae mi venenatis a egestas egestas vitae. Morbi natoque sit vulputate pulvinar tellus odio pharetra nunc pellentesque.',
          paragraph2: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam. Ut vestibulum molestie amet scelerisque pellentesque iaculis consequat. Amet consectetur proin tellus sit enim. Risus adipiscing et risus consectetur vestibulum mattis. Tristique sapien sagittis enim quisque urna quis est. Enim aliquam mauris sit libero mauris eu hendrerit nibh. Tortor sit quam magna libero.',
          paragraph3: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio. Lectus imperdiet pharetra vitae mi venenatis a egestas egestas vitae. Morbi natoque sit vulputate pulvinar tellus odio pharetra nunc pellentesque.',
          paragraph4: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam. Ut vestibulum molestie amet scelerisque pellentesque iaculis consequat. Amet consectetur proin tellus sit enim. Risus adipiscing et risus consectetur vestibulum mattis. Tristique sapien sagittis enim quisque urna quis est. Enim aliquam mauris sit libero mauris eu hendrerit nibh. Tortor sit quam magna libero.',
          paragraph5: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio. Lectus imperdiet pharetra vitae mi venenatis a egestas egestas vitae. Morbi natoque sit vulputate pulvinar tellus odio pharetra nunc pellentesque.',
          paragraph6: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam. Ut vestibulum molestie amet scelerisque pellentesque iaculis consequat. Amet consectetur proin tellus sit enim. Risus adipiscing et risus consectetur vestibulum mattis. Tristique sapien sagittis enim quisque urna quis est. Enim aliquam mauris sit libero mauris eu hendrerit nibh. Tortor sit quam magna libero.'
        }
      },
      // Known blog posts with specific content
      blogPosts: {
        1: {
          title: 'Open water dive',
          date: '2023-12-12',
          images: [
            '/images/blog/dive-detail-1.png',
            '/images/blog/dive-detail-2.png'
          ],
          content: {
            paragraph1: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio. Lectus imperdiet pharetra vitae mi venenatis a egestas egestas vitae. Morbi natoque sit vulputate pulvinar tellus odio pharetra nunc pellentesque.',
            paragraph2: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam. Ut vestibulum molestie amet scelerisque pellentesque iaculis consequat. Amet consectetur proin tellus sit enim. Risus adipiscing et risus consectetur vestibulum mattis. Tristique sapien sagittis enim quisque urna quis est. Enim aliquam mauris sit libero mauris eu hendrerit nibh. Tortor sit quam magna libero.',
            paragraph3: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio. Lectus imperdiet pharetra vitae mi venenatis a egestas egestas vitae. Morbi natoque sit vulputate pulvinar tellus odio pharetra nunc pellentesque.',
            paragraph4: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam. Ut vestibulum molestie amet scelerisque pellentesque iaculis consequat. Amet consectetur proin tellus sit enim. Risus adipiscing et risus consectetur vestibulum mattis. Tristique sapien sagittis enim quisque urna quis est. Enim aliquam mauris sit libero mauris eu hendrerit nibh. Tortor sit quam magna libero.',
            paragraph5: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio. Lectus imperdiet pharetra vitae mi venenatis a egestas egestas vitae. Morbi natoque sit vulputate pulvinar tellus odio pharetra nunc pellentesque.',
            paragraph6: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam. Ut vestibulum molestie amet scelerisque pellentesque iaculis consequat. Amet consectetur proin tellus sit enim. Risus adipiscing et risus consectetur vestibulum mattis. Tristique sapien sagittis enim quisque urna quis est. Enim aliquam mauris sit libero mauris eu hendrerit nibh. Tortor sit quam magna libero.'
          }
        },
        2: {
          title: 'Underwater Photography Basics',
          date: '2024-01-15',
          images: [
            '/images/blog/shore.png',
            '/images/blog/divers.png'
          ],
          content: {
            paragraph1: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio. Lectus imperdiet pharetra vitae mi venenatis a egestas egestas vitae.',
            paragraph2: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam. Ut vestibulum molestie amet scelerisque pellentesque iaculis consequat.',
            paragraph3: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio.',
            paragraph4: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam.',
            paragraph5: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio.',
            paragraph6: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam.'
          }
        },
        3: {
          title: 'Coral Reef Conservation',
          date: '2024-02-20',
          images: [
            '/images/blog/divers.png',
            '/images/blog/dive.png'
          ],
          content: {
            paragraph1: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio.',
            paragraph2: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam.',
            paragraph3: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio.',
            paragraph4: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam.',
            paragraph5: 'Lorem ipsum dolor sit amet consectetur. Vestibulum diam convallis leo habitant massa malesuada consectetur blandit nec. Non luctus est imperdiet pulvinar augue urna senectus sollicitudin odio.',
            paragraph6: 'Quisque nunc nisl natoque purus. Volutpat nibh arcu pharetra at aliquet. Aenean vestibulum leo tincidunt sed quam nibh et nibh. Netus leo ultricies commodo diam.'
          }
        }
      },
      // Map of image sources for unknown IDs
      imageVariations: [
        ['/images/blog/dive.png', '/images/blog/shore.png'],
        ['/images/blog/divers.png', '/images/blog/diver.png'],
        ['/images/blog/shore.png', '/images/blog/dive.png'],
        ['/images/blog/diver.png', '/images/blog/divers.png']
      ],
      // Title variations for unknown IDs
      titleVariations: [
        'Exploring the Deep Blue',
        'Advanced Diving Techniques',
        'Marine Life Encounters',
        'Night Diving Adventures',
        'Wreck Diving Expeditions',
        'Drift Diving Essentials',
        'Underwater Navigation Skills',
        'Dive Safety Procedures',
        'Equipment Maintenance Tips',
        'Best Diving Spots in Thailand'
      ]
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
      });
    },
    fetchBlogPost() {
      // Parse the ID from props
      const id = parseInt(this.id, 10);
      
      // Check if we have a predefined blog post for this ID
      if (this.blogPosts[id]) {
        this.blog = this.blogPosts[id];
      } else {
        // For unknown IDs, generate dynamic content based on the ID
        // This ensures we always have something to display
        
        // Create a deterministic but seemingly random variation for this ID
        const randomSeed = id % 10;
        
        // Create a new blog object using the base mock data as a template
        this.blog = JSON.parse(JSON.stringify(this.baseMockData));
        
        // Update with dynamic title based on ID
        this.blog.title = this.titleVariations[id % this.titleVariations.length];
        
        // Update with dynamic images based on ID
        this.blog.images = this.imageVariations[id % this.imageVariations.length];
        
        // Generate a pseudo-random date based on ID (for demonstration purposes)
        const currentDate = new Date();
        const dayOffset = (id * 7) % 30; // Different day based on ID
        const monthOffset = (id * 3) % 12; // Different month based on ID
        currentDate.setDate(currentDate.getDate() - dayOffset);
        currentDate.setMonth(currentDate.getMonth() - monthOffset);
        this.blog.date = currentDate.toISOString().split('T')[0];
      }
    }
  },
  created() {
    // Fetch the blog post when component is created
    this.fetchBlogPost();
  }
}
</script>

<style scoped>
/* Add any custom styles here */
.prose p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>