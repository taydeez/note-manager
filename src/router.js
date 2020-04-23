
import Vue from 'vue'
import Router from 'vue-router'
import Home from './Views/Home.vue'
import AddNote from './Views/AddNote.vue'
import Notes from './Views/Notes.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/add', name: 'add', component: AddNote },
    { path: '/notes/:id', name: 'notes', component: Notes, params: true }
  ]
})
