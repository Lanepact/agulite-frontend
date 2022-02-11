import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Service from '../views/Service.vue'
import Contact from '../views/Contact.vue'
import Signin from '../views/authentication/Signin.vue'
import Signup from '../views/authentication/Signup.vue'
import Dashboard from '../views/dashboard/Userdashboard.vue'
import Profile from '../views/dashboard/Profile.vue'
import Courses from '../views/dashboard/Courses.vue'
import Updateprofile from '../views/dashboard/Updateprofile.vue'
import Verification from '../views/authentication/verification.vue'
import Assessment from '../views/dashboard/Assessment.vue'
import CordinatorDashboard from '../views/CordinatorDashboard/cordinatordashboard.vue'
import Details from '../views/Details.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/updateprofile',
    name: 'Updateprofile',
    component: Updateprofile
  },
  {
    path: '/verification',
    name: 'Verification',
    component: Verification
  },
  {
    path: '/courses/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/assessment',
    name: 'Assessment',
    component:Assessment 
  },
  {
    path: '/cordinator/dashboard',
    name: 'CordinatorDashboard',
    component: CordinatorDashboard
  }

   
       
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
