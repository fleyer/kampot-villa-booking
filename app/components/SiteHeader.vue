<script setup lang="ts">
import { villa } from '~/config/villa'

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'Home', to: { hash: '' } },
  { label: 'Booking', to: { hash: '#booking' } },
  { label: 'Contact', to: { hash: '#contact' } }
]

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 40 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <NuxtLink :to="{ hash: '#' }" class="font-serif text-xl tracking-wide" :class="scrolled ? 'text-stone-900' : 'text-white'">
        {{ villa.name }}
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="text-sm tracking-widest uppercase transition-colors"
          :class="scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span
          v-for="i in 3"
          :key="i"
          class="block w-5 h-px transition-colors"
          :class="scrolled ? 'bg-stone-700' : 'bg-white'"
        />
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="md:hidden bg-white border-t border-stone-200">
      <nav class="flex flex-col px-6 py-4 gap-4">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
