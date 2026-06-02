import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, from, savedPosition) {
    const behavior = import.meta.client && window.innerWidth >= 768 ? 'smooth' : 'instant'
    if (savedPosition) return new Promise(resolve => setTimeout(() => resolve(savedPosition), 500))
    else if (to.hash) return { el: to.hash, behavior }
    else if (['/', ''].includes(to.path)) return { top: 0, behavior }
    else return false
  }
} satisfies RouterConfig
