import { createRouter, createWebHistory } from 'vue-router'
import { useAgulite } from '../composables'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Service from '../views/Service.vue'
import Contact from '../views/Contact.vue'
import Course from '../views/Course.vue'
import course from '../views/course1.vue'
import Signin from '../views/authentication/Signin.vue'
import Signup from '../views/authentication/Signup.vue'
import Dashboard from '../views/dashboard/Userdashboard.vue'
import Connection from '../views/dashboard/connection.vue'
import Profile from '../views/dashboard/Profile.vue'
import StudentCourses from '../views/dashboard/Courses.vue'
import Updateprofile from '../views/dashboard/Updateprofile.vue'
import Verification from '../views/authentication/verification.vue'
import Predashboard from '../views/dashboard/predashboard.vue'
import Predashboard2 from '../views/dashboard/predashboard2.vue'
import Assessment from '../views/dashboard/Assessment.vue'
import CordinatorDashboard from '../views/CordinatorDashboard/cordinatordashboard.vue'
import CordinatorStudentStatus from '../views/CordinatorDashboard/StudentStatus.vue'
import CordinatorStudents from '../views/CordinatorDashboard/Students.vue'
import CordinatorCourses from '../views/CordinatorDashboard/CordinatorCourses.vue'
import Details from '../views/Details.vue'
import PreCheckout from '../views/preCheckout.vue'
import Checkout from '../views/checkout.vue'

const handleUserAuthGuard = async (to, from, next) => {
  let agulite = await useAgulite().getAgulite()
  let accessToken = localStorage.getItem('logged-in-user')

  if(agulite && accessToken){
    next()
    return
  }

  next('/signin')
}

const handleUserSignOut = async (to, from, next) => {
  await useAgulite().signout()
  next('/signin')
}

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
    path: '/course',
    name: 'Course',
    component: Course
  },
  {
    path: '/blockchain-development',
    name: 'course1',
    component: course
  },
  {
    path: '/pre-checkout',
    name: 'preCheckout',
    component: PreCheckout
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
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
    path: '/signout',
    name: 'Signout',
    component: Signin,
    beforeEnter: handleUserSignOut
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
    path: '/connection',
    name: 'Connection',
    component: Connection
  },
  {
    path: '/predashboard',
    name: 'Predashboard',
    component: Predashboard
  },
  {
    path: '/predashboard2',
    name: 'Predashboard2',
    component: Predashboard2
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: handleUserAuthGuard
  },
  {
    path: '/dashboard/courses',
    name: 'StudentCourses',
    component: StudentCourses
  },
  {
    path: '/updateprofile',
    name: 'Updateprofile',
    component: Updateprofile,
    beforeEnter: handleUserAuthGuard
  },
  {
    path: '/verification',
    name: 'Verification',
    component: Verification
  },
  {
    path: '/dashboard/courses/:id',
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
  },
  {
    path: '/cordinator/students',
    name: 'CordinatorStudents',
    component: CordinatorStudents
  },
  {
    path: '/cordinator/student/status',
    name: 'CordinatorStudentStatus',
    component: CordinatorStudentStatus
  },
  {
    path: '/cordinator/courses',
    name: 'CordinatorCourses',
    component: CordinatorCourses
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
