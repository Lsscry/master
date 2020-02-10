import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import mainBusiness from '@/components/mainBusiness'
import service from '@/components/service'
import companyQual from '@/components/companyQualification'
import companyCulture from '@/components/companyCulture'
import industryCus from '@/components/industryCustomers'
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
      path:'/business',
      name:'business',
      component:mainBusiness
    },
    {
      path:'/service',
      name:'service',
      component:service
    },
    {
      path:'/companyQual',
      name:'companyQual',
      component:companyQual
    },
    {
      path:'/companyCulture',
      name:'companyCulture',
      component:companyCulture
    },
    {
      path:'/industryCus',
      name:'industryCus',
      component:industryCus
    }
  ]
})
