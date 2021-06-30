import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebaseInstance from '../Driver/firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {authNotRequired : false}
  },
  {
    path: '/profile/:id',
    name: 'profile',
    meta : {authNotRequired : false},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/profile.vue')
  },
  // {
  //   path: '/chat/',
  //   name: 'chat',
  //   meta : {authNotRequired : false},
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue')
  // },
  // {path: '/chat', component: () => import('../views/Chat'), meta: {authNotRequired: false}},
  // {path: '/chat/:id', component: () => import('../views/Chat'), meta: {authNotRequired: false}},
  // {path: '/chat-menu', component: () => import('../components/Chat/ChatMenu'), meta: {authNotRequired: false}},
  // {path: '/direct-message', component: () => import('../components/Chat/DirectMessage'), meta: {authNotRequired: false}},
  // {path: '/group-message', component: () => import('../components/Chat/Group/GroupMessage'), meta: {authNotRequired: false}},

  {
    path: '/profiles',
    name: 'profiles',
    meta : {authNotRequired : false},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/profiles.vue')

  },
  {
    path: '/favorite',
    name: 'favorite',
    meta : {authNotRequired : false},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/favorite.vue')

  },
  // {
  //   path: '/chat/:otherUserId',
  //   name: 'chat',
  //   meta : {authNotRequired : false},
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/pageChat.vue')
  //
  // },
  {
    path: '/messaging',
    name: 'messaging',
    meta : {authNotRequired : false},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/firebase-messaging-sw.vue')

  },
  {
    path: '/pageUser',
    name: 'user-page',
    meta : {authNotRequired : false},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pageUser.vue')
  },
  {
    path: '/pageUser/:id',
    name: 'user-page',
    meta : {authNotRequired : false},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pageUser.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta : {authNotRequired : true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login')

  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// handel user requirections
//
// router.beforeEach((to, from, next) =>{
//   const user = firebaseInstance.firebase.auth().currentUser
//   if(user && to.meta.authNotRequired || !user && !to.meta.authNotRequired) {
//     const  path = !user ? '/' : '/home';
//     return next(path)
//   }
//   next()
// })
export default router
