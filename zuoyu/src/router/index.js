import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import business from '@/components/business'
import companyQual from '@/components/companyQual'
import companyPe from '@/components/companyPe'
import officeEn from '@/components/officeEn'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path:'/companyQual',
      name:'companyQual',
      component:companyQual
    },
    {
      path:'/companyPe',
      name:'companyPe',
      component:companyPe
    },
    {
      path:'/officeEn',
      name:'officeEn',
      component:officeEn
    }
  ]
})
