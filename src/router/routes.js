import Home from '../components/home/Home.vue'
import Basic from '../components/basic/Main.vue'
import VueX from '../components/vue-x/Main.vue'

const User = resolve => {
  require.ensure(['../components/user/User.vue'], () => {
    resolve(require('../components/user/User.vue'))
  }, 'user')
}

const UserStart = resolve => {
  require.ensure(['../components/user/UserStart.vue'], () => {
    resolve(require('../components/user/UserStart.vue'))
  }, 'user')
}

const UserEdit = resolve => {
  require.ensure(['../components/user/UserEdit.vue'], () => {
    resolve(require('../components/user/UserEdit.vue'))
  }, 'user')
}

const UserDetail = resolve => {
  require.ensure(['../components/user/UserDetail.vue'], () => {
    resolve(require('../components/user/UserDetail.vue'))
  }, 'user')
}
export const routes = [
  {
    path: '/', component: Home, name: 'home'
  }, {
    path: '/user',
    component: User,
    children: [
      { path: '', component: UserStart },
      { path: ':id',
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('User edit before enter')
          next()
        }
      },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ]
  }, {
    path: '/basic', component: Basic
  }, {
    path: '/vuex', component: VueX
  }, {
    path: '/redirect-me', redirect: {name: 'home'}
  }, {
    path: '*', redirect: '/'
  }
]
