export default function (router) {
  router.map({
    '*': {
      name: 'home',
      component: require('./views/home')
    },
    '/': {
      name: 'home',
      component: require('./views/home')
    },
    '/home': {
      name: 'home',
      component: require('./views/home')
    },
    '/list': {
      name: 'list',
      component: require('./views/list')
    }
  })

  router.beforeEach(({to, from, next}) => {
    document.body.scrollTop = 0
    next()
  })

  router.afterEach(({to}) => {
  })
}
