import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehaviorType: 'smooth',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return new Promise(resolve => setTimeout(() => resolve(savedPosition), 500))
    else if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: 'smooth'
      }
    } else if (['/', ''].includes(to.path)) return { top: 0 , behavior: 'smooth'}
    else return false
  }
} satisfies RouterConfig
