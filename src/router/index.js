import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage/HomePage.vue';
import AboutUsPage from '../views/AboutPage/AboutUsPage.vue';
import ContactUsPage from '../views/ContactusPage/ContactUsPage.vue';
import CoursePage from '../views/CoursePage/CoursePage.vue';
import ProductPage from '../views/ProductPage/ProductPage.vue';
import ProductDetails from '../views/ProductPage/ProductDetails.vue';
import TripPage from '../views/TripPage/TripPage.vue';
import TripDetails from '../views/TripPage/TripDetails.vue';
import CourseDetails from '../views/CoursePage/CourseDetails.vue';
import BlogPage from '../views/BlogPage/BlogPage.vue';
import BlogDetail from '../views/BlogPage/BlogDetail.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutUsPage },
  { path: '/contact', component: ContactUsPage },
  { path: '/courses', component: CoursePage },
  { path: '/equipments', component: ProductPage },
  { path: '/trips', component: TripPage },
  { path: '/blog', component: BlogPage },
  {
    path: '/trips/:id',
    name: 'TripDetails',
    component: TripDetails,
    props: true 
  },
  {
    path: '/courses/:id',
    name: 'CourseDetails',
    component: CourseDetails,
    props: true 
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetail,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
