import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { PermissionModule } from '@/store/modules/permission'
import { UserModule } from '@/store/modules/user'
import { Route } from 'vue-router'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach(async(to: Route, from: Route, next: any) => {
  console.log(`beforeEach to: ${to.path} from: ${from.path}`)
  NProgress.start()
  // if (UserModule.id_token) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     if (UserModule.roles.length === 0) {
  //       try {
  //         await UserModule.GetUserInfo()
  //         const roles = UserModule.roles
  //         PermissionModule.GenerateRoutes(roles)
  //         router.addRoutes(PermissionModule.dynamicRoutes)
  //         next({ ...to, replace: true })
  //       } catch (err) {
  //         UserModule.ResetToken()
  //         Message.error(err || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next('/login')
  //     NProgress.done()
  //   }
  // }
  next()
  NProgress.done()
})

router.afterEach(() => {
    NProgress.done()
})
