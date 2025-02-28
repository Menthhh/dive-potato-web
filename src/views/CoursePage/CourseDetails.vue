<!-- src/views/CourseDetail.vue -->
<template>
    <div class="bg-white container mx-auto">
        <!-- Breadcrumb Navigation -->
        <div class="container mx-auto px-4 py-2">
            <div class="flex items-center text-sm text-gray-500">
                <router-link to="/" class="hover:text-gray-700">HOME</router-link>
                <span class="mx-2">›</span>
                <router-link to="/courses" class="hover:text-gray-700">COURSE</router-link>
                <span class="mx-2">›</span>
                <span>{{ course.title }}</span>
            </div>
        </div>

        <!-- Course Hero Image -->
        <div class="w-full mb-6">
            <img :src="course.heroImage" :alt="course.title" class="w-full h-64 object-cover" />
        </div>

        <!-- Course Title -->
        <div class="container mx-auto px-4 mb-4">
            <h1 class="text-2xl font-bold uppercase">{{ course.title }}</h1>
        </div>

        <!-- Course Price -->
        <div class="container mx-auto px-4 mb-4">
            <h2 class="text-xl font-bold">{{ course.price }} THB</h2>
        </div>

        <!-- Course Quick Info -->
        <div class="container mx-auto px-4 mb-6">
            <div class="space-y-2">
                <div class="flex items-start" v-for="(info, index) in course.quickInfo" :key="index">
                    <div class="w-6 mr-2">
                        <img :src="info.icon" :alt="info.label" class="w-5 h-5" />
                    </div>
                    <div>
                        <p class="text-sm">{{ info.label }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Course Details Grid -->
        <div class="container mx-auto px-4 mb-10">
            <div class="flex items-center content-center gap-36">
                <!-- Left Column: Course Image -->
                <div>
                    <img :src="course.detailImage" :alt="course.title" class="w-full h-auto object-cover" />
                </div>

                <!-- Right Column: Course Info -->
                <div>
                    <div class="space-y-8">
                        <!-- Theory -->
                        <div class="flex items-center">
                            <div class="w-8 mr-4">
                                <img src="/images/icons/theory.png" alt="Theory" class="w-6 h-6" />
                            </div>
                            <div class="w-24">
                                <p class="font-medium">Theory</p>
                            </div>
                            <div>
                                <p>{{ course.theory }}</p>
                            </div>
                        </div>

                        <!-- Pool session -->
                        <div class="flex items-center">
                            <div class="w-8 mr-4">
                                <img src="/images/icons/pool.png" alt="Pool" class="w-6 h-6" />
                            </div>
                            <div class="w-24">
                                <p class="font-medium">Pool session</p>
                            </div>
                            <div>
                                <p>{{ course.poolSession }}</p>
                            </div>
                        </div>

                        <!-- Open sea -->
                        <div class="flex items-center">
                            <div class="w-8 mr-4">
                                <img src="/images/icons/sea.png" alt="Sea" class="w-6 h-6" />
                            </div>
                            <div class="w-24">
                                <p class="font-medium">Open sea</p>
                            </div>
                            <div>
                                <p>{{ course.openSea }}</p>
                            </div>
                        </div>

                        <!-- Language -->
                        <div class="flex items-center">
                            <div class="w-8 mr-4">
                                <img src="/images/icons/language.png" alt="Language" class="w-6 h-6" />
                            </div>
                            <div class="w-24">
                                <p class="font-medium">Language</p>
                            </div>
                            <div>
                                <p>{{ course.language }}</p>
                            </div>
                        </div>

                        <!-- Location -->
                        <div class="flex items-center">
                            <div class="w-8 mr-4">
                                <img src="/images/icons/location.png" alt="Location" class="w-6 h-6" />
                            </div>
                            <div class="w-24">
                                <p class="font-medium">Location</p>
                            </div>
                            <div>
                                <p>{{ course.location }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Overview and Highlight Section -->
        <div class="container mx-auto px-4 mb-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Overview -->
                <div>
                    <h2 class="text-lg font-bold uppercase mb-4">Overview</h2>
                    <p class="text-sm">{{ course.overview }}</p>
                </div>

                <!-- Highlight -->
                <div>
                    <h2 class="text-lg font-bold uppercase mb-4">Highlight</h2>
                    <p class="text-sm">{{ course.highlight }}</p>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 mb-10">
            <h2 class="text-lg font-bold uppercase mb-6">Itinerary</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Left Column: Days 1-3 -->
                <div>
                    <!-- Day 1 -->
                    <div class="mb-8">
                        <h3 class="text-md font-medium text-yellow-500 mb-3">Day 1: THEORY</h3>
                        <div class="grid grid-cols-5 gap-2">
                            <div class="col-span-1">
                                <p class="text-sm">10:00 - 10:30</p>
                            </div>
                            <div class="col-span-4">
                                <p class="text-sm">Register</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-5 gap-2">
                            <div class="col-span-1">
                                <p class="text-sm">10:30 - 17:00</p>
                            </div>
                            <div class="col-span-4">
                                <p class="text-sm">Open Water Session 1-5 / Examination</p>
                            </div>
                        </div>
                    </div>

                    <!-- Day 2 -->
                    <div class="mb-8">
                        <h3 class="text-md font-medium text-yellow-500 mb-3">Day 2: POOL SESSION</h3>
                        <div class="grid grid-cols-5 gap-2">
                            <div class="col-span-1">
                                <p class="text-sm">10:00 - 16:30</p>
                            </div>
                            <div class="col-span-4">
                                <p class="text-sm">Session 1-3</p>
                            </div>
                        </div>
                    </div>

                    <!-- Day 3 -->
                    <div class="mb-8">
                        <h3 class="text-md font-medium text-yellow-500 mb-3">Day 3: POOL SESSION</h3>
                        <div class="grid grid-cols-5 gap-2">
                            <div class="col-span-1">
                                <p class="text-sm">10:00 - 16:30</p>
                            </div>
                            <div class="col-span-4">
                                <p class="text-sm">Session 1-3</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Days 4-5 -->
                <div>
                    <!-- Day 4 -->
                    <div class="mb-8">
                        <h3 class="text-md font-medium text-yellow-500 mb-3">Day 4: OPEN SEA</h3>
                        <div v-for="(item, index) in day4Schedule" :key="index" class="grid grid-cols-5 gap-2">
                            <div class="col-span-1">
                                <p class="text-sm">{{ item.time }}</p>
                            </div>
                            <div class="col-span-4">
                                <p class="text-sm">{{ item.activity }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Day 5 -->
                    <div class="mb-8">
                        <h3 class="text-md font-medium text-yellow-500 mb-3">Day 5: OPEN SEA</h3>
                        <div v-for="(item, index) in day5Schedule" :key="index" class="grid grid-cols-5 gap-2">
                            <div class="col-span-1">
                                <p class="text-sm">{{ item.time }}</p>
                            </div>
                            <div class="col-span-4">
                                <p class="text-sm">{{ item.activity }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Gallery -->
        <div class="container mx-auto px-4 mb-10">
            <div class="grid grid-cols-3 gap-4">
                <div v-for="(img, index) in course.gallery" :key="index" class="overflow-hidden">
                    <img :src="img" :alt="`Gallery image ${index + 1}`"
                        class="w-full h-48 object-cover hover:opacity-80 transition-opacity" />
                </div>
            </div>
        </div>

        <!-- Gallery and Price Information Section -->
        <div class="container mx-auto px-4 mb-10">
            <!-- Top Gallery Row -->
            <div class="grid grid-cols-3 gap-4 mb-4">
                <div v-for="(img, index) in course.galleryTop" :key="index" class="overflow-hidden">
                    <img :src="img" :alt="`Gallery image ${index + 1}`"
                        class="w-full h-56 object-cover hover:opacity-90 transition-opacity" />
                </div>
            </div>

            <!-- Bottom Section with Large Image and Price Details -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Large Gallery Image with Navigation -->
                <div class="relative">
                    <img :src="course.largeGalleryImage" alt="Large gallery image" class="w-full h-64 object-cover" />
                    <!-- Navigation Arrows -->
                    <button
                        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
                        <span class="text-black text-xl">‹</span>
                    </button>
                    <button
                        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
                        <span class="text-black text-xl">›</span>
                    </button>
                </div>

                <!-- Price Information -->
                <div>
                    <!-- Price Included -->
                    <div class="mb-6">
                        <h2 class="text-lg font-bold uppercase mb-4">THIS PRICE INCLUDED</h2>
                        <ol class="list-decimal pl-5 space-y-1 text-sm">
                            <li v-for="(item, index) in course.priceIncluded" :key="index">
                                {{ item }}
                            </li>
                        </ol>
                    </div>

                    <!-- Price Excluded -->
                    <div>
                        <h2 class="text-lg font-bold uppercase mb-4">THIS PRICE EXCLUDED</h2>
                        <ul class="pl-5 space-y-1 text-sm">
                            <li v-for="(item, index) in course.priceExcluded" :key="index" class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseDetail',
    data() {
        return {
            course: {
                id: 1,
                title: 'OPEN WATER DIVER COURSE',
                price: '14,500',
                heroImage: '/images/courses/open-water-hero.png',
                detailImage: '/images/courses/open-water-detail.png',
                theory: '10:00 - 17:00',
                poolSession: '10:00 - 17:00 (2 days)',
                openSea: '08:30 - 17:00 (2 days / 1 night)',
                language: 'Thai',
                location: 'Open Sea @ Sameasan, Sattahip, Chonburi',
                overview: 'Open Water - This course is the basic and beginner course. You will learn how to breath and move underwater effectively and safely. It\'s the basic skills to allow you to stay and enjoy underwater world freely',
                highlight: 'Diver learn to Underwater World Theory Underwater skill with scuba unit in the pool',
                quickInfo: [
                    {
                        icon: '/images/icons/person.png',
                        label: 'เรียน 4 คนขึ้นไป ลดเหลือ 13,500 THB / คน เรียนส่วนตัวหรือน้อยกว่านี้บวกเพิ่ม'
                    },
                    {
                        icon: '/images/icons/elearning.png',
                        label: 'E-Learning จ่ายเพิ่ม 13,500 THB'
                    }
                ],
                gallery: [
                    '/images/courses/gallery1.png',
                    '/images/courses/gallery2.png',
                    '/images/courses/gallery3.png'
                ],
                largeGalleryImage: '/images/courses/large-gallery.png',
                priceIncluded: [
                    'PADI E-card',
                    'PADI E-card / Life time certification card',
                    'Open Sea Certification 4 Dives',
                    'Open Sea Boat Service',
                    'Lunch on boat',
                    'Breakfast',
                    'Complete set of scuba diving equipment, Dive Computer included',
                    'Skilled Diving Instructor',
                    'Scuba Diving Insurance',
                    'Free Log Book',
                    'Dive Computer during class',
                    'Additional pool practice until you are confident and ready for open sea exam'
                ],
                priceExcluded: [
                    'Transportation',
                    'Accommodations'
                ]
            },
            day4Schedule: [
                { time: '8:30', activity: 'Leave from pier' },
                { time: '10:00', activity: 'Dive 1' },
                { time: '12:00', activity: 'Lunch on boat' },
                { time: '14:00', activity: 'Dive 2' },
                { time: '16:00', activity: 'Arrival pier' }
            ],
            day5Schedule: [
                { time: '8:30', activity: 'Leave from pier' },
                { time: '10:00', activity: 'Dive 3' },
                { time: '12:00', activity: 'Lunch on boat' },
                { time: '14:00', activity: 'Dive 4' },
                { time: '16:00', activity: 'Arrival pier' }
            ]
        }
    }
}
</script>